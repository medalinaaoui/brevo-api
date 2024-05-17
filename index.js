const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = "API KEY";

let apiInstance = new SibApiV3Sdk.ContactsApi();

let createContact = new SibApiV3Sdk.CreateContact();

createContact.firstName = "John";
createContact.lastName = "John";

createContact.attributes = {
  SMS: "+2125243-84333",
  WHATSAPP: "+2125243-84333",
  FIRSTNAME: "Ana",
  LASTNAME: "Howa",
  INDUSTRY: "Nta",
};
createContact.listIds = [5];

apiInstance.createContact(createContact).then(
  function (data) {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  function (error) {
    console.error(error);
  }
);
