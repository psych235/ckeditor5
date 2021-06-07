import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor';
import global from '@ckeditor/ckeditor5-utils/src/dom/global';
import testUtils from '@ckeditor/ckeditor5-core/tests/_utils/utils';
import FindAndReplaceUI from '../src/findandreplaceui';
import FindAndReplace from '../src/findandreplace';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';

describe( 'FindAndReplaceUI', () => {
	let editorElement;
	let editor;
	let dropdown;
	// let button;
	// let form;

	testUtils.createSinonSandbox();

	beforeEach( () => {
		editorElement = global.document.createElement( 'div' );
		global.document.body.appendChild( editorElement );

		return ClassicTestEditor
			.create( editorElement, {
				plugins: [ FindAndReplace ]
			} )
			.then( newEditor => {
				editor = newEditor;
				dropdown = editor.ui.componentFactory.create( 'findAndReplace' );
				// button = dropdown.buttonView;
				// form = dropdown.panelView.children.get( 0 );
			} );
	} );

	afterEach( () => {
		editorElement.remove();

		return editor.destroy();
	} );

	it( 'should be named', () => {
		expect( FindAndReplaceUI.pluginName ).to.equal( 'FindAndReplaceUI' );
	} );

	it( 'should add the "findAndReplace" component to the factory', () => {
		expect( dropdown ).to.be.instanceOf( DropdownView );
	} );

	it( 'should allow creating two instances', () => {
		let secondInstance;

		expect( function createSecondInstance() {
			secondInstance = editor.ui.componentFactory.create( 'findAndReplace' );
		} ).not.to.throw();
		expect( dropdown ).to.not.equal( secondInstance );
	} );
} );
