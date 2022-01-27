import { LitElement, html, css } from 'lit';

import '@polymer/paper-checkbox/paper-checkbox.js';

/**
 * <checkbox-group
 *  label = "Label for checkbox group."
 *  checkboxList = "List of checkbox label and their values."
 * ></checkbox-group>
 */
class CheckBoxGroup extends LitElement {
    /**
     * Styles for the component.
     * 
     * @returns {Array}
     */
    static get styles(){
        return [css`
            ::-webkit-scrollbar {
                width: 10px;
                box-sizing: border-box;
                background: #f1f1f1; 
            }

            ::-webkit-scrollbar-track {
                padding: 2px;
            }

            ::-webkit-scrollbar-thumb {
                background: #999; 
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #777; 
            }

            h5{
                font-weight: 200;
                color: grey;
                margin-bottom: 5px;
            }

            .checkbox-group{
                width: 100%;
                padding: 5px;
                box-sizing: border-box;
                border: 2px solid lightgrey;
                border-radius: 6px;
                height: 100px;
                overflow: auto;
            }

            .checkbox-container{
                box-sizing: border-box;
                width: 100%;
                padding: 5px;
            }

            .checkbox-container:nth-child(odd){
                background-color: rgb(240,240,240);
                border-radius: 4px;
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
             * Label for checkbox group.
             * Passed from parents.
             * 
             * @type {label: String}
             */
            label: { type: String },

            /**
             * List of checkbox label and their values.
             * Passed from parents.
             * 
             * @type {checkboxList: Array}
             */
            checkboxList: { type: Array },
        }
    }

    /**
     * Renders Html.
     * 
     * @returns {HTMLElement}
     */
    render(){
        return(html`
            <h5>${this.label}</h5>
            <div class="checkbox-group">
                ${
                    this.checkboxList.map((box)=>html`
                        <div class="checkbox-container">
                            <paper-checkbox ?checked=${box.isChecked}>${box.name}</paper-checkbox>
                        </div>
                    `)
                }
            </div>
        `)
    }
}

customElements.define('checkbox-group', CheckBoxGroup);