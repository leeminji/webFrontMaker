var config = (function(){
    $config = 	{
        "menuJSON" : "iccv-cyclo.json",
        "name" : "ICCV"
    }
    return {
        getConfig : function(){
            return $config;
        }
    }
})();

module.exports = config;