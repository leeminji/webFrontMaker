var config = (function(){
    $config = 	{
        "menuJSON" : "menu-cyclo.json",
        "name" : "(주)협동사이크로"
    }
    return {
        getConfig : function(){
            return $config;
        }
    }
})();

module.exports = config;