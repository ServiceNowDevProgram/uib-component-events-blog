import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-button';

const view = (state, {updateState}) => {
	return (
		<div><now-button label="Fire Event" variant="secondary" size="md" icon="fire-fill" configAria={{"button":{"aria-label":""}}} tooltipContent="Fire an event"></now-button></div>
	);
};

createCustomElement('x-85636-props-demo', {
	actionHandlers: {
		'NOW_BUTTON#CLICKED': ({ dispatch }) => {
			dispatch('EVENT_FIRED', {
				'event-payload': 'I cannot believe this worked'
			});
			console.log('I been clicked');
		}
	},
	renderer: {type: snabbdom},
	view,
	styles
});
