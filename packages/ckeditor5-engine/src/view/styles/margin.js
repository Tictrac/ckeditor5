/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module engine/view/styles/margin
 */

import { getPositionShorthandNormalizer, getBoxEdgesValueReducer } from './utils';

/**
 * Adds a margin CSS styles processing rules.
 *
 *		editor.editing.view.document.addStyleProcessorRules( addMarginRules );
 *
 * The normalized value is stored as:
 *
 *		const styles = {
 *			margin: {
 *				top,
 *				right,
 *				bottom,
 *				left
 *			}
 *		};
 *
 * @param {module:engine/view/stylesmap~StylesProcessor} stylesProcessor
 */
export function addMarginRules( stylesProcessor ) {
	stylesProcessor.setNormalizer( 'margin', getPositionShorthandNormalizer( 'margin' ) );

	stylesProcessor.setNormalizer( 'margin-top', value => ( { path: 'margin.top', value } ) );
	stylesProcessor.setNormalizer( 'margin-right', value => ( { path: 'margin.right', value } ) );
	stylesProcessor.setNormalizer( 'margin-bottom', value => ( { path: 'margin.bottom', value } ) );
	stylesProcessor.setNormalizer( 'margin-left', value => ( { path: 'margin.left', value } ) );

	stylesProcessor.setReducer( 'margin', getBoxEdgesValueReducer( 'margin' ) );

	stylesProcessor.setStyleRelation( 'margin', [ 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' ] );
}
