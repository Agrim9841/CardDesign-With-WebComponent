import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-input.js';

class InputField extends LitElement {

    /**
     * Properties for the component.
     * 
     * @returns {Object} 
     */
    static get properties(){
        return {

            /**
             * Object of input names, values and other properties.
             * Passed from parents.
             * 
             * @type {Object}
             */
            inputDetail: { type: Object },
    
        }
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLComponent}
     */
    render(){
        return(html`
            <paper-input always-float-label .label="${this.inputDetail.name}"
             .type="${this.inputDetail.type}" .value="${this.inputDetail.value}"
             ?disabled="${this.inputDetail.isDisabled}"
             ></paper-input>
        `)
    }
}

customElements.define('input-field', InputField);