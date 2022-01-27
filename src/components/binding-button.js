import { LitElement, html, css } from 'lit';

import './dialog-box';
import './binding-form';

import '@polymer/paper-button/paper-button.js';

/**
 * <binding-button></binding-button>
 */
class BindingButton extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
        return [css`
            .toggle-dialogue-btn{
                background-color: teal;
                color: white;
                margin-top: 20px;
                margin-left: 20px;
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
             * 
             * @type { fieldDetails: Object} 
             */
            fieldDetails: { type: Object },
            
            /**
             * The value that opens or close modal.
             * 
             * @type { isModalOpen: Boolean} 
             */
            isModalOpen: { type: Boolean },
        }
    }

    /**
     * Initialize props and methods.
     */
    constructor(){
        super();

        this.isModalOpen = false;
        this.fieldDetails = {
            title: "Create Binding Group",
            value: {
                name: "Binding",
                ligandsPromoted: 24,
                description: "Promising Ligands",
                totalLigands: 100,
                isDisabled: true,
                date: 12123432,
                bindingGroup: [
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
            }
        };
    }


    /**
     * Function that toggles the Dialogue.
     */
    toggleBindingFormDialogue(){
        this.isModalOpen = !this.isModalOpen;
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLElement}
     */
    render(){
        return(html`
            <paper-button class="toggle-dialogue-btn" raised @click=${this.toggleBindingFormDialogue}>${this.fieldDetails.title}</paper-button>
            <dialog-box ?opened=${this.isModalOpen} .closeDialog=${this.toggleBindingFormDialogue.bind(this)}>
                <binding-form style="width: 100%" .fieldDetails=${this.fieldDetails}
                 .toggleBindingFormDialogue=${this.toggleBindingFormDialogue.bind(this)}></binding-form>
            </dialog-box>
        `)
    }
}

customElements.define('binding-button', BindingButton);