import { LitElement, html, css } from 'lit';

import './date-field';
import './checkbox-group';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-textarea.js';

/**
 * <binding-form
 *  fieldDetails = "value of all the fields"
 *  toggleBindingFormDialogue = "Function that closes the Modal"
 * ></binding-form>
 */
class BindingForm extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
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
             * @type { fieldDetails: Object }
             */
            fieldDetails: { type: Object },
            
            /**
             * Function that toggles the Binding Form Dialogue Box.
             * Passed from parents.
             * 
             * @type { toggleBindingFormDialogue: Function }
             */
            toggleBindingFormDialogue: { type: Function },
        }
    }


    /**
     * Renders Html.
     * 
     * @returns {HTMLElement}
     */
    render(){
        return(html`
            <div class="form-wrapper">
                <h2>${this.fieldDetails.title}</h2>
                
                    <div class="text-field-container">
                        <paper-input always-float-label label="Name"
                         type="text" .value=${this.fieldDetails.value.name}></paper-input>
                    </div>
                    
                    <div class="text-field-container">
                        <paper-input always-float-label label="Ligands Promoted"
                         type="text" .value=${this.fieldDetails.value.ligandsPromoted} disabled></paper-input>
                    </div>
                    
                    <div class="text-field-container">
                        <paper-input always-float-label label="Description"
                         type="text" .value=${this.fieldDetails.value.description}></paper-input>
                    </div>
                    
                    <div class="text-field-container">
                        <paper-input always-float-label label="Total Ligands in Binding Group"
                         type="text" .value=${this.fieldDetails.value.totalLigands} disabled></paper-input>
                    </div>

                    <div class="other-field-container">
                        <date-field .label=${"Date"}></date-field>
                    </div>

                    <div class="other-field-container">
                        <checkbox-group .label=${"Binding Group"} .checkboxList=${this.fieldDetails.value.bindingGroup}></checkbox-group>
                    </div>
                                
                    <div class="other-field-container">
                        <paper-textarea always-float-label label="Comments"
                         rows="3"></paper-textarea>
                    </div>      
                           
                <div class="button-group">
                    <paper-button class="create-btn" raised>Create</paper-button>
                    <paper-button class="cancel-btn" @click=${this.toggleBindingFormDialogue}>Cancel</paper-button>
                </div>
            </div>
        `)
    }
}

customElements.define('binding-form', BindingForm);