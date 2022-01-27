import { LitElement, html, css } from 'lit';

import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

/**
 * <date-field
 *  label = "Label for Date field."
 *  value = "Input Date."
 * ></date-field>
 */
class DateField extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
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
             * Label for Date field.
             * Passed from parents.
             * 
             * @type {label: String}
             */
            label: { type: String },
    
            /**
             * Input value.
             * Passed from parents.
             * 
             * @type {Date}
             */
            value: { type: Date },
    
        }
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLComponent}
     */
    render(){
        return(html`
            <vaadin-date-picker .label="${this.label}" .value="${this.value}">
            </vaadin-date-picker>
        `)
    }
}

customElements.define('date-field', DateField);