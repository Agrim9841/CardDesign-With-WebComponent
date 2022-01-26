import { LitElement, html, css, nothing } from 'lit';

import '@polymer/paper-button/paper-button.js';

class BindingForm extends LitElement {

    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles (){
        return [css`
            h2{
                display: block;
                width: 100%;
                margin-bottom: 20px;
            }

            .form-wrapper{
                display: flex;
                padding: 0px 30px;
                box-sizing: border-box;
                flex-wrap: wrap;
            }

            .text-field-container{
                width: 50%;
                padding-right: 10px;
                box-sizing: border-box;
                margin-bottom: 10px;
            }

            .other-field-container{
                width: 100%;
                margin-bottom: 10px;
            }

            .button-group{
                margin: 5px 0px;       
            }

            .create-btn{
                background-color: crimson;
                color: white;
            }

            .cancel-btn{
                color: grey;
            }
        `];
    }

    /**
     * Properties for the component.
     * 
     * @returns {Object} 
     */
    static get properties(){
        return {

            /**
             * Object of all the input names and values.
             * Passed from parents.
             * 
             * @type {Object}
             */
            fieldDetails: { type: Object },
    
        }
    }


    /**
     * Renders Html.
     * 
     * @returns {HTMLComponent}
     */
    render(){
        return(html`
            <div class="form-wrapper">
                <h2>${this.fieldDetails.title}</h2>
                ${
                    this.fieldDetails.fields.map((field)=>{
                        switch(field.type){
                            case("text"):
                                return html`
                                    <div class="text-field-container">
                                        <input-field .inputDetail=${field}></input-field>
                                    </div>
                                `
                            case("number"):
                                return html`
                                    <div class="text-field-container">
                                        <input-field .inputDetail=${field}></input-field>
                                    </div>
                                `
                            case("checkbox-group"):
                                return html`
                                    <div class="other-field-container">
                                        <checkbox-group .inputDetail=${field}></checkbox-group>
                                    </div>
                                `
                            case("textarea"):
                                return html`
                                    <div class="other-field-container">
                                        <textarea-field .inputDetail=${field}></textarea-field>
                                    </div>
                                `
                            case("date"):
                                return html`
                                    <div class="other-field-container">
                                        <date-field .inputDetail=${field}></date-field>
                                    </div>
                                `
                            default:
                                nothing;
                        }
                    })
                }
                <div class="button-group">
                    <paper-button class="create-btn" raised>Create</paper-button>
                    <paper-button class="cancel-btn">Cancel</paper-button>
                </div>
            </div>
        `)
    }
}

customElements.define('binding-form', BindingForm);