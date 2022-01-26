import { LitElement, html, css } from 'lit';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class BindingButton extends LitElement {

    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles (){
        return [css`
            paper-dialog {
                width: 700px;
                border-radius: 5px;
                overflow: auto;
            }

            paper-dialog::-webkit-scrollbar {
                display: none;
            }

            .toggle-dialogue-btn{
                background-color: teal;
                color: white;
                margin-top: 20px;
                margin-left: 20px;
            }

            .cross-button{
                position: absolute;
                right: 0px;
            }

            .cross-icon{
                color: red;
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
     * Initialize props and methods.
     */
    constructor(){
        super();

        this.fieldDetails = {
            title: "Create Binding Group",
            fields: [
                {
                    name: "Name",
                    type: "text",
                    value: "Binding",
                },
                {
                    name: "Ligands Promoted",
                    type: "number",
                    value: 24,
                    isDisabled: true,
                },
                {
                    name: "Description",
                    type: "text",
                    value: "Promising Ligands",
                },
                {
                    name: "Total Ligands in Binding Group",
                    type: "number",
                    value: 100,
                    isDisabled: true,
                },
                {
                    name: "Date",
                    type: "date"
                },
                {
                    name: "Binding Group",
                    type: "checkbox-group",
                    boxes: [
                        {
                            name: "BRD2 Affinity_High_Affinity",
                            isChecked: true,
                        },
                        {
                            name: "BRD2 AMP_PNP_comprtitive",
                            isChecked: false,
                        },
                        {
                            name: "BRD2 NRXX-04436e354_noncompetative",
                            isChecked: true,
                        },
                        {
                            name: "BRD2 Affinity_High_Affinity",
                            isChecked: false,
                        },
                        {
                            name: "BRD2 AMP_PNP_comprtitive",
                            isChecked: false,
                        },
                        {
                            name: "BRD2 NRXX-04436e354_noncompetative",
                            isChecked: true,
                        },
                    ]
                },
                {
                    name: "Comments",
                    type: "textarea"
                },

            ]
        };
    }


    /**
     * Function that toggles the Dialogue.
     */
    toggleDialogue(){
        this.shadowRoot.querySelector("#animated").toggle()
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLComponent}
     */
    render(){
        return(html`
            <paper-button class="toggle-dialogue-btn" raised @click=${this.toggleDialogue}>${this.fieldDetails.title}</paper-button>
            <paper-dialog id="animated" modal>
                <paper-dialog-scrollable>
                    <div class="cross-button">
                        <paper-button dialog-confirm>
                            <iron-icon icon="close" class="cross-icon"></iron-icon>
                        </paper-button>
                    </div>
                    <binding-form style="width: 100%" .fieldDetails=${this.fieldDetails}></binding-form>
                </paper-dialog-scrollable>
            </paper-dialog>
        `)
    }
}

customElements.define('binding-button', BindingButton);