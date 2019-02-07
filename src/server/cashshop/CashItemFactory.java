package server.cashshop;

import database.DatabaseConnection;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

public class CashItemFactory {

    private final static CashItemFactory instance = new CashItemFactory();
    private final static int[] bestItems = new int[]{10003055, 10003090, 10103464, 10002960, 10103363};
    private final Map<Integer, CashItemInfo> itemStats = new HashMap<>();
    private final Map<Integer, List<Integer>> itemPackage = new HashMap<>();
    private final Map<Integer, CashItemInfo.CashModInfo> itemMods = new HashMap<>();
    private final Map<Integer, List<Integer>> openBox = new HashMap<>();
    private final MapleDataProvider data = MapleDataProviderFactory.getDataProvider("Etc.wz");

    public static CashItemFactory getInstance() {
        return instance;
    }

    public void initialize() {
        final List<MapleData> cccc = data.getData("Commodity.img").getChildren();
        for (MapleData field : cccc) {
            final int SN = MapleDataTool.getIntConvert("SN", field, 0);

            final CashItemInfo stats = new CashItemInfo(MapleDataTool.getIntConvert("ItemId", field, 0),
                    MapleDataTool.getIntConvert("Count", field, 1),
                    MapleDataTool.getIntConvert("Price", field, 0), SN,
                    MapleDataTool.getIntConvert("Period", field, 0),
                    MapleDataTool.getIntConvert("Gender", field, 2),
                    MapleDataTool.getIntConvert("OnSale", field, 0) > 0 && MapleDataTool.getIntConvert("Price", field, 0) > 0);

            if (SN > 0) {
                itemStats.put(SN, stats);
            }
        }
        final MapleData b = data.getData("CashPackage.img");
        for (MapleData c : b.getChildren()) {
            if (c.getChildByPath("SN") == null) {
                continue;
            }
            final List<Integer> packageItems = new ArrayList<>();
            for (MapleData d : c.getChildByPath("SN").getChildren()) {
                packageItems.add(MapleDataTool.getIntConvert(d));
            }
            itemPackage.put(Integer.parseInt(c.getName()), packageItems);
        }

        try {
            Connection con = DatabaseConnection.getConnection();
            try (PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items");
                 ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    CashItemInfo.CashModInfo ret = new CashItemInfo.CashModInfo(rs.getInt("serial"), rs.getInt("discount_price"), rs.getInt("mark"), rs.getInt("showup") > 0, rs.getInt("itemid"), rs.getInt("priority"), rs.getInt("package") > 0, rs.getInt("period"), rs.getInt("gender"), rs.getInt("count"), rs.getInt("meso"), rs.getInt("unk_1"), rs.getInt("unk_2"), rs.getInt("unk_3"), rs.getInt("extra_flags"));
                    itemMods.put(ret.sn, ret);
                    if (ret.showUp) {
                        final CashItemInfo cc = itemStats.get(Integer.valueOf(ret.sn));
                        if (cc != null) {
                            ret.toCItem(cc); //init
                        }
                    }
                }
            }
        } catch (Exception e) {
        }

        List<Integer> availableSN = new LinkedList<>();
        availableSN.add(20001141);
        availableSN.add(20001142);
        availableSN.add(20001143);
        availableSN.add(20001144);
        availableSN.add(20001145);
        availableSN.add(20001146);
        availableSN.add(20001147);
        openBox.put(5533003, availableSN); // Rainbow Visor Box

        availableSN = new LinkedList<>();
        availableSN.add(20000462);
        availableSN.add(20000463);
        availableSN.add(20000464);
        availableSN.add(20000465);
        availableSN.add(20000466);
        availableSN.add(20000467);
        availableSN.add(20000468);
        availableSN.add(20000469);
        openBox.put(5533000, availableSN); // Korean stuffs..

        availableSN = new LinkedList<>();
        availableSN.add(20800259);
        availableSN.add(20800260);
        availableSN.add(20800263);
        availableSN.add(20800264);
        availableSN.add(20800265);
        availableSN.add(20800267);
        openBox.put(5533001, availableSN); // Angelic Beam Weapon Box

        availableSN = new LinkedList<>();
        availableSN.add(20800270);
        availableSN.add(20800271);
        availableSN.add(20800272);
        availableSN.add(20800273);
        availableSN.add(20800274);
        openBox.put(5533002, availableSN); // Chief Knight Weapon Box
    }

    public final CashItemInfo getSimpleItem(int sn) {
        return itemStats.get(sn);
    }

    public final int getItemSN(int itemid) {
        for (Map.Entry<Integer, CashItemInfo> ci : itemStats.entrySet()) {
            if (ci.getValue().getId() == itemid) {
                return ci.getValue().getSN();
            }
        }
        return 0;
    }

    public final CashItemInfo getItem(int sn) {
        final CashItemInfo stats = itemStats.get(Integer.valueOf(sn));
        final CashItemInfo.CashModInfo z = getModInfo(sn);
        if (z != null && z.showUp) {
            return z.toCItem(stats); //null doesnt matter
        }
        if (stats == null || !stats.onSale()) {
            return null;
        }
        //hmm
        return stats;
    }

    public final List<Integer> getPackageItems(int itemId) {
        return itemPackage.get(itemId);
    }

    public final CashItemInfo.CashModInfo getModInfo(int sn) {
        return itemMods.get(sn);
    }

    public final Collection<CashItemInfo.CashModInfo> getAllModInfo() {
        Map<Integer, CashItemInfo.CashModInfo> cret = new HashMap<>();
        for(CashItemInfo.CashModInfo ci : itemMods.values()){
            if(ci.showUp)
                cret.put(ci.sn, ci);
        }
        return cret.values();
    }

    public final Map<Integer, List<Integer>> getRandomItemInfo() {
        return openBox;
    }

    public final int[] getBestItems() {
        return bestItems;
    }
}
