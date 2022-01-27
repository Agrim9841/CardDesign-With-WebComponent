import { LitElement, html, css } from 'lit';

import './binding-form';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';

/**
 * <dialog-box
 *  opened = "The value that opens or close modal."
 *  closeDialog = "Function that closes the modal."
 * ></dialog-box>
 */
class DialogueBox extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
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

            .cross-icon:hover{
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
             * The value that opens or close modal.
             * 
             * @type { opened: Boolean} 
             */
            opened: { type: Boolean },
            
            /**
             * Function that closes the modal.
             * 
             * @type { closeDialog: Function} 
             */
            closeDialog: { type: Function }
        }
    }

    /**
     * Initialize props and methods.
     */
    constructor(){
        super();

        this.opened = false;
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLElement}
     */
    render(){
        return(html`
            <paper-dialog id="animated" modal .opened=${this.opened}>
                <div class="cross-button" @click=${this.closeDialog}>
                    <paper-button>
                        <iron-icon icon="close" class="cross-icon"></iron-icon>
                    </paper-button>
                </div>
                <slot></slot>
            </paper-dialog>
        `)
    }
}

customElements.define('dialog-box', DialogueBox);