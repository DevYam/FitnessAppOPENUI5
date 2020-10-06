sap.ui.controller("sap.ui.demo.controller.App",{
    onInit : function (appEvent){
        var oModel = new  sap.ui.model.json.JSONModel("data.json");
        this.getView().setModel(oModel);
    }
});
