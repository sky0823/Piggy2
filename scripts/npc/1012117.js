/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;
var sele;
var facetype;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("HI，我是#p1012117#，我來幫你剪頭髮，請選擇一個你想要的。\r\n#L0#我要剪頭髮#l\r\n#L1#我要剪頭髮2#l\r\n#L2#我要染頭髮#l\r\n#L3#我要整臉形#l\r\n#L4#我要整臉形2#l\r\n")
    } else if (status == 1) {
		sele = selection;
		if (selection == 0) {
			if(!cm.haveItem(5150041))
			{
				cm.sendOk("你身上沒有傳說美髮券喔!");
				cm.dispose();
				return;
			}
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

			if (cm.getPlayer().getGender() == 0) {
				hair_Colo_new = [30000
				,30020,30030,30040,30050
				,30060,30100,30110,30120,30130
				,30140,30150,30160,30170,30180
				,30190,30200,30210,30220,30230
				,30240,30250,30260,30270,30280
				,30290,30300,30310,30320,30330
				,30340,30350,30360,30370,30400
				,30410,30420,30440,30450,30460
				,30470,30480,30490,30510,30520
				,30530,30540,30550,30560,30570
				,30580,30590,30600,30610,30620
				,30630,30640,30650,30660,30670
				,30680,30700,30710,30720,30730
				,30740,30750,30790,30800,30810
				,30820,30830,30840,30850,30860
				,30870,30880,30890,30900,30910
				,30920,30930,30940,30950,30990
				];
			} else {
			 hair_Colo_new = [31000
			 ,31010,31020,31030,31040,31050
			 ,31060,31070,31080,31090,31100
			 ,31110,31120,31130,31140,31150
			 ,31160,31170,31180,31190,31200
			 ,31210,31220,31230,31240,31250
			 ,31260,31270,31280,31290,31300
			 ,31310,31320,31330,31340,31350
			 ,31400,31410,31420,31440,31450
			 ,31460,31470,31480,31490,31510
			 ,31520,31530,31540,31550,31560
			 ,31570,31580,31590,31600,31610
			 ,31620,31630,31640,31650,31670
			 ,31680,31690,31700,31710,31760
			 ,31770,31780,31790,31800,31810
			 ,31820,31830,31840,31850,31860
			 ,31870,31880,31910,31920,31930
			 ,31940,31950,31990
			 ];

			}
			
			for (var i = 0; i < hair_Colo_new.length; i++) {
				hair_Colo_new[i] = hair_Colo_new[i];
			}
			cm.askAvatar("想換成哪種很棒的髮型呢? 我就可以幫你換一個很棒的髮型喔", hair_Colo_new);
		}else if (selection == 1) {
			if(!cm.haveItem(5150041))
			{
				cm.sendOk("你身上沒有傳說美髮券喔!");
				cm.dispose();
				return;
			}
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

			if (cm.getPlayer().getGender() == 0) {
				hair_Colo_new = [35020
				,35040,35070,35090,35100,35150
				,35260,35290,35300,35350
				,35360,35420,35430,35440,35460
				,35470,35500,35510,35530,35550
				,35590,35600,35620,35650,35660
				,35680,35710,35780
				,35790,35950,36000,36020,36040
				,36070,36140,36150,36180
				,36300,36310,36350,36420
				,36440,36450,36460,36830
				//10/18新增
				,36710 ,36510 ,35180 ,33320 ,37320 ,38610 ,35650
				
				];
			} else {
			 hair_Colo_new = [37270,37450,37560,37760
			 ,37810,37840,37950,38020
			 ,38420,38430,37950,38470
			 ,39480
			 ,39490,39500,39510,39520,39530
			 ,39540,39550,39560,39580,39730
			 ,39590,39660
		 	 ,39680,39690,39700,39710,39720
	 		 ,39740,39750,39760,39770,39780
  			 ,39790,39810,39820,39830,39840
			 ,39850,39860,39880
			 ,39900,39910,39920,39930,39940
			 ,39950,39960,39970
			 //10/18新增
			 ,36710 ,36510 ,35180 ,33320 ,37320 ,38610 ,35650
			 ];

			}
			
			for (var i = 0; i < hair_Colo_new.length; i++) {
				hair_Colo_new[i] = hair_Colo_new[i];
			}
			cm.askAvatar("想換成哪種很棒的髮型呢? 我就可以幫你換一個很棒的髮型喔", hair_Colo_new);
		} else if (selection ==2) {
			if(!cm.haveItem(5150041))
			{
				cm.sendOk("你身上沒有傳說美髮券喔!");
				cm.dispose();
				return;
			}
			var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
			hair_Colo_new = [];
			beauty = 2;


			for (var i = 0; i < 8; i++) {
			hair_Colo_new[i] = currenthaircolo + i;
			}
			if(cm.getPlayerStat("HAIR") < 40000)
				cm.askAvatar("你想染成什麼顏色?", hair_Colo_new);
			else{
				//cm.sendSimple("你想染成什麼顏色?\r\n#L" + currenthaircolo +"#黑色#l\r\n#L" + (currenthaircolo+1) +"#紅色#l\r\n#L" + (currenthaircolo+2) +"#橘色#l\r\n#L" + (currenthaircolo+3) +"#黃色#l\r\n#L" + (currenthaircolo+4) +"#綠色#l\r\n#L" + (currenthaircolo+5) +"#藍色#l\r\n#L" + (currenthaircolo+6) +"#紫色#l\r\n#L" + (currenthaircolo+7) +"#棕色#l\r\n")
				cm.sendOk("目前 4開頭染髮暫時關閉");
				cm.dispose();
				return;
			}
		}else if (selection == 3) {
			var face = cm.getPlayerStat("FACE");

			if (cm.getPlayerStat("GENDER") == 0) {
				facetype = [20000, 
				20001, 20002, 20003, 20004, 20005, 
				20006, 20007, 20008, 20009, 20010, 
				20011, 20012, 20013, 20014, 20015, 
				20016, 20017, 20018, 20019, 20020, 
				20021, 20022, 20023, 20027, 20028, 
				20029, 20031, 20032, 20036, 20037,
				
				23000,23001,23002,23003,23004,
				23005,23006,23008,23009,23010,
				23011,23012,23013,23014,23015,
				23016,23017,23018,23019,23020,
				23021,23023,23023,23024,23025,
				23026,23027,23028,23029,23031,
				23032,23033,23034,23035,23036,
				23037,23038,23039,23040,23041,
				23042,23043,23044,23045,23046,
				23047,23048,23051,23053,23054,
				23056,23057,23060,23061,23062,
				23063,23065,23066,23067,23068,
				23069,23072,23073,23074,23075,
				23079,23080,23081,23082,23083,
				23084,23085,23086,23087,23088,
				23089,23090,23091,23092,23095,
				23096,23097,23098,23099
				//12/12新增
				,20046,20044
				];
			} else {
				facetype = [21000, 
				21001, 21002, 21003, 21004, 21005, 
				21006, 21007, 21008, 21009, 21010, 
				21011, 21012, 21013, 21014, 21015, 
				21016, 21017, 21018, 21019, 21020, 
				21021, 21022, 21026, 21027, 21029, 
				21030, 21034, 21035,
				
				
				23000,23001,23002,23003,23004,
				23005,23006,23008,23009,23010,
				23011,23012,23013,23014,23015,
				23016,23017,23018,23019,23020,
				23021,23023,23023,23024,23025,
				23026,23027,23028,23029,23031,
				23032,23033,23034,23035,23036,
				23037,23038,23039,23040,23041,
				23042,23043,23044,23045,23046,
				23047,23048,23051,23053,23054,
				23056,23057,23060,23061,23062,
				23063,23065,23066,23067,23068,
				23069,23072,23073,23074,23075,
				23079,23080,23081,23082,23083,
				23084,23085,23086,23087,23088,
				23089,23090,23091,23092,23095,
				23096,23097,23098,23099
				//12/12新增
				,21042,21044
				];
			}
			for (var i = 0; i < facetype.length; i++) {
				facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}
			cm.askAvatar("你看你喜歡哪張臉龐 只需要#b#t5152001##k", facetype);
		}else if (selection == 4) {
			var face = cm.getPlayerStat("FACE");

			if (cm.getPlayerStat("GENDER") == 0) {
				facetype = [25000, 25001, 25003, 25004, 25005, 25006, 25007, 25008, 25009, 25010,
				25011, 25012, 25013, 25014, 25015, 25016, 25017, 25018, 25019, 25020,
				25021, 25022, 25023, 25028, 25029, 25030, 25031, 25032, 25034,
				25035, 25036, 25037, 25038, 25039, 25040, 25041, 25042,
				26000, 26003, 26004, 26005, 26006, 26007, 26008, 26009, 26010, 26011,
				26012, 26013, 26014, 26015, 26016, 26017, 26018, 26019, 26020, 26021,
				26022, 26023, 26024, 26025, 26026, 26027, 26028, 26029, 26033,
				26034, 26035, 26036, 26037, 26038, 26039, 26040, 26041, 26042, 26043,
				26044, 26045, 26052
				];
			} else {
				facetype = [24001, 24002, 24003, 24004, 24005, 24006, 24007, 24008, 24009, 
				24010, 24011, 24012, 24013, 24014, 24015, 24016, 24018, 24019, 24020,
				24022, 24024, 24026, 24027, 24028, 24029, 24031, 24033, 24034, 24035,
				24036, 24037, 24038, 24039, 24040, 24041, 24042, 24043, 24044, 24045,
				24048, 24050, 24051, 24054, 24055, 24058, 24059, 24060, 24061, 24062,
				24063, 24064, 24065, 24066, 24067, 24068, 24071, 24072, 24073, 24074,
				24075, 24076, 24077, 24078, 24079, 24080, 24081, 24082, 24083, 24084,
				24085, 24086, 24087, 24088, 24091, 24092, 24093, 24094, 24095, 24096,
				24097, 24098, 24099, 26000, 26003, 26004, 26005, 26006, 26007, 26008,
				26009, 26010, 26011, 26012, 26013, 26014, 26015, 26016, 26017, 26018,
				26019, 26020, 26021, 26022, 26023, 26024, 26025, 26026, 26027, 26028,
				26029, 26033, 26034, 26035, 26036, 26037, 26038, 26039, 26040, 26041,
				26042, 26043, 26044, 26045, 26052
				];
			}
			for (var i = 0; i < facetype.length; i++) {
				facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}
			cm.askAvatar("你看你喜歡哪張臉龐 只需要#b#t5152001##k", facetype);
		}
    } else if (status == 2){
		cm.sendOk("享受!");
		if(sele == 0 || sele == 1 || sele == 2){
			if (beauty == 1){
						cm.gainItem(5150041,-1);
						cm.setHair(hair_Colo_new[selection]);
			} else {
					cm.gainItem(5150041,-1);
					cm.setHair(hair_Colo_new[selection]);
			}
		}else{
			cm.gainItem(5150041,-1);
			cm.setFace(facetype[selection]);
		}
		cm.dispose();
		return;
    }
}