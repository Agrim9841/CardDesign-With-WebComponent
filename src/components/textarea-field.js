import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-textarea.js';

class TextareaField extends LitElement {

    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles (){
        return [css`

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
            <paper-textarea always-float-label .label="${this.inputDetail.name}" rows="3">${this.inputDetail.value}</paper-textarea>
        `)
    }
}

customElements.define('textarea-field', TextareaField);