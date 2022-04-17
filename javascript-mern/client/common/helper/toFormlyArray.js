import { isArray, isObject, isEmpty } from "./dataType"

export default {
    getPairs(data, key, name) {
        let arrayData = [];
        if (isArray(data)) {
            for (let x of data) {
                if (isObject(x)) {
                    if (isEmpty(key)) {
                        console.error("empty variable 'keyProp' in field 'select'!");
                        return [];
                    }
                    if (isEmpty(name)) {
                        console.error("empty variable 'nameProp' in field 'select'!");
                        return [];
                    }
                    let objData = {
                      "title": x[name],
                      "type": "integer",
                      "enum": [
                        x[key]
                      ]
                    };
                    arrayData.push(objData);
                } else {
                    let objData = {
                      "title": x,
                      "type": "string",
                      "enum": [
                        x
                      ]
                    };
                    arrayData.push(objData);
                }
            }
        } else if (isObject(data)) {
            for (let [key,value] of Object.entries(data)) {
                let objData = {
                  "title": value,
                  "type": "string",
                  "enum": [
                    key
                  ]
                };
                arrayData.push(objData);
            }
        }
        return arrayData;
    }
}
/*

  created() {
    this.fields = this.getAllFields();
    this.getAllLanguages();
  },
  methods: {
    getAllLanguages() {
      HTTP.get("get-all-languages",)
        .then(response => {
          this.languageOptions = response.data.data
          this.fields = this.getAllFields()
      })
      .catch(e => {
        console.error("unable to fetch options from server!")
      })
    },
    getAllFields() {
      return [
        {
          key: 'lang_code',
          type: 'select',
          required : true,
          templateOptions: {
            label: 'Language Code'
          },
          options: this.languageOptions,
          keyProp: 'lang_code',
          nameProp: 'name'
        },
        {
          key: 'estado',
          type: 'select',
          required : true,
          templateOptions: {
            label: 'Estado'
          },
          options: {
            show: 'Show',
            hide: 'Hide',
          }
        },
      ]
    }
  }
}
*/
