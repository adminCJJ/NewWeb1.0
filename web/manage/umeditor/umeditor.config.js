/**
 *  umeditor瀹屾暣閰嶇疆椤� *  鍙互鍦ㄨ繖閲岄厤缃暣涓紪杈戝櫒鐨勭壒鎬� */
/**************************鎻愮ず********************************
 * 鎵�湁琚敞閲婄殑閰嶇疆椤瑰潎涓篣Editor榛樿鍊笺�
 * 淇敼榛樿閰嶇疆璇烽鍏堢‘淇濆凡缁忓畬鍏ㄦ槑纭鍙傛暟鐨勭湡瀹炵敤閫斻�
 * 涓昏鏈変袱绉嶄慨鏀规柟妗堬紝涓�鏄彇娑堟澶勬敞閲婏紝鐒跺悗淇敼鎴愬搴斿弬鏁帮紱鍙︿竴绉嶆槸鍦ㄥ疄渚嬪寲缂栬緫鍣ㄦ椂浼犲叆瀵瑰簲鍙傛暟銆� * 褰撳崌绾х紪杈戝櫒鏃讹紝鍙洿鎺ヤ娇鐢ㄦ棫鐗堥厤缃枃浠舵浛鎹㈡柊鐗堥厤缃枃浠�涓嶇敤鎷呭績鏃х増閰嶇疆鏂囦欢涓洜缂哄皯鏂板姛鑳芥墍闇�殑鍙傛暟鑰屽鑷磋剼鏈姤閿欍�
 **************************鎻愮ず********************************/


(function () {
    /**
     * 缂栬緫鍣ㄨ祫婧愭枃浠舵牴璺緞銆傚畠鎵�〃绀虹殑鍚箟鏄細浠ョ紪杈戝櫒瀹炰緥鍖栭〉闈负褰撳墠璺緞锛屾寚鍚戠紪杈戝櫒璧勬簮鏂囦欢锛堝嵆dialog绛夋枃浠跺す锛夌殑璺緞銆�     * 閴翠簬寰堝鍚屽鍦ㄤ娇鐢ㄧ紪杈戝櫒鐨勬椂鍊欏嚭鐜扮殑绉嶇璺緞闂锛屾澶勫己鐑堝缓璁ぇ瀹朵娇鐢�鐩稿浜庣綉绔欐牴鐩綍鐨勭浉瀵硅矾寰�杩涜閰嶇疆銆�     * "鐩稿浜庣綉绔欐牴鐩綍鐨勭浉瀵硅矾寰�涔熷氨鏄互鏂滄潬寮�ご鐨勫舰濡�/myProject/umeditor/"杩欐牱鐨勮矾寰勩�
     * 濡傛灉绔欑偣涓湁澶氫釜涓嶅湪鍚屼竴灞傜骇鐨勯〉闈㈤渶瑕佸疄渚嬪寲缂栬緫鍣紝涓斿紩鐢ㄤ簡鍚屼竴UEditor鐨勬椂鍊欙紝姝ゅ鐨刄RL鍙兘涓嶉�鐢ㄤ簬姣忎釜椤甸潰鐨勭紪杈戝櫒銆�     * 鍥犳锛孶Editor鎻愪緵浜嗛拡瀵逛笉鍚岄〉闈㈢殑缂栬緫鍣ㄥ彲鍗曠嫭閰嶇疆鐨勬牴璺緞锛屽叿浣撴潵璇达紝鍦ㄩ渶瑕佸疄渚嬪寲缂栬緫鍣ㄧ殑椤甸潰鏈�《閮ㄥ啓涓婂涓嬩唬鐮佸嵆鍙�褰撶劧锛岄渶瑕佷护姝ゅ鐨刄RL绛変簬瀵瑰簲鐨勯厤缃�
     * window.UMEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
	var URL = window.UMEDITOR_HOME_URL || "/NewWeb/manage/umeditor/";
//    var URL = window.UMEDITOR_HOME_URL || (function(){
//
//        function PathStack() {
//
//            this.documentURL = self.document.URL || self.location.href;
//
//            this.separator = '/';
//            this.separatorPattern = /\\|\//g;
//            this.currentDir = './';
//            this.currentDirPattern = /^[.]\/]/;
//
//            this.path = this.documentURL;
//            this.stack = [];
//
//            this.push( this.documentURL );
//
//        }
//
//        PathStack.isParentPath = function( path ){
//            return path === '..';
//        };
//
//        PathStack.hasProtocol = function( path ){
//            return !!PathStack.getProtocol( path );
//        };
//
//        PathStack.getProtocol = function( path ){
//
//            var protocol = /^[^:]*:\/*/.exec( path );
//
//            return protocol ? protocol[0] : null;
//
//        };
//
//        PathStack.prototype = {
//            push: function( path ){
//
//                this.path = path;
//
//                update.call( this );
//                parse.call( this );
//
//                return this;
//
//            },
//            getPath: function(){
//                return this + "";
//            },
//            toString: function(){
//                return this.protocol + ( this.stack.concat( [''] ) ).join( this.separator );
//            }
//        };
//
//        function update() {
//
//            var protocol = PathStack.getProtocol( this.path || '' );
//
//            if( protocol ) {
//
//                //鏍瑰崗璁�                this.protocol = protocol;
//
//                //local
//                this.localSeparator = /\\|\//.exec( this.path.replace( protocol, '' ) )[0];
//
//                this.stack = [];
//            } else {
//                protocol = /\\|\//.exec( this.path );
//                protocol && (this.localSeparator = protocol[0]);
//            }
//
//        }
//
//        function parse(){
//
//            var parsedStack = this.path.replace( this.currentDirPattern, '' );
//
//            if( PathStack.hasProtocol( this.path ) ) {
//                parsedStack = parsedStack.replace( this.protocol , '');
//            }
//
//            parsedStack = parsedStack.split( this.localSeparator );
//            parsedStack.length = parsedStack.length - 1;
//
//            for(var i= 0,tempPath,l=parsedStack.length,root = this.stack;i<l;i++){
//                tempPath = parsedStack[i];
//                if(tempPath){
//                    if( PathStack.isParentPath( tempPath ) ) {
//                        root.pop();
//                    } else {
//                        root.push( tempPath );
//                    }
//                }
//
//            }
//
//
//        }
//
//        var currentPath = document.getElementsByTagName('script');
//
//        currentPath = currentPath[ currentPath.length -1 ].src;
//
//        return new PathStack().push( currentPath ) + "";
//
//
//    })();

    /**
     * 閰嶇疆椤逛富浣撱�娉ㄦ剰锛屾澶勬墍鏈夋秹鍙婂埌璺緞鐨勯厤缃埆閬楁紡URL鍙橀噺銆�     */
    window.UMEDITOR_CONFIG = {

        //涓虹紪杈戝櫒瀹炰緥娣诲姞涓�釜璺緞锛岃繖涓笉鑳借娉ㄩ噴
        UMEDITOR_HOME_URL : URL

        //鍥剧墖涓婁紶閰嶇疆鍖�        ,imageUrl:URL+"php/imageUp.php"             //鍥剧墖涓婁紶鎻愪氦鍦板潃
        ,imagePath:URL + "php/"                     //鍥剧墖淇鍦板潃锛屽紩鐢ㄤ簡fixedImagePath,濡傛湁鐗规畩闇�眰锛屽彲鑷閰嶇疆
        ,imageFieldName:"upfile"                   //鍥剧墖鏁版嵁鐨刱ey,鑻ユ澶勪慨鏀癸紝闇�鍦ㄥ悗鍙板搴旀枃浠朵慨鏀瑰搴斿弬鏁�

        //宸ュ叿鏍忎笂鐨勬墍鏈夌殑鍔熻兘鎸夐挳鍜屼笅鎷夋锛屽彲浠ュ湪new缂栬緫鍣ㄧ殑瀹炰緥鏃堕�鎷╄嚜宸遍渶瑕佺殑浠庢柊瀹氫箟
        ,toolbar:[
            'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
            'justifyleft justifycenter justifyright justifyjustify |',
            'link unlink | emotion image horizontal',
        ]

        //璇█閰嶇疆椤�榛樿鏄痾h-cn銆傛湁闇�鐨勮瘽涔熷彲浠ヤ娇鐢ㄥ涓嬭繖鏍风殑鏂瑰紡鏉ヨ嚜鍔ㄥ璇█鍒囨崲锛屽綋鐒讹紝鍓嶆彁鏉′欢鏄痩ang鏂囦欢澶逛笅瀛樺湪瀵瑰簲鐨勮瑷�枃浠讹細
        //lang鍊间篃鍙互閫氳繃鑷姩鑾峰彇 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
        //,lang:"zh-cn"
        //,langPath:URL +"lang/"

        //ie涓嬬殑閾炬帴鑷姩鐩戞祴
        //,autourldetectinie:false

        //涓婚閰嶇疆椤�榛樿鏄痙efault銆傛湁闇�鐨勮瘽涔熷彲浠ヤ娇鐢ㄥ涓嬭繖鏍风殑鏂瑰紡鏉ヨ嚜鍔ㄥ涓婚鍒囨崲锛屽綋鐒讹紝鍓嶆彁鏉′欢鏄痶hemes鏂囦欢澶逛笅瀛樺湪瀵瑰簲鐨勪富棰樻枃浠讹細
        //鐜版湁濡備笅鐨偆:default
        //,theme:'default'
        //,themePath:URL +"themes/"



        //閽堝getAllHtml鏂规硶锛屼細鍦ㄥ搴旂殑head鏍囩涓鍔犺缂栫爜璁剧疆銆�        //,charset:"utf-8"

        //甯哥敤閰嶇疆椤圭洰
        //,isShow : true    //榛樿鏄剧ず缂栬緫鍣�
        //,initialContent:'娆㈣繋浣跨敤UMEDITOR!'    //鍒濆鍖栫紪杈戝櫒鐨勫唴瀹�涔熷彲浠ラ�杩噒extarea/script缁欏�锛岀湅瀹樼綉渚嬪瓙

        //,initialFrameWidth:500 //鍒濆鍖栫紪杈戝櫒瀹藉害,榛樿500
        //,initialFrameHeight:500  //鍒濆鍖栫紪杈戝櫒楂樺害,榛樿500

        //,autoClearinitialContent:true //鏄惁鑷姩娓呴櫎缂栬緫鍣ㄥ垵濮嬪唴瀹癸紝娉ㄦ剰锛氬鏋渇ocus灞炴�璁剧疆涓簍rue,杩欎釜涔熶负鐪燂紝閭ｄ箞缂栬緫鍣ㄤ竴涓婃潵灏变細瑙﹀彂瀵艰嚧鍒濆鍖栫殑鍐呭鐪嬩笉鍒颁簡

        //,textarea:'editorValue' // 鎻愪氦琛ㄥ崟鏃讹紝鏈嶅姟鍣ㄨ幏鍙栫紪杈戝櫒鎻愪氦鍐呭鐨勬墍鐢ㄧ殑鍙傛暟锛屽瀹炰緥鏃跺彲浠ョ粰瀹瑰櫒name灞炴�锛屼細灏唍ame缁欏畾鐨勫�鏈�负姣忎釜瀹炰緥鐨勯敭鍊硷紝涓嶇敤姣忔瀹炰緥鍖栫殑鏃跺�閮借缃繖涓�

        //,focus:false //鍒濆鍖栨椂锛屾槸鍚﹁缂栬緫鍣ㄨ幏寰楃劍鐐箃rue鎴杅alse

        //,autoClearEmptyNode : true //getContent鏃讹紝鏄惁鍒犻櫎绌虹殑inlineElement鑺傜偣锛堝寘鎷祵濂楃殑鎯呭喌锛�
        //,fullscreen : false //鏄惁寮�惎鍒濆鍖栨椂鍗冲叏灞忥紝榛樿鍏抽棴

        //,readonly : false //缂栬緫鍣ㄥ垵濮嬪寲缁撴潫鍚�缂栬緫鍖哄煙鏄惁鏄彧璇荤殑锛岄粯璁ゆ槸false

        //,zIndex : 900     //缂栬緫鍣ㄥ眰绾х殑鍩烘暟,榛樿鏄�00

        //濡傛灉鑷畾涔夛紝鏈�ソ缁檖鏍囩濡備笅鐨勮楂橈紝瑕佷笉杈撳叆涓枃鏃讹紝浼氭湁璺冲姩鎰�        //娉ㄦ剰杩欓噷娣诲姞鐨勬牱寮忥紝鏈�ソ鏀惧湪.edui-editor-body .edui-body-container杩欎袱涓殑涓嬭竟锛岄槻姝㈣窡椤甸潰涓奵ss鍐茬獊
        //,initialStyle:'.edui-editor-body .edui-body-container p{line-height:1em}'

        //,autoSyncData:true //鑷姩鍚屾缂栬緫鍣ㄨ鎻愪氦鐨勬暟鎹�
        //,emotionLocalization:false //鏄惁寮�惎琛ㄦ儏鏈湴鍖栵紝榛樿鍏抽棴銆傝嫢瑕佸紑鍚纭繚emotion鏂囦欢澶逛笅鍖呭惈瀹樼綉鎻愪緵鐨刬mages琛ㄦ儏鏂囦欢澶�
        //,allHtmlEnabled:false //鎻愪氦鍒板悗鍙扮殑鏁版嵁鏄惁鍖呭惈鏁翠釜html瀛楃涓�
        //fontfamily
        //瀛椾綋璁剧疆
//        ,'fontfamily':[
//              { name: 'songti', val: '瀹嬩綋,SimSun'},
//          ]

        //fontsize
        //瀛楀彿
        //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

        //paragraph
        //娈佃惤鏍煎紡 鍊肩暀绌烘椂鏀寔澶氳瑷�嚜鍔ㄨ瘑鍒紝鑻ラ厤缃紝鍒欎互閰嶇疆鍊间负鍑�        //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

        //undo
        //鍙互鏈�鍥為�鐨勬鏁�榛樿20
        //,maxUndoCount:20
        //褰撹緭鍏ョ殑瀛楃鏁拌秴杩囪鍊兼椂锛屼繚瀛樹竴娆＄幇鍦�        //,maxInputCount:1

        //imageScaleEnabled
        // 鏄惁鍏佽鐐瑰嚮鏂囦欢鎷栨嫿鏀瑰彉澶у皬,榛樿true
        //,imageScaleEnabled:true

        //dropFileEnabled
        // 鏄惁鍏佽鎷栨斁鍥剧墖鍒扮紪杈戝尯鍩燂紝涓婁紶骞舵彃鍏�榛樿true
        //,dropFileEnabled:true

        //autoHeightEnabled
        // 鏄惁鑷姩闀块珮,榛樿true
        //,autoHeightEnabled:true

        //autoFloatEnabled
        //鏄惁淇濇寔toolbar鐨勪綅缃笉鍔�榛樿true
        //,autoFloatEnabled:true

        //娴姩鏃跺伐鍏锋爮璺濈娴忚鍣ㄩ《閮ㄧ殑楂樺害锛岀敤浜庢煇浜涘叿鏈夊浐瀹氬ご閮ㄧ殑椤甸潰
        //,topOffset:30

        //濉啓杩囨护瑙勫垯
        //,filterRules: {}
    };
})();
