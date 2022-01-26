import { LitElement, html, css } from 'lit';

import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

class DateField extends LitElement {

    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles (){
        return [css`
            vaadin-date-picker{
                width: 100%;
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
            <vaadin-date-picker .label="${this.inputDetail.name}" value="12-05-2019">
            </vaadin-date-picker>
        `)
    }
}

customElements.define('date-field', DateField);