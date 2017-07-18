// Type definitions for zebra.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace zebra.$env{
	// zebra.$env.Layout.!ret
	
	/**
	 * 
	 */
	interface LayoutRet {
				
		/**
		 * 
		 */
		$hash$ : string;
				
		/**
		 * 
		 */
		isSortable : boolean;
				
		/**
		 * 
		 */
		parent : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		getView : Function;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getPreferredSize.!ret
	
	/**
	 * 
	 */
	interface GetPreferredSizeRet {
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.calcPreferredSize.!ret
	
	/**
	 * 
	 */
	interface CalcPreferredSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.inherit.!0
	
	/**
	 * 
	 */
	interface Inherit0 {
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.paint.!0
	
	/**
	 * 
	 */
	interface Paint0 {
				
		/**
		 * 
		 */
		lineWidth : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.toPreferredSize.!ret
	
	/**
	 * 
	 */
	interface ToPreferredSizeRet {
				
		/**
		 * 
		 */
		height : number;
				
		/**
		 * 
		 */
		width : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getLayer.!ret
	
	/**
	 * 
	 */
	interface GetLayerRet {
				
		/**
		 * 
		 */
		methodName : string;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.paintOnTop.!0
	
	/**
	 * 
	 */
	interface PaintOnTop0 {
				
		/**
		 * Get the given text line width in pixels
		 * @param  {Integer} line a text line number
		 * @return {Integer} a text line width in pixels
		 * @method lineWidth
		 */
		lineWidth : number;
				
		/**
		 * 
		 */
		polylinePath : /*no type*/{};
				
		/**
		 * 
		 */
		setFont : /* zebra.Dummy.paintOnTop.!0.setFont */ any;
				
		/**
		 * 
		 */
		setColor : /* zebra.Dummy.paintOnTop.!0.setColor */ any;
				
		/**
		 * 
		 */
		drawLine : /* zebra.Dummy.paintOnTop.!0.drawLine */ any;
				
		/**
		 * 
		 */
		ovalPath : /* zebra.Dummy.paintOnTop.!0.ovalPath */ any;
				
		/**
		 * 
		 */
		drawDottedRect : /* zebra.Dummy.paintOnTop.!0.drawDottedRect */ any;
				
		/**
		 * 
		 */
		drawDashLine : /* zebra.Dummy.paintOnTop.!0.drawDashLine */ any;
	}
}
declare namespace zebra.$env.Layoutable.PaintOnTop0{
	// zebra.$env.Layoutable.paintOnTop.!0.polylinePath.!0
	
	/**
	 * 
	 */
	interface PolylinePath0 {
		
		/**
		 * 
		 */
		0 : {
						
			/**
			 * 
			 */
			methodName : string;
		}
		
		/**
		 * 
		 */
		1 : {
						
			/**
			 * 
			 */
			methodName : string;
		}
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getTitleInfo.!ret
	
	/**
	 * 
	 */
	interface GetTitleInfoRet {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		width : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getItemSize.!ret
	
	/**
	 * 
	 */
	interface GetItemSizeRet {
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getItemPreferredSize.!ret
	
	/**
	 * 
	 */
	interface GetItemPreferredSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.getIconSize.!ret
	
	/**
	 * 
	 */
	interface GetIconSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.onmousemove.!0
	
	/**
	 * 
	 */
	interface Onmousemove0 {
				
		/**
		 * 
		 */
		identifier : number;
				
		/**
		 * 
		 */
		time : number;
				
		/**
		 * 
		 */
		clicks : number;
				
		/**
		 * 
		 */
		modifiers : /* zebra.Dummy.onmousemove.!0.modifiers */ any;
	}
}
declare namespace zebra.$env{
	// zebra.$env.intersection.!8
	
	/**
	 * 
	 */
	interface Intersection8 {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		y : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env{
	// zebra.$env.unite.!8
	
	/**
	 * 
	 */
	interface Unite8 {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env{
	// zebra.$env.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : boolean;
	}
}
declare namespace zebra.$env{
	// zebra.$env.getRequest.!ret
	
	/**
	 * 
	 */
	interface GetRequestRet {
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		statusText : string;
				
		/**
		 * 
		 */
		send : /* zebra.getRequest.!ret.__send */ any;
				
		/**
		 * 
		 */
		__send : /* zebra.getRequest.!ret.__send */ any;
				
		/**
		 * 
		 */
		onreadystatechange : /* zebra.getRequest.!ret.onreadystatechange */ any;
	}
}
declare namespace zebra.$env{
	// zebra.$env.$windowSize.!ret
	
	/**
	 * 
	 */
	interface $windowSizeRet {
				
		/**
		 * 
		 */
		width : number;
	}
}
declare namespace zebra.$env{
	// zebra.$env.$measure.!0
	
	/**
	 * 
	 */
	interface $measure0 {
				
		/**
		 * 
		 */
		isSingleton : boolean;
				
		/**
		 * 
		 */
		cachedHeight : number;
				
		/**
		 * 
		 */
		height : number;
				
		/**
		 * 
		 */
		cachedWidth : number;
				
		/**
		 * 
		 */
		psHeight : number;
				
		/**
		 * 
		 */
		psWidth : number;
				
		/**
		 * 
		 */
		isValid : boolean;
				
		/**
		 * 
		 */
		isLayoutValid : boolean;
				
		/**
		 * 
		 */
		isVisible : boolean;
				
		/**
		 * Sides gap
		 * @attribute sideSpace
		 * @type {Integer}
		 * @readOnly
		 * @default 1
		 */
		vgap : number;
				
		/**
		 * Vertical gap (space between components)
		 * @attribute vgap
		 * @default 0
		 * @readOnly
		 * @type {Integer}
		 */
		hgap : number;
				
		/**
		 * 
		 */
		stretchLast : boolean;
				
		/**
		 * 
		 */
		right : number;
				
		/**
		 * Bottom padding
		 * @readOnly
		 * @private
		 * @attribute bottom
		 * @type {Integer}
		 */
		left : number;
				
		/**
		 * 
		 */
		bottom : number;
				
		/**
		 * 
		 */
		colSpan : number;
				
		/**
		 * 
		 */
		rowSpan : number;
				
		/**
		 * 
		 */
		flag : number;
				
		/**
		 * Number of virtual rows to place children components
		 * @attribute rows
		 * @readOnly
		 * @type {Integer}
		 */
		rows : number;
				
		/**
		 * Number of virtual columns to place children components
		 * @attribute cols
		 * @readOnly
		 * @type {Integer}
		 */
		cols : number;
				
		/**
		 * A bits mask of pressed meta keys (CTRL, ALT, etc)
		 * @attribute mask
		 * @readOnly
		 * @type {Integer}
		 */
		mask : number;
				
		/**
		 * The attribute rules how arrays have to be merged if the bag is loaded from few
		 * JSON sources. true means that if a two JSON have the same key that reference to
		 * array values the final value will be a concatenation of the two arrays from the
		 * two JSON sources.
		 * @attribute concatArrays
		 * @type {Boolean}
		 * @default false
		 */
		concatArrays : boolean;
				
		/**
		 * * The property says if the object introspection is required to try find a setter
		 * * method for the given key. For instance if an object is loaded with the
		 * * following JSON:
		 * 
		 * {
		 *    "color": "red"
		 * }
		 * 
		 * * the introspection will cause bag class to try finding "setColor(c)" method in
		 * * the loaded with the JSON object and call it to set "red" property value.
		 * * @attribute usePropertySetters
		 * * @default true
		 * * @type {Boolean}
		 */
		usePropertySetters : boolean;
				
		/**
		 * 
		 */
		ignoreNonExistentKeys : boolean;
				
		/**
		 * 
		 */
		$url : string;
				
		/**
		 * 
		 */
		DOWN : number;
				
		/**
		 * 
		 */
		UP : number;
				
		/**
		 * 
		 */
		BEG : number;
				
		/**
		 * 
		 */
		END : number;
				
		/**
		 * 
		 */
		offset : number;
				
		/**
		 * Current virtual cursor offset
		 * @attribute offset
		 * @type {Integer}
		 * @readOnly
		 */
		currentLine : number;
				
		/**
		 * 
		 */
		currentCol : number;
				
		/**
		 * Number of columns in the matrix model
		 * @attribute cols
		 * @type {Integer}
		 * @readOnly
		 */
		_ : number;
				
		/**
		 * 
		 */
		version : string;
				
		/**
		 * 
		 */
		contentType : string;
				
		/**
		 * 
		 */
		textLength : number;
				
		/**
		 * 
		 */
		maxLen : number;
				
		/**
		 * Maximal possible value
		 * @attribute max
		 * @type {Integer}
		 * @readOnly
		 * @default 100
		 */
		extra : number;
				
		/**
		 * 
		 */
		dyZoom : number;
				
		/**
		 * 
		 */
		dxZoom : number;
				
		/**
		 * 
		 */
		dyNorma : number;
				
		/**
		 * 
		 */
		dxNorma : number;
				
		/**
		 * 
		 */
		naturalDirection : boolean;
				
		/**
		 * 
		 */
		touchCounter : number;
				
		/**
		 * 
		 */
		dc : number;
				
		/**
		 * 
		 */
		middle : string;
				
		/**
		 * 
		 */
		darkest : string;
				
		/**
		 * 
		 */
		MOUSE_UID : number;
				
		/**
		 * 
		 */
		KEY_UID : number;
				
		/**
		 * 
		 */
		FOCUS_UID : number;
				
		/**
		 * !!! don't change order
		 */
		FOCUS_LOST : number;
				
		/**
		 * 
		 */
		FOCUS_GAINED : number;
				
		/**
		 * !!! don't change order
		 */
		TYPED : number;
				
		/**
		 * 
		 */
		RELEASED : number;
				
		/**
		 * 
		 */
		PRESSED : number;
				
		/**
		 * 
		 */
		M_CTRL : number;
				
		/**
		 * 
		 */
		M_SHIFT : number;
				
		/**
		 * 
		 */
		M_ALT : number;
				
		/**
		 * 
		 */
		M_CMD : number;
				
		/**
		 * !!! don't change order
		 */
		CLICKED : number;
				
		/**
		 * 
		 */
		ENTERED : number;
				
		/**
		 * 
		 */
		EXITED : number;
				
		/**
		 * 
		 */
		DRAGGED : number;
				
		/**
		 * 
		 */
		DRAGSTARTED : number;
				
		/**
		 * 
		 */
		DRAGENDED : number;
				
		/**
		 * 
		 */
		MOVED : number;
				
		/**
		 * 
		 */
		LEFT_BUTTON : number;
				
		/**
		 * 
		 */
		RIGHT_BUTTON : number;
				
		/**
		 * 
		 */
		ENABLED : number;
				
		/**
		 * 
		 */
		SHOWN : number;
				
		/**
		 * 
		 */
		SIZED : number;
				
		/**
		 * 
		 */
		ADDED : number;
				
		/**
		 * 
		 */
		REMOVED : number;
				
		/**
		 * Current cursor type
		 * @attribute cursorType
		 * @type {String}
		 * @readOnly
		 * @default "default"
		 */
		cursorType : string;
				
		/**
		 * 
		 */
		$isFunc : boolean;
				
		/**
		 * 
		 */
		$isMasterCanvas : boolean;
				
		/**
		 * 
		 */
		$focusGainedCounter : number;
				
		/**
		 * Indicate if the canvas has to be stretched to
		 * fill the whole screen area.
		 * @type {Boolean}
		 * @attribute isFullScreen
		 * @readOnly
		 */
		isFullScreen : boolean;
				
		/**
		 * 
		 */
		radius : number;
				
		/**
		 * 
		 */
		gx1 : number;
				
		/**
		 * 
		 */
		gx2 : number;
				
		/**
		 * 
		 */
		gy1 : number;
				
		/**
		 * 
		 */
		gy2 : number;
				
		/**
		 * 
		 */
		clicks : number;
				
		/**
		 * 
		 */
		absX : number;
				
		/**
		 * 
		 */
		absY : number;
				
		/**
		 * 
		 */
		bg : string;
				
		/**
		 * 
		 */
		stringWidth : number;
				
		/**
		 * Indicates if the last entered character doesn't have to be replaced with echo character
		 * @type {Boolean}
		 * @attribute showLast
		 * @default true
		 * @readOnly
		 */
		showLast : boolean;
				
		/**
		 * 
		 */
		fillColor1 : string;
				
		/**
		 * Indicate if the button should
		 * fire event by pressed event
		 * @attribute isFireByPress
		 * @type {Boolean}
		 * @default false
		 * @readOnly
		 */
		isFireByPress : boolean;
				
		/**
		 * Fire button event repeating period. -1 means
		 * the button event repeating is disabled.
		 * @attribute firePeriod
		 * @type {Integer}
		 * @default -1
		 * @readOnly
		 */
		firePeriod : number;
				
		/**
		 * 
		 */
		startIn : number;
				
		/**
		 * 
		 */
		hGap : number;
				
		/**
		 * Horizontal gap. Define left and right paddings between
		 * border panel border and the border panel content
		 * @attribute hGap
		 * @type {Integer}
		 * @readOnly
		 * @default 0
		 */
		vGap : number;
				
		/**
		 * Border panel label indent
		 * @type {Integer}
		 * @attribute indent
		 * @default 4
		 */
		indent : number;
				
		/**
		 * 
		 */
		prevLoc : number;
				
		/**
		 * 
		 */
		rightMinSize : number;
				
		/**
		 * A reference to right (bottom) sizable UI component
		 * @attribute rightComp
		 * @type {zebra.ui.Panel}
		 * @readOnly
		 */
		leftMinSize : number;
				
		/**
		 * 
		 */
		isMoveable : boolean;
				
		/**
		 * 
		 */
		maxXY : number;
				
		/**
		 * 
		 */
		minXY : number;
				
		/**
		 * 
		 */
		barLocation : number;
				
		/**
		 * 
		 */
		bundleHeight : number;
				
		/**
		 * Indicate if the extender panel is collapsed
		 * @type {Boolean}
		 * @attribute isCollapsed
		 * @readOnly
		 * @default false
		 */
		isCollapsed : boolean;
				
		/**
		 * 
		 */
		sy : number;
				
		/**
		 * 
		 */
		sx : number;
				
		/**
		 * 
		 */
		isDragable : boolean;
				
		/**
		 * 
		 */
		MIN_BUNDLE_SIZE : number;
				
		/**
		 * 
		 */
		max : number;
				
		/**
		 * Page increment value
		 * @attribute pageIncrement
		 * @type {Integer}
		 * @readOnly
		 * @default 20
		 */
		pageIncrement : number;
				
		/**
		 * Unit increment value
		 * @attribute unitIncrement
		 * @type {Integer}
		 * @readOnly
		 * @default 5
		 */
		unitIncrement : number;
				
		/**
		 * 
		 */
		bundleLoc : number;
				
		/**
		 * !!! It is more convenient to  if (this.isDragable || this.isInBundle(e.x, e.y)){
		 */
		startDragLoc : number;
				
		/**
		 * Indicate if the scroll bars should be hidden
		 * when they are not active
		 * @attribute autoHide
		 * @type {Boolean}
		 * @readOnly
		 */
		autoHide : boolean;
				
		/**
		 * 
		 */
		$interval : number;
				
		/**
		 * 
		 */
		isPosChangedLocked : boolean;
				
		/**
		 * 
		 */
		tabAreaX : number;
				
		/**
		 * 
		 */
		repaintY : number;
				
		/**
		 * 
		 */
		repaintX : number;
				
		/**
		 * 
		 */
		repaintHeight : number;
				
		/**
		 * 
		 */
		repaintWidth : number;
				
		/**
		 * 
		 */
		sideSpace : number;
				
		/**
		 * 
		 */
		tabAreaHeight : number;
				
		/**
		 * 
		 */
		tabAreaWidth : number;
				
		/**
		 * 
		 */
		tabAreaY : number;
				
		/**
		 * Currently selected list item index
		 * @type {Integer}
		 * @attribute selectedIndex
		 * @default -1
		 * @readOnly
		 */
		selectedIndex : number;
				
		/**
		 * 
		 */
		overTab : number;
				
		/**
		 * 
		 */
		exactStep : number;
				
		/**
		 * 
		 */
		roughStep : number;
				
		/**
		 * 
		 */
		min : number;
				
		/**
		 * 
		 */
		netSize : number;
				
		/**
		 * 
		 */
		psH : number;
				
		/**
		 * 
		 */
		psW : number;
				
		/**
		 * 
		 */
		scaleStep : number;
				
		/**
		 * 
		 */
		correctDt : number;
				
		/**
		 * 
		 */
		isShowTitle : boolean;
				
		/**
		 * 
		 */
		isShowScale : boolean;
				
		/**
		 * 
		 */
		isIntervalMode : boolean;
				
		/**
		 * 
		 */
		dragged : boolean;
				
		/**
		 * 
		 */
		isPlaying : boolean;
				
		/**
		 * 
		 */
		isReady : boolean;
				
		/**
		 * 
		 */
		identifier : number;
				
		/**
		 * 
		 */
		invLines : number;
				
		/**
		 * 
		 */
		startInvLine : number;
				
		/**
		 * 
		 */
		textWidth : number;
				
		/**
		 * 
		 */
		textHeight : number;
				
		/**
		 * 
		 */
		$dontHide : boolean;
				
		/**
		 * 
		 */
		selectionColor : string;
				
		/**
		 * Specify the text field cursor blinking period in milliseconds.
		 * -1 means no blinkable cursor
		 * @type {Number}
		 * @default -1
		 * @readOnly
		 * @attribute blinkigPeriod
		 */
		blinkingPeriod : number;
				
		/**
		 * 
		 */
		blinkMe : boolean;
				
		/**
		 * 
		 */
		blinkMeCounter : number;
				
		/**
		 * 
		 */
		isEditable : boolean;
				
		/**
		 * 
		 */
		curX : number;
				
		/**
		 * 
		 */
		endCol : number;
				
		/**
		 * 
		 */
		endLine : number;
				
		/**
		 * 
		 */
		startCol : number;
				
		/**
		 * 
		 */
		startLine : number;
				
		/**
		 * 
		 */
		endOff : number;
				
		/**
		 * 
		 */
		startOff : number;
				
		/**
		 * 
		 */
		historyPos : number;
				
		/**
		 * 
		 */
		curH : number;
				
		/**
		 * TODO: cursor size should be set by property
		 */
		curW : number;
				
		/**
		 * 
		 */
		curY : number;
				
		/**
		 * 
		 */
		undoCounter : number;
				
		/**
		 * 
		 */
		redoCounter : number;
				
		/**
		 * Index of the first visible list item
		 * @readOnly
		 * @attribute firstVisible
		 * @type {Integer}
		 * @private
		 */
		firstVisible : number;
				
		/**
		 * 
		 */
		psHeight_ : number;
				
		/**
		 * 
		 */
		psWidth_ : number;
				
		/**
		 * Y coordinate of the first visible list item
		 * @readOnly
		 * @attribute firstVisibleY
		 * @type {Integer}
		 * @private
		 */
		firstVisibleY : number;
				
		/**
		 * Internal flag to track list items visibility status. It is set
		 * to false to trigger list items metrics and visibility recalculation
		 * @attribute visValid
		 * @type {Boolean}
		 * @private
		 */
		visValid : boolean;
				
		/**
		 * 
		 */
		$closeTime : number;
				
		/**
		 * 
		 */
		dontGenerateUpdateEvent : boolean;
				
		/**
		 * Maximal size the combo box height can have
		 * @attribute maxPadHeight
		 * @readOnly
		 * @type {Integer}
		 */
		maxPadHeight : number;
				
		/**
		 * 
		 */
		$lockListSelEvent : boolean;
				
		/**
		 * 
		 */
		$triggeredByPointer : boolean;
				
		/**
		 * 
		 */
		topModalIndex : number;
				
		/**
		 * 
		 */
		isPopupEditor : boolean;
				
		/**
		 * Minimal possible grid cell size
		 * @type {Number}
		 * @default 10
		 * @attribute minSize
		 */
		minSize : number;
				
		/**
		 * 
		 */
		psw : number;
				
		/**
		 * 
		 */
		prevH : number;
				
		/**
		 * 
		 */
		dy : number;
				
		/**
		 * 
		 */
		dx : number;
				
		/**
		 * 
		 */
		py : number;
				
		/**
		 * 
		 */
		px : number;
				
		/**
		 * 
		 */
		psh : number;
				
		/**
		 * 
		 */
		action : number;
				
		/**
		 * 
		 */
		noSubIfEmpty : boolean;
				
		/**
		 * 
		 */
		$isActive : boolean;
				
		/**
		 * 
		 */
		mRight : number;
				
		/**
		 * 
		 */
		mBottom : number;
				
		/**
		 * 
		 */
		mLeft : number;
				
		/**
		 * 
		 */
		mTop : number;
				
		/**
		 * 
		 */
		borderColor : string;
				
		/**
		 * 
		 */
		borderWidth : number;
				
		/**
		 * Indicates if a shown tooltip has to disappear by mouse pressed event
		 * @attribute hideTooltipByPress
		 * @type {Boolean}
		 * @default true
		 */
		hideTooltipByPress : boolean;
				
		/**
		 * 
		 */
		$popupMenuY : number;
				
		/**
		 * 
		 */
		$popupMenuX : number;
				
		/**
		 * 
		 */
		$tooltipY : number;
				
		/**
		 * 
		 */
		$tooltipX : number;
				
		/**
		 * Define interval (in milliseconds) between entering a component and showing
		 * a tooltip for the entered component
		 * @attribute showTooltipIn
		 * @type {Integer}
		 * @default 400
		 */
		showTooltipIn : number;
				
		/**
		 * 
		 */
		size : number;
				
		/**
		 * Size of the active area where cells size can be changed by mouse dragging event
		 * @attribute activeAreaSize
		 * @type {Number}
		 * @default 5
		 */
		activeAreaSize : number;
				
		/**
		 * Line color
		 * @attribute lineColor
		 * @type {String}
		 * @default gray
		 * @readOnly
		 */
		lineColor : string;
				
		/**
		 * 
		 */
		isResizable : boolean;
				
		/**
		 * Indicate if the grid cells are resize-able.
		 * to the cell preferred size by mouse double click event.
		 * @attribute isResizable
		 * @default true
		 * @type {Boolean}
		 */
		isAutoFit : boolean;
				
		/**
		 * 
		 */
		selectedColRow : number;
				
		/**
		 * 
		 */
		sortState : number;
				
		/**
		 * Indicates if the title panel has to initiate a column sorting
		 * @default false
		 * @attribute isSortable
		 * @readOnly
		 * @type {Boolean}
		 */
		isSortable : boolean;
				
		/**
		 * 
		 */
		DEF_COLWIDTH : number;
				
		/**
		 * 
		 */
		DEF_ROWHEIGHT : number;
				
		/**
		 * 
		 */
		cellInsetsBottom : number;
				
		/**
		 * 
		 */
		cellInsetsTop : number;
				
		/**
		 * Grid cell right padding
		 * @attribute cellInsetsRight
		 * @default 2
		 * @type {Integer}
		 * @readOnly
		 */
		lineSize : number;
				
		/**
		 * 
		 */
		cellInsetsRight : number;
				
		/**
		 * 
		 */
		cellInsetsLeft : number;
				
		/**
		 * 
		 */
		drawHorLines : boolean;
				
		/**
		 * Indicate if horizontal lines have to be rendered
		 * @attribute drawHorLines
		 * @type {Boolean}
		 * @readOnly
		 * @default true
		 */
		drawVerLines : boolean;
				
		/**
		 * Indicate if size of grid cells have to be calculated
		 * automatically basing on its preferred heights and widths
		 * @attribute isUsePsMetric
		 * @type {Boolean}
		 * @default false
		 * @readOnly
		 */
		isUsePsMetric : boolean;
				
		/**
		 * 
		 */
		colOffset : number;
				
		/**
		 * 
		 */
		pressedCol : number;
				
		/**
		 * 
		 */
		rowOffset : number;
				
		/**
		 * 
		 */
		pressedRow : number;
				
		/**
		 * 
		 */
		editingCol : number;
				
		/**
		 * Currently editing column. -1 if no column is editing
		 * @attribute editingCol
		 * @type {Integer}
		 * @default -1
		 * @readOnly
		 */
		editingRow : number;
				
		/**
		 * 
		 */
		$prevWidth : number;
				
		/**
		 * 
		 */
		$propW : number;
				
		/**
		 * 
		 */
		$propsW : number;
				
		/**
		 * 
		 */
		gapy : number;
				
		/**
		 * 
		 */
		maxh : number;
				
		/**
		 * 
		 */
		maxw : number;
				
		/**
		 * 
		 */
		_isVal : boolean;
				
		/**
		 * 
		 */
		itemGapY : number;
				
		/**
		 * 
		 */
		itemGapX : number;
				
		/**
		 * 
		 */
		plus : boolean;
				
		/**
		 * 
		 */
		isLocAdjusted : boolean;
				
		/**
		 * 
		 */
		ePsH : number;
				
		/**
		 * fetch preferred size
		 */
		ePsW : number;
				
		/**
		 * 
		 */
		minWidth : number;
				
		/**
		 * Minimal possible width or controlled component
		 * @attribute minWidth
		 * @type {Integer}
		 * @default 12
		 */
		minHeight : number;
				
		/**
		 * 
		 */
		isMoveEnabled : boolean;
				
		/**
		 * 
		 */
		isResizeEnabled : boolean;
				
		/**
		 * 
		 */
		parent : any;
				
		/**
		 * 
		 */
		find : /* zebra.Dummy.find */ any;
				
		/**
		 * 
		 */
		findAll : /* zebra.Dummy.findAll */ any;
				
		/**
		 * 
		 */
		setId : /* zebra.Dummy.setId */ any;
				
		/**
		 * 
		 */
		properties : /* zebra.Dummy.properties */ any;
				
		/**
		 * 
		 */
		property : /* zebra.Dummy.property */ any;
				
		/**
		 * 
		 */
		validateMetric : /* zebra.Dummy.validateMetric */ any;
				
		/**
		 * 
		 */
		invalidateLayout : /* zebra.Dummy.invalidateLayout */ any;
				
		/**
		 * 
		 */
		invalidate : /* zebra.Dummy.invalidate */ any;
				
		/**
		 * 
		 */
		validate : /* zebra.Dummy.validate */ any;
				
		/**
		 * 
		 */
		getPreferredSize : /* zebra.Dummy.getPreferredSize */ any;
				
		/**
		 * 
		 */
		getTop : /* zebra.Dummy.getTop */ any;
				
		/**
		 * 
		 */
		getLeft : /* zebra.Dummy.getLeft */ any;
				
		/**
		 * 
		 */
		getBottom : /* zebra.Dummy.getBottom */ any;
				
		/**
		 * 
		 */
		getRight : /* zebra.Dummy.getRight */ any;
				
		/**
		 * 
		 */
		setParent : /* zebra.Dummy.setParent */ any;
				
		/**
		 * 
		 */
		setLayout : /* zebra.Dummy.setLayout */ any;
				
		/**
		 * 
		 */
		calcPreferredSize : /* zebra.Dummy.calcPreferredSize */ any;
				
		/**
		 * 
		 */
		doLayout : /* zebra.Dummy.doLayout */ any;
				
		/**
		 * 
		 */
		indexOf : /* zebra.Dummy.indexOf */ any;
				
		/**
		 * 
		 */
		insert : /* zebra.Dummy.insert */ any;
				
		/**
		 * 
		 */
		setLocation : /* zebra.Dummy.setLocation */ any;
				
		/**
		 * 
		 */
		setBounds : /* zebra.Dummy.setBounds */ any;
				
		/**
		 * 
		 */
		setSize : /* zebra.Dummy.setSize */ any;
				
		/**
		 * 
		 */
		getByConstraints : /* zebra.Dummy.getByConstraints */ any;
				
		/**
		 * 
		 */
		remove : /* zebra.Dummy.remove */ any;
				
		/**
		 * 
		 */
		removeAt : /* zebra.Dummy.removeAt */ any;
				
		/**
		 * 
		 */
		removeMe : /* zebra.Dummy.removeMe */ any;
				
		/**
		 * 
		 */
		setPreferredSize : /* zebra.Dummy.setPreferredSize */ any;
				
		/**
		 * 
		 */
		setAt : /* zebra.Dummy.setAt */ any;
				
		/**
		 * 
		 */
		add : /* zebra.Dummy.add */ any;
				
		/**
		 * 
		 */
		 : /* zebra.Dummy. */ any;
				
		/**
		 * 
		 */
		setPadding : /* zebra.Dummy.setPadding */ any;
				
		/**
		 * 
		 */
		calcCols : /* zebra.Dummy.calcCols */ any;
				
		/**
		 * 
		 */
		calcRows : /* zebra.Dummy.calcRows */ any;
				
		/**
		 * 
		 */
		calcRow : /* zebra.Dummy.calcRow */ any;
				
		/**
		 * 
		 */
		calcCol : /* zebra.Dummy.calcCol */ any;
				
		/**
		 * 
		 */
		colSizes : /* zebra.Dummy.colSizes */ any;
				
		/**
		 * 
		 */
		rowSizes : /* zebra.Dummy.rowSizes */ any;
				
		/**
		 * 
		 */
		get : /* zebra.Dummy.get */ any;
				
		/**
		 * 
		 */
		mergeObjWithDesc : /* zebra.Dummy.mergeObjWithDesc */ any;
				
		/**
		 * 
		 */
		resolveClass : /* zebra.Dummy.resolveClass */ any;
				
		/**
		 * 
		 */
		inherit : /* zebra.Dummy.inherit */ any;
				
		/**
		 * 
		 */
		load : /* zebra.Dummy.load */ any;
				
		/**
		 * 
		 */
		resolveVar : /* zebra.Dummy.resolveVar */ any;
				
		/**
		 * 
		 */
		expr : /* zebra.Dummy.expr */ any;
				
		/**
		 * 
		 */
		variables : any;
				
		/**
		 * 
		 */
		Metric : /* zebra.Layout */ any;
				
		/**
		 * 
		 */
		setOffset : /* zebra.Dummy.setOffset */ any;
				
		/**
		 * 
		 */
		seek : /* zebra.Dummy.seek */ any;
				
		/**
		 * 
		 */
		setRowCol : /* zebra.Dummy.setRowCol */ any;
				
		/**
		 * 
		 */
		inserted : /* zebra.Dummy.inserted */ any;
				
		/**
		 * 
		 */
		removed : /* zebra.Dummy.removed */ any;
				
		/**
		 * 
		 */
		getPointByOffset : /* zebra.Dummy.getPointByOffset */ any;
				
		/**
		 * 
		 */
		getOffsetByPoint : /* zebra.Dummy.getOffsetByPoint */ any;
				
		/**
		 * 
		 */
		seekLineTo : /* zebra.Dummy.seekLineTo */ any;
				
		/**
		 * 
		 */
		setMetric : /* zebra.Dummy.setMetric */ any;
				
		/**
		 * 
		 */
		metrics : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		append : /* zebra.Dummy.append */ any;
				
		/**
		 * 
		 */
		parse : /* zebra.Dummy.parse */ any;
				
		/**
		 * 
		 */
		toQS : /* zebra.Dummy.toQS */ any;
				
		/**
		 * 
		 */
		header : any;
				
		/**
		 * 
		 */
		encode : /* zebra.Dummy.encode */ any;
				
		/**
		 * 
		 */
		encodeValue : /* zebra.Dummy.encodeValue */ any;
				
		/**
		 * 
		 */
		decodeValue : /* zebra.Dummy.decodeValue */ any;
				
		/**
		 * 
		 */
		decode : /* zebra.Dummy.decode */ any;
				
		/**
		 * 
		 */
		getLnInfo : /* zebra.Dummy.getLnInfo */ any;
				
		/**
		 * 
		 */
		getLine : /* zebra.Dummy.getLine */ any;
				
		/**
		 * 
		 */
		getValue : /* zebra.Dummy.getValue */ any;
				
		/**
		 * 
		 */
		getLines : /* zebra.Dummy.getLines */ any;
				
		/**
		 * 
		 */
		getTextLength : /* zebra.Dummy.getTextLength */ any;
				
		/**
		 * 
		 */
		write : /* zebra.Dummy.write */ any;
				
		/**
		 * 
		 */
		setValue : /* zebra.Dummy.setValue */ any;
				
		/**
		 * 
		 */
		setMaxLength : /* zebra.Dummy.setMaxLength */ any;
				
		/**
		 * 
		 */
		removeAll : /* zebra.Dummy.removeAll */ any;
				
		/**
		 * 
		 */
		count : /* zebra.Dummy.count */ any;
				
		/**
		 * 
		 */
		set : /* zebra.Dummy.set */ any;
				
		/**
		 * 
		 */
		contains : /* zebra.Dummy.contains */ any;
				
		/**
		 * 
		 */
		create : /* zebra.Dummy.create */ any;
				
		/**
		 * 
		 */
		findOne : /* zebra.Dummy.findOne */ any;
				
		/**
		 * 
		 */
		iterate : /* zebra.Dummy.iterate */ any;
				
		/**
		 * 
		 */
		removeKids : /* zebra.Dummy.removeKids */ any;
				
		/**
		 * 
		 */
		put : /* zebra.Dummy.put */ any;
				
		/**
		 * 
		 */
		puti : /* zebra.Dummy.puti */ any;
				
		/**
		 * 
		 */
		setRowsCols : /* zebra.Dummy.setRowsCols */ any;
				
		/**
		 * 
		 */
		setRows : /* zebra.Dummy.setRows */ any;
				
		/**
		 * 
		 */
		setCols : /* zebra.Dummy.setCols */ any;
				
		/**
		 * 
		 */
		removeRows : /* zebra.Dummy.removeRows */ any;
				
		/**
		 * 
		 */
		removeCols : /* zebra.Dummy.removeCols */ any;
				
		/**
		 * 
		 */
		insertRows : /* zebra.Dummy.insertRows */ any;
				
		/**
		 * 
		 */
		insertCols : /* zebra.Dummy.insertCols */ any;
				
		/**
		 * 
		 */
		sortCol : /* zebra.Dummy.sortCol */ any;
				
		/**
		 * 
		 */
		lines : /* zebra.Dummy.lines */ any;
				
		/**
		 * 
		 */
		d : /* zebra.Dummy.d */ any;
				
		/**
		 * 
		 */
		objs : /* zebra.Dummy.objs */ any;
				
		/**
		 * 
		 */
		wheeled : /* zebra.Dummy.wheeled */ any;
				
		/**
		 * 
		 */
		$fixEnd : /* zebra.Dummy.$fixEnd */ any;
				
		/**
		 * 
		 */
		start : /* zebra.Dummy.start */ any;
				
		/**
		 * 
		 */
		end : /* zebra.Dummy.end */ any;
				
		/**
		 * 
		 */
		Q : /* zebra.Dummy.Q */ any;
				
		/**
		 * 
		 */
		touches : /* zebra.Dummy.touches */ any;
				
		/**
		 * 
		 */
		queue : /* zebra.Dummy.queue */ any;
				
		/**
		 * 
		 */
		paint : /* zebra.Dummy.paint */ any;
				
		/**
		 * 
		 */
		setTarget : /* zebra.Dummy.setTarget */ any;
				
		/**
		 * 
		 */
		outline : /* zebra.Dummy.outline */ any;
				
		/**
		 * 
		 */
		targetWasChanged : /* zebra.Dummy.targetWasChanged */ any;
				
		/**
		 * 
		 */
		$recalc : /* zebra.Dummy.$recalc */ any;
				
		/**
		 * 
		 */
		recalc : /* zebra.Dummy.recalc */ any;
				
		/**
		 * 
		 */
		ownerChanged : /* zebra.Dummy.ownerChanged */ any;
				
		/**
		 * 
		 */
		activate : /* zebra.Dummy.activate */ any;
				
		/**
		 * 
		 */
		loadImage : /* zebra.Dummy.loadImage */ any;
				
		/**
		 * 
		 */
		reset : /* zebra.Dummy.reset */ any;
				
		/**
		 * 
		 */
		isControlPressed : /* zebra.Dummy.isControlPressed */ any;
				
		/**
		 * 
		 */
		isShiftPressed : /* zebra.Dummy.isShiftPressed */ any;
				
		/**
		 * 
		 */
		isAltPressed : /* zebra.Dummy.isAltPressed */ any;
				
		/**
		 * 
		 */
		isCmdPressed : /* zebra.Dummy.isCmdPressed */ any;
				
		/**
		 * 
		 */
		isActionMask : /* zebra.Dummy.isActionMask */ any;
				
		/**
		 * 
		 */
		modifiers : /* zebra.Dummy.modifiers */ any;
				
		/**
		 * 
		 */
		getCanvas : /* zebra.Dummy.getCanvas */ any;
				
		/**
		 * 
		 */
		notifyRender : /* zebra.Dummy.notifyRender */ any;
				
		/**
		 * 
		 */
		getComponentAt : /* zebra.Dummy.getComponentAt */ any;
				
		/**
		 * 
		 */
		vrp : /* zebra.Dummy.vrp */ any;
				
		/**
		 * 
		 */
		isInvalidatedByChild : /* zebra.Dummy.isInvalidatedByChild */ any;
				
		/**
		 * 
		 */
		kidAdded : /* zebra.Dummy.kidAdded */ any;
				
		/**
		 * 
		 */
		kidRemoved : /* zebra.Dummy.kidRemoved */ any;
				
		/**
		 * 
		 */
		relocated : /* zebra.Dummy.relocated */ any;
				
		/**
		 * 
		 */
		resized : /* zebra.Dummy.resized */ any;
				
		/**
		 * 
		 */
		hasFocus : /* zebra.Dummy.hasFocus */ any;
				
		/**
		 * 
		 */
		requestFocus : /* zebra.Dummy.requestFocus */ any;
				
		/**
		 * 
		 */
		requestFocusIn : /* zebra.Dummy.requestFocusIn */ any;
				
		/**
		 * 
		 */
		setVisible : /* zebra.Dummy.setVisible */ any;
				
		/**
		 * 
		 */
		setEnabled : /* zebra.Dummy.setEnabled */ any;
				
		/**
		 * 
		 */
		setBorder : /* zebra.Dummy.setBorder */ any;
				
		/**
		 * 
		 */
		setBackground : /* zebra.Dummy.setBackground */ any;
				
		/**
		 * 
		 */
		setKids : /* zebra.Dummy.setKids */ any;
				
		/**
		 * 
		 */
		focused : /* zebra.Dummy.focused */ any;
				
		/**
		 * 
		 */
		repaint : /* zebra.Dummy.repaint */ any;
				
		/**
		 * 
		 */
		toFront : /* zebra.Dummy.toFront */ any;
				
		/**
		 * 
		 */
		toBack : /* zebra.Dummy.toBack */ any;
				
		/**
		 * 
		 */
		toPreferredSize : /* zebra.Dummy.toPreferredSize */ any;
				
		/**
		 * 
		 */
		getFocusRoot : /* zebra.Dummy.getFocusRoot */ any;
				
		/**
		 * 
		 */
		layerMousePressed : /* zebra.Dummy.layerMousePressed */ any;
				
		/**
		 * 
		 */
		layerKeyPressed : /* zebra.Dummy.layerKeyPressed */ any;
				
		/**
		 * 
		 */
		view : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		setView : /* zebra.Dummy.setView */ any;
				
		/**
		 * 
		 */
		paintComponent : /* zebra.Dummy.paintComponent */ any;
				
		/**
		 * 
		 */
		focusOwner : any;
				
		/**
		 * 
		 */
		compEnabled : /* zebra.Dummy.compEnabled */ any;
				
		/**
		 * 
		 */
		compShown : /* zebra.Dummy.compShown */ any;
				
		/**
		 * 
		 */
		compRemoved : /* zebra.Dummy.compRemoved */ any;
				
		/**
		 * 
		 */
		canvasFocusLost : /* zebra.Dummy.canvasFocusLost */ any;
				
		/**
		 * 
		 */
		canvasFocusGained : /* zebra.Dummy.canvasFocusGained */ any;
				
		/**
		 * 
		 */
		keyPressed : /* zebra.Dummy.keyPressed */ any;
				
		/**
		 * 
		 */
		findFocusable : /* zebra.Dummy.findFocusable */ any;
				
		/**
		 * 
		 */
		isFocusable : /* zebra.Dummy.isFocusable */ any;
				
		/**
		 * 
		 */
		fd : /* zebra.Dummy.fd */ any;
				
		/**
		 * 
		 */
		ff : /* zebra.Dummy.ff */ any;
				
		/**
		 * 
		 */
		mousePressed : /* zebra.Dummy.mousePressed */ any;
				
		/**
		 * 
		 */
		parseKey : /* zebra.Dummy.parseKey */ any;
				
		/**
		 * 
		 */
		setCommands : /* zebra.Dummy.setCommands */ any;
				
		/**
		 * 
		 */
		keyCommands : any;
				
		/**
		 * 
		 */
		mouseMoved : /* zebra.Dummy.mouseMoved */ any;
				
		/**
		 * 
		 */
		mouseEntered : /* zebra.Dummy.mouseEntered */ any;
				
		/**
		 * 
		 */
		mouseExited : /* zebra.Dummy.mouseExited */ any;
				
		/**
		 * 
		 */
		mouseDragged : /* zebra.Dummy.mouseDragged */ any;
				
		/**
		 * 
		 */
		$hasMethod : /* zebra.Dummy.$hasMethod */ any;
				
		/**
		 * 
		 */
		fireCompEvent : /* zebra.Dummy.fireCompEvent */ any;
				
		/**
		 * 
		 */
		getEventDestination : /* zebra.Dummy.getEventDestination */ any;
				
		/**
		 * 
		 */
		fireInputEvent : /* zebra.Dummy.fireInputEvent */ any;
				
		/**
		 * 
		 */
		addListener : /* zebra.Dummy.addListener */ any;
				
		/**
		 * 
		 */
		removeListener : /* zebra.Dummy.removeListener */ any;
				
		/**
		 * 
		 */
		addComponentListener : /* zebra.Dummy.addComponentListener */ any;
				
		/**
		 * 
		 */
		removeComponentListener : /* zebra.Dummy.removeComponentListener */ any;
				
		/**
		 * 
		 */
		addMouseListener : /* zebra.Dummy.addMouseListener */ any;
				
		/**
		 * 
		 */
		removeMouseListener : /* zebra.Dummy.removeMouseListener */ any;
				
		/**
		 * 
		 */
		addFocusListener : /* zebra.Dummy.addFocusListener */ any;
				
		/**
		 * 
		 */
		removeFocusListener : /* zebra.Dummy.removeFocusListener */ any;
				
		/**
		 * 
		 */
		addKeyListener : /* zebra.Dummy.addKeyListener */ any;
				
		/**
		 * 
		 */
		removeKeyListener : /* zebra.Dummy.removeKeyListener */ any;
				
		/**
		 * 
		 */
		a_ : /* zebra.Dummy.a_ */ any;
				
		/**
		 * 
		 */
		r_ : /* zebra.Dummy.r_ */ any;
				
		/**
		 * 
		 */
		m_l : /* zebra.Dummy.m_l */ any;
				
		/**
		 * 
		 */
		k_l : /* zebra.Dummy.k_l */ any;
				
		/**
		 * 
		 */
		f_l : /* zebra.Dummy.f_l */ any;
				
		/**
		 * 
		 */
		c_l : /* zebra.Dummy.c_l */ any;
				
		/**
		 * 
		 */
		$keyTyped : /* zebra.Dummy.$keyTyped */ any;
				
		/**
		 * 
		 */
		$keyPressed : /* zebra.Dummy.$keyPressed */ any;
				
		/**
		 * 
		 */
		$keyReleased : /* zebra.Dummy.$keyReleased */ any;
				
		/**
		 * 
		 */
		$mouseEntered : /* zebra.Dummy.$mouseEntered */ any;
				
		/**
		 * 
		 */
		$mouseExited : /* zebra.Dummy.$mouseExited */ any;
				
		/**
		 * 
		 */
		$mouseMoved : /* zebra.Dummy.$mouseMoved */ any;
				
		/**
		 * 
		 */
		$mouseReleased : /* zebra.Dummy.$mouseReleased */ any;
				
		/**
		 * 
		 */
		$mousePressed : /* zebra.Dummy.$mousePressed */ any;
				
		/**
		 * 
		 */
		recalcOffset : /* zebra.Dummy.recalcOffset */ any;
				
		/**
		 * 
		 */
		getLayer : /* zebra.Dummy.getLayer */ any;
				
		/**
		 * 
		 */
		setStyles : /* zebra.Dummy.setStyles */ any;
				
		/**
		 * 
		 */
		setAttribute : /* zebra.Dummy.setAttribute */ any;
				
		/**
		 * 
		 */
		setFeatures : /* zebra.Dummy.setFeatures */ any;
				
		/**
		 * 
		 */
		$nativeListeners : /* zebra.Dummy.$nativeListeners */ any;
				
		/**
		 * 
		 */
		$da : /* zebra.Dummy.$da */ any;
				
		/**
		 * 
		 */
		colors : /* zebra.Dummy.colors */ any;
				
		/**
		 * 
		 */
		views : /* zebra.Dummy.views */ any;
				
		/**
		 * 
		 */
		source : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$px : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		border : zebra.Dummy;
				
		/**
		 * 
		 */
		lineColors : /* zebra.Dummy.lineColors */ any;
				
		/**
		 * 
		 */
		setLineColors : /* zebra.Dummy.setLineColors */ any;
				
		/**
		 * 
		 */
		owner : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		getLineHeight : /* zebra.Dummy.getLineHeight */ any;
				
		/**
		 * 
		 */
		setFont : /* zebra.Dummy.setFont */ any;
				
		/**
		 * 
		 */
		setColor : /* zebra.Dummy.setColor */ any;
				
		/**
		 * 
		 */
		getLineIndent : /* zebra.Dummy.getLineIndent */ any;
				
		/**
		 * 
		 */
		getLineSize : /* zebra.Dummy.getLineSize */ any;
				
		/**
		 * 
		 */
		getMaxOffset : /* zebra.Dummy.getMaxOffset */ any;
				
		/**
		 * 
		 */
		paintLine : /* zebra.Dummy.paintLine */ any;
				
		/**
		 * 
		 */
		textUpdated : /* zebra.Dummy.textUpdated */ any;
				
		/**
		 * 
		 */
		paintSelection : /* zebra.Dummy.paintSelection */ any;
				
		/**
		 * 
		 */
		setModel : /* zebra.Dummy.setModel */ any;
				
		/**
		 * 
		 */
		getModel : /* zebra.Dummy.getModel */ any;
				
		/**
		 * 
		 */
		getColor : /* zebra.Dummy.getColor */ any;
				
		/**
		 * 
		 */
		getFont : /* zebra.Dummy.getFont */ any;
				
		/**
		 * 
		 */
		setState : /* zebra.Dummy.setState */ any;
				
		/**
		 * 
		 */
		stateUpdated : /* zebra.Dummy.stateUpdated */ any;
				
		/**
		 * 
		 */
		syncState : /* zebra.Dummy.syncState */ any;
				
		/**
		 * 
		 */
		toViewId : /* zebra.Dummy.toViewId */ any;
				
		/**
		 * 
		 */
		_keyPressed : /* zebra.Dummy._keyPressed */ any;
				
		/**
		 * 
		 */
		_keyReleased : /* zebra.Dummy._keyReleased */ any;
				
		/**
		 * 
		 */
		_mouseEntered : /* zebra.Dummy._mouseEntered */ any;
				
		/**
		 * 
		 */
		_mousePressed : /* zebra.Dummy._mousePressed */ any;
				
		/**
		 * 
		 */
		_mouseReleased : /* zebra.Dummy._mouseReleased */ any;
				
		/**
		 * 
		 */
		childInputEvent : /* zebra.Dummy.childInputEvent */ any;
				
		/**
		 * 
		 */
		keyReleased : /* zebra.Dummy.keyReleased */ any;
				
		/**
		 * 
		 */
		mouseReleased : /* zebra.Dummy.mouseReleased */ any;
				
		/**
		 * 
		 */
		focusComponent : any;
				
		/**
		 * 
		 */
		paintOnTop : /* zebra.Dummy.paintOnTop */ any;
				
		/**
		 * 
		 */
		setFocusMarkerView : /* zebra.Dummy.setFocusMarkerView */ any;
				
		/**
		 * 
		 */
		setCanHaveFocus : /* zebra.Dummy.setCanHaveFocus */ any;
				
		/**
		 * 
		 */
		setFocusAnchorComponent : /* zebra.Dummy.setFocusAnchorComponent */ any;
				
		/**
		 * 
		 */
		Label : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		fire : /* zebra.Dummy.fire */ any;
				
		/**
		 * 
		 */
		run : /* zebra.Dummy.run */ any;
				
		/**
		 * 
		 */
		setFireParams : /* zebra.Dummy.setFireParams */ any;
				
		/**
		 * 
		 */
		getTitleInfo : /* zebra.Dummy.getTitleInfo */ any;
				
		/**
		 * 
		 */
		setGaps : /* zebra.Dummy.setGaps */ any;
				
		/**
		 * 
		 */
		updated : /* zebra.Dummy.updated */ any;
				
		/**
		 * 
		 */
		install : /* zebra.Dummy.install */ any;
				
		/**
		 * 
		 */
		uninstall : /* zebra.Dummy.uninstall */ any;
				
		/**
		 * 
		 */
		clearSelected : /* zebra.Dummy.clearSelected */ any;
				
		/**
		 * 
		 */
		parentStateUpdated : /* zebra.Dummy.parentStateUpdated */ any;
				
		/**
		 * 
		 */
		Box : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		switched : /* zebra.Dummy.switched */ any;
				
		/**
		 * 
		 */
		mouseDragStarted : /* zebra.Dummy.mouseDragStarted */ any;
				
		/**
		 * 
		 */
		mouseDragEnded : /* zebra.Dummy.mouseDragEnded */ any;
				
		/**
		 * 
		 */
		getCursorType : /* zebra.Dummy.getCursorType */ any;
				
		/**
		 * 
		 */
		Bar : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		normalizeBarLoc : /* zebra.Dummy.normalizeBarLoc */ any;
				
		/**
		 * 
		 */
		setOrientation : /* zebra.Dummy.setOrientation */ any;
				
		/**
		 * 
		 */
		setGripperLoc : /* zebra.Dummy.setGripperLoc */ any;
				
		/**
		 * 
		 */
		setGap : /* zebra.Dummy.setGap */ any;
				
		/**
		 * 
		 */
		setLeftMinSize : /* zebra.Dummy.setLeftMinSize */ any;
				
		/**
		 * 
		 */
		setRightMinSize : /* zebra.Dummy.setRightMinSize */ any;
				
		/**
		 * 
		 */
		setGripperMovable : /* zebra.Dummy.setGripperMovable */ any;
				
		/**
		 * 
		 */
		bundleView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		toggle : /* zebra.Dummy.toggle */ any;
				
		/**
		 * 
		 */
		TitlePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		TogglePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		contentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		getSX : /* zebra.Dummy.getSX */ any;
				
		/**
		 * 
		 */
		getSY : /* zebra.Dummy.getSY */ any;
				
		/**
		 * 
		 */
		scrollXTo : /* zebra.Dummy.scrollXTo */ any;
				
		/**
		 * 
		 */
		scrollYTo : /* zebra.Dummy.scrollYTo */ any;
				
		/**
		 * 
		 */
		scrollTo : /* zebra.Dummy.scrollTo */ any;
				
		/**
		 * 
		 */
		makeVisible : /* zebra.Dummy.makeVisible */ any;
				
		/**
		 * 
		 */
		VIncButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		VDecButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HIncButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HDecButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		VBundle : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HBundle : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		isInBundle : /* zebra.Dummy.isInBundle */ any;
				
		/**
		 * 
		 */
		amount : /* zebra.Dummy.amount */ any;
				
		/**
		 * 
		 */
		pixel2value : /* zebra.Dummy.pixel2value */ any;
				
		/**
		 * 
		 */
		value2pixel : /* zebra.Dummy.value2pixel */ any;
				
		/**
		 * 
		 */
		posChanged : /* zebra.Dummy.posChanged */ any;
				
		/**
		 * 
		 */
		fired : /* zebra.Dummy.fired */ any;
				
		/**
		 * 
		 */
		mouseClicked : /* zebra.Dummy.mouseClicked */ any;
				
		/**
		 * 
		 */
		setMaximum : /* zebra.Dummy.setMaximum */ any;
				
		/**
		 * 
		 */
		setPosition : /* zebra.Dummy.setPosition */ any;
				
		/**
		 * 
		 */
		setExtraSize : /* zebra.Dummy.setExtraSize */ any;
				
		/**
		 * 
		 */
		position : any;
				
		/**
		 * 
		 */
		scrollStateUpdated : /* zebra.Dummy.scrollStateUpdated */ any;
				
		/**
		 * 
		 */
		scrollManager : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		ContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setAutoHide : /* zebra.Dummy.setAutoHide */ any;
				
		/**
		 * 
		 */
		doScroll : /* zebra.Dummy.doScroll */ any;
				
		/**
		 * 
		 */
		scrolled : /* zebra.Dummy.scrolled */ any;
				
		/**
		 * 
		 */
		setIncrements : /* zebra.Dummy.setIncrements */ any;
				
		/**
		 * 
		 */
		TabPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		next : /* zebra.Dummy.next */ any;
				
		/**
		 * 
		 */
		isTabEnabled : /* zebra.Dummy.isTabEnabled */ any;
				
		/**
		 * 
		 */
		drawMarker : /* zebra.Dummy.drawMarker */ any;
				
		/**
		 * 
		 */
		paintTab : /* zebra.Dummy.paintTab */ any;
				
		/**
		 * 
		 */
		getTabBounds : /* zebra.Dummy.getTabBounds */ any;
				
		/**
		 * 
		 */
		getTabAt : /* zebra.Dummy.getTabAt */ any;
				
		/**
		 * 
		 */
		select : /* zebra.Dummy.select */ any;
				
		/**
		 * 
		 */
		getTab : /* zebra.Dummy.getTab */ any;
				
		/**
		 * 
		 */
		setSideSpace : /* zebra.Dummy.setSideSpace */ any;
				
		/**
		 * 
		 */
		setPageGaps : /* zebra.Dummy.setPageGaps */ any;
				
		/**
		 * 
		 */
		setAlignment : /* zebra.Dummy.setAlignment */ any;
				
		/**
		 * 
		 */
		enableTab : /* zebra.Dummy.enableTab */ any;
				
		/**
		 * 
		 */
		pages : /* zebra.Dummy.pages */ any;
				
		/**
		 * 
		 */
		paintNums : /* zebra.Dummy.paintNums */ any;
				
		/**
		 * 
		 */
		getScaleSize : /* zebra.Dummy.getScaleSize */ any;
				
		/**
		 * 
		 */
		findNearest : /* zebra.Dummy.findNearest */ any;
				
		/**
		 * 
		 */
		value2loc : /* zebra.Dummy.value2loc */ any;
				
		/**
		 * 
		 */
		loc2value : /* zebra.Dummy.loc2value */ any;
				
		/**
		 * 
		 */
		nextValue : /* zebra.Dummy.nextValue */ any;
				
		/**
		 * 
		 */
		getBundleLoc : /* zebra.Dummy.getBundleLoc */ any;
				
		/**
		 * 
		 */
		getBundleBounds : /* zebra.Dummy.getBundleBounds */ any;
				
		/**
		 * 
		 */
		getNeighborPoint : /* zebra.Dummy.getNeighborPoint */ any;
				
		/**
		 * 
		 */
		getPointValue : /* zebra.Dummy.getPointValue */ any;
				
		/**
		 * 
		 */
		getView : /* zebra.Dummy.getView */ any;
				
		/**
		 * 
		 */
		render : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		Line : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Checkbox : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		isDecorative : /* zebra.Dummy.isDecorative */ any;
				
		/**
		 * 
		 */
		pause : /* zebra.Dummy.pause */ any;
				
		/**
		 * 
		 */
		play : /* zebra.Dummy.play */ any;
				
		/**
		 * 
		 */
		HintRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		curView : any;
				
		/**
		 * 
		 */
		setBlinking : /* zebra.Dummy.setBlinking */ any;
				
		/**
		 * 
		 */
		setTextAlign : /* zebra.Dummy.setTextAlign */ any;
				
		/**
		 * 
		 */
		getTextRowColAt : /* zebra.Dummy.getTextRowColAt */ any;
				
		/**
		 * 
		 */
		findNextWord : /* zebra.Dummy.findNextWord */ any;
				
		/**
		 * 
		 */
		getSubString : /* zebra.Dummy.getSubString */ any;
				
		/**
		 * 
		 */
		removeSelected : /* zebra.Dummy.removeSelected */ any;
				
		/**
		 * 
		 */
		startSelection : /* zebra.Dummy.startSelection */ any;
				
		/**
		 * 
		 */
		keyTyped : /* zebra.Dummy.keyTyped */ any;
				
		/**
		 * 
		 */
		selectAll_command : /* zebra.Dummy.selectAll_command */ any;
				
		/**
		 * 
		 */
		nextWord_command : /* zebra.Dummy.nextWord_command */ any;
				
		/**
		 * 
		 */
		nextPage_command : /* zebra.Dummy.nextPage_command */ any;
				
		/**
		 * 
		 */
		isFiltered : /* zebra.Dummy.isFiltered */ any;
				
		/**
		 * 
		 */
		catchScrolled : /* zebra.Dummy.catchScrolled */ any;
				
		/**
		 * 
		 */
		drawCursor : /* zebra.Dummy.drawCursor */ any;
				
		/**
		 * 
		 */
		hasSelection : /* zebra.Dummy.hasSelection */ any;
				
		/**
		 * 
		 */
		setHint : /* zebra.Dummy.setHint */ any;
				
		/**
		 * 
		 */
		undo_command : /* zebra.Dummy.undo_command */ any;
				
		/**
		 * 
		 */
		redo_command : /* zebra.Dummy.redo_command */ any;
				
		/**
		 * 
		 */
		getStartSelection : /* zebra.Dummy.getStartSelection */ any;
				
		/**
		 * 
		 */
		getEndSelection : /* zebra.Dummy.getEndSelection */ any;
				
		/**
		 * 
		 */
		getSelectedText : /* zebra.Dummy.getSelectedText */ any;
				
		/**
		 * 
		 */
		focusGained : /* zebra.Dummy.focusGained */ any;
				
		/**
		 * 
		 */
		focusLost : /* zebra.Dummy.focusLost */ any;
				
		/**
		 * 
		 */
		repaintCursor : /* zebra.Dummy.repaintCursor */ any;
				
		/**
		 * 
		 */
		clearSelection : /* zebra.Dummy.clearSelection */ any;
				
		/**
		 * 
		 */
		pageSize : /* zebra.Dummy.pageSize */ any;
				
		/**
		 * 
		 */
		clipPaste : /* zebra.Dummy.clipPaste */ any;
				
		/**
		 * 
		 */
		clipCopy : /* zebra.Dummy.clipCopy */ any;
				
		/**
		 * 
		 */
		cut : /* zebra.Dummy.cut */ any;
				
		/**
		 * 
		 */
		setCursorView : /* zebra.Dummy.setCursorView */ any;
				
		/**
		 * 
		 */
		setPSByRowsCols : /* zebra.Dummy.setPSByRowsCols */ any;
				
		/**
		 * 
		 */
		setEditable : /* zebra.Dummy.setEditable */ any;
				
		/**
		 * 
		 */
		setSelectionColor : /* zebra.Dummy.setSelectionColor */ any;
				
		/**
		 * 
		 */
		history : /* zebra.Dummy.history */ any;
				
		/**
		 * 
		 */
		isItemSelectable : /* zebra.Dummy.isItemSelectable */ any;
				
		/**
		 * 
		 */
		getSelected : /* zebra.Dummy.getSelected */ any;
				
		/**
		 * 
		 */
		lookupItem : /* zebra.Dummy.lookupItem */ any;
				
		/**
		 * 
		 */
		isSelected : /* zebra.Dummy.isSelected */ any;
				
		/**
		 * 
		 */
		pointerMoved : /* zebra.Dummy.pointerMoved */ any;
				
		/**
		 * 
		 */
		getItemLocation : /* zebra.Dummy.getItemLocation */ any;
				
		/**
		 * 
		 */
		getItemSize : /* zebra.Dummy.getItemSize */ any;
				
		/**
		 * 
		 */
		getItemIdxAt : /* zebra.Dummy.getItemIdxAt */ any;
				
		/**
		 * 
		 */
		calcMaxItemSize : /* zebra.Dummy.calcMaxItemSize */ any;
				
		/**
		 * 
		 */
		repaintByOffsets : /* zebra.Dummy.repaintByOffsets */ any;
				
		/**
		 * 
		 */
		drawViewAt : /* zebra.Dummy.drawViewAt */ any;
				
		/**
		 * 
		 */
		drawView : /* zebra.Dummy.drawView */ any;
				
		/**
		 * 
		 */
		update : /* zebra.Dummy.update */ any;
				
		/**
		 * 
		 */
		fireSelected : /* zebra.Dummy.fireSelected */ any;
				
		/**
		 * 
		 */
		$select : /* zebra.Dummy.$select */ any;
				
		/**
		 * 
		 */
		elementInserted : /* zebra.Dummy.elementInserted */ any;
				
		/**
		 * 
		 */
		elementRemoved : /* zebra.Dummy.elementRemoved */ any;
				
		/**
		 * 
		 */
		elementSet : /* zebra.Dummy.elementSet */ any;
				
		/**
		 * 
		 */
		findSelectable : /* zebra.Dummy.findSelectable */ any;
				
		/**
		 * 
		 */
		setViewProvider : /* zebra.Dummy.setViewProvider */ any;
				
		/**
		 * 
		 */
		notifyScrollMan : /* zebra.Dummy.notifyScrollMan */ any;
				
		/**
		 * 
		 */
		ViewProvider : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setItemGap : /* zebra.Dummy.setItemGap */ any;
				
		/**
		 * 
		 */
		vVisibility : /* zebra.Dummy.vVisibility */ any;
				
		/**
		 * 
		 */
		vArea : /* zebra.Dummy.vArea */ any;
				
		/**
		 * 
		 */
		widths : /* zebra.Dummy.widths */ any;
				
		/**
		 * 
		 */
		heights : /* zebra.Dummy.heights */ any;
				
		/**
		 * 
		 */
		src : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ImageLabel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		CompListModel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		comboValueUpdated : /* zebra.Dummy.comboValueUpdated */ any;
				
		/**
		 * 
		 */
		getCombo : /* zebra.Dummy.getCombo */ any;
				
		/**
		 * 
		 */
		TextField : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ComboPadPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ReadonlyContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		EditableContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Button : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		List : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		contentUpdated : /* zebra.Dummy.contentUpdated */ any;
				
		/**
		 * 
		 */
		setSelectedIndex : /* zebra.Dummy.setSelectedIndex */ any;
				
		/**
		 * 
		 */
		isPadShown : /* zebra.Dummy.isPadShown */ any;
				
		/**
		 * 
		 */
		hidePad : /* zebra.Dummy.hidePad */ any;
				
		/**
		 * 
		 */
		showPad : /* zebra.Dummy.showPad */ any;
				
		/**
		 * 
		 */
		setList : /* zebra.Dummy.setList */ any;
				
		/**
		 * 
		 */
		setSelectionView : /* zebra.Dummy.setSelectionView */ any;
				
		/**
		 * 
		 */
		setMaxPadHeight : /* zebra.Dummy.setMaxPadHeight */ any;
				
		/**
		 * 
		 */
		model : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		text : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		list : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		selectionView : any;
				
		/**
		 * 
		 */
		isLayerActiveAt : /* zebra.Dummy.isLayerActiveAt */ any;
				
		/**
		 * 
		 */
		getWinType : /* zebra.Dummy.getWinType */ any;
				
		/**
		 * 
		 */
		addWin : /* zebra.Dummy.addWin */ any;
				
		/**
		 * 
		 */
		winsStack : /* zebra.Dummy.winsStack */ any;
				
		/**
		 * 
		 */
		winsListeners : any;
				
		/**
		 * 
		 */
		winsTypes : /* zebra.Dummy.winsTypes */ any;
				
		/**
		 * 
		 */
		isActive : /* zebra.Dummy.isActive */ any;
				
		/**
		 * 
		 */
		insideCorner : /* zebra.Dummy.insideCorner */ any;
				
		/**
		 * 
		 */
		winOpened : /* zebra.Dummy.winOpened */ any;
				
		/**
		 * 
		 */
		winActivated : /* zebra.Dummy.winActivated */ any;
				
		/**
		 * 
		 */
		isMaximized : /* zebra.Dummy.isMaximized */ any;
				
		/**
		 * 
		 */
		createCaptionPan : /* zebra.Dummy.createCaptionPan */ any;
				
		/**
		 * 
		 */
		createContentPan : /* zebra.Dummy.createContentPan */ any;
				
		/**
		 * 
		 */
		createTitle : /* zebra.Dummy.createTitle */ any;
				
		/**
		 * 
		 */
		setIcon : /* zebra.Dummy.setIcon */ any;
				
		/**
		 * 
		 */
		CaptionPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		TitleLab : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		StatusPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		SizerIcon : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Icon : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		icons : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		buttons : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		SubImage : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		CheckStatePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		itemSelected : /* zebra.Dummy.itemSelected */ any;
				
		/**
		 * 
		 */
		setCaption : /* zebra.Dummy.setCaption */ any;
				
		/**
		 * 
		 */
		getCheck : /* zebra.Dummy.getCheck */ any;
				
		/**
		 * 
		 */
		getContent : /* zebra.Dummy.getContent */ any;
				
		/**
		 * 
		 */
		getSub : /* zebra.Dummy.getSub */ any;
				
		/**
		 * 
		 */
		hideSub : /* zebra.Dummy.hideSub */ any;
				
		/**
		 * 
		 */
		activateSub : /* zebra.Dummy.activateSub */ any;
				
		/**
		 * 
		 */
		setCheckState : /* zebra.Dummy.setCheckState */ any;
				
		/**
		 * 
		 */
		getCheckState : /* zebra.Dummy.getCheckState */ any;
				
		/**
		 * 
		 */
		setCheckManager : /* zebra.Dummy.setCheckManager */ any;
				
		/**
		 * 
		 */
		MenuItem : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		childCompEvent : /* zebra.Dummy.childCompEvent */ any;
				
		/**
		 * 
		 */
		getMenuItem : /* zebra.Dummy.getMenuItem */ any;
				
		/**
		 * 
		 */
		hasSelectableItems : /* zebra.Dummy.hasSelectableItems */ any;
				
		/**
		 * 
		 */
		getMenuAt : /* zebra.Dummy.getMenuAt */ any;
				
		/**
		 * 
		 */
		setMenuAt : /* zebra.Dummy.setMenuAt */ any;
				
		/**
		 * 
		 */
		indexMenuOf : /* zebra.Dummy.indexMenuOf */ any;
				
		/**
		 * 
		 */
		$canceled : /* zebra.Dummy.$canceled */ any;
				
		/**
		 * 
		 */
		$topMenu : /* zebra.Dummy.$topMenu */ any;
				
		/**
		 * 
		 */
		$hideMenu : /* zebra.Dummy.$hideMenu */ any;
				
		/**
		 * 
		 */
		$childMenu : /* zebra.Dummy.$childMenu */ any;
				
		/**
		 * 
		 */
		$showSubMenu : /* zebra.Dummy.$showSubMenu */ any;
				
		/**
		 * 
		 */
		triggerSelectionByPos : /* zebra.Dummy.triggerSelectionByPos */ any;
				
		/**
		 * 
		 */
		menus : any;
				
		/**
		 * 
		 */
		decoratives : /* zebra.Dummy.decoratives */ any;
				
		/**
		 * 
		 */
		setMenubar : /* zebra.Dummy.setMenubar */ any;
				
		/**
		 * 
		 */
		TooltipBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$contentPs : /* zebra.Dummy.$contentPs */ any;
				
		/**
		 * 
		 */
		hideTooltip : /* zebra.Dummy.hideTooltip */ any;
				
		/**
		 * 
		 */
		toString : /* zebra.Dummy.toString */ any;
				
		/**
		 * 
		 */
		items : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Combo : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Items : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		fetchEditedValue : /* zebra.Dummy.fetchEditedValue */ any;
				
		/**
		 * 
		 */
		getEditor : /* zebra.Dummy.getEditor */ any;
				
		/**
		 * 
		 */
		shouldStart : /* zebra.Dummy.shouldStart */ any;
				
		/**
		 * 
		 */
		shouldCancel : /* zebra.Dummy.shouldCancel */ any;
				
		/**
		 * 
		 */
		shouldFinish : /* zebra.Dummy.shouldFinish */ any;
				
		/**
		 * 
		 */
		getCaptionPS : /* zebra.Dummy.getCaptionPS */ any;
				
		/**
		 * 
		 */
		captionResized : /* zebra.Dummy.captionResized */ any;
				
		/**
		 * 
		 */
		calcRowColAt : /* zebra.Dummy.calcRowColAt */ any;
				
		/**
		 * 
		 */
		getCaptionAt : /* zebra.Dummy.getCaptionAt */ any;
				
		/**
		 * 
		 */
		getTitleView : /* zebra.Dummy.getTitleView */ any;
				
		/**
		 * 
		 */
		getTitle : /* zebra.Dummy.getTitle */ any;
				
		/**
		 * 
		 */
		putTitle : /* zebra.Dummy.putTitle */ any;
				
		/**
		 * 
		 */
		setTitleAlignments : /* zebra.Dummy.setTitleAlignments */ any;
				
		/**
		 * 
		 */
		setTitleBackground : /* zebra.Dummy.setTitleBackground */ any;
				
		/**
		 * 
		 */
		titles : /* zebra.Dummy.titles */ any;
				
		/**
		 * 
		 */
		iconPan : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		statusPan : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		Layout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Link : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setSortable : /* zebra.Dummy.setSortable */ any;
				
		/**
		 * 
		 */
		matrixSorted : /* zebra.Dummy.matrixSorted */ any;
				
		/**
		 * 
		 */
		matrixResized : /* zebra.Dummy.matrixResized */ any;
				
		/**
		 * 
		 */
		CornerPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$topY : /* zebra.Dummy.$topY */ any;
				
		/**
		 * 
		 */
		$leftX : /* zebra.Dummy.$leftX */ any;
				
		/**
		 * 
		 */
		colVisibility : /* zebra.Dummy.colVisibility */ any;
				
		/**
		 * 
		 */
		rowVisibility : /* zebra.Dummy.rowVisibility */ any;
				
		/**
		 * 
		 */
		$se : /* zebra.Dummy.$se */ any;
				
		/**
		 * 
		 */
		getXOrigin : /* zebra.Dummy.getXOrigin */ any;
				
		/**
		 * 
		 */
		getYOrigin : /* zebra.Dummy.getYOrigin */ any;
				
		/**
		 * 
		 */
		getColPSWidth : /* zebra.Dummy.getColPSWidth */ any;
				
		/**
		 * 
		 */
		getRowPSHeight : /* zebra.Dummy.getRowPSHeight */ any;
				
		/**
		 * 
		 */
		getGridRows : /* zebra.Dummy.getGridRows */ any;
				
		/**
		 * 
		 */
		getGridCols : /* zebra.Dummy.getGridCols */ any;
				
		/**
		 * 
		 */
		getRowHeight : /* zebra.Dummy.getRowHeight */ any;
				
		/**
		 * 
		 */
		getColWidth : /* zebra.Dummy.getColWidth */ any;
				
		/**
		 * 
		 */
		getCellsVisibility : /* zebra.Dummy.getCellsVisibility */ any;
				
		/**
		 * 
		 */
		getColX : /* zebra.Dummy.getColX */ any;
				
		/**
		 * 
		 */
		getRowY : /* zebra.Dummy.getRowY */ any;
				
		/**
		 * 
		 */
		iColVisibility : /* zebra.Dummy.iColVisibility */ any;
				
		/**
		 * 
		 */
		iRowVisibility : /* zebra.Dummy.iRowVisibility */ any;
				
		/**
		 * 
		 */
		getTopCaptionHeight : /* zebra.Dummy.getTopCaptionHeight */ any;
				
		/**
		 * 
		 */
		getLeftCaptionWidth : /* zebra.Dummy.getLeftCaptionWidth */ any;
				
		/**
		 * 
		 */
		stopEditing : /* zebra.Dummy.stopEditing */ any;
				
		/**
		 * 
		 */
		setDrawLines : /* zebra.Dummy.setDrawLines */ any;
				
		/**
		 * 
		 */
		setPosMarkerMode : /* zebra.Dummy.setPosMarkerMode */ any;
				
		/**
		 * 
		 */
		repaintRows : /* zebra.Dummy.repaintRows */ any;
				
		/**
		 * 
		 */
		cellByLocation : /* zebra.Dummy.cellByLocation */ any;
				
		/**
		 * 
		 */
		clearSelect : /* zebra.Dummy.clearSelect */ any;
				
		/**
		 * 
		 */
		laidout : /* zebra.Dummy.laidout */ any;
				
		/**
		 * 
		 */
		paintNet : /* zebra.Dummy.paintNet */ any;
				
		/**
		 * 
		 */
		paintData : /* zebra.Dummy.paintData */ any;
				
		/**
		 * 
		 */
		paintPosMarker : /* zebra.Dummy.paintPosMarker */ any;
				
		/**
		 * 
		 */
		rPsMetric : /* zebra.Dummy.rPsMetric */ any;
				
		/**
		 * 
		 */
		getPSSize : /* zebra.Dummy.getPSSize */ any;
				
		/**
		 * 
		 */
		rCustomMetric : /* zebra.Dummy.rCustomMetric */ any;
				
		/**
		 * 
		 */
		setRowHeight : /* zebra.Dummy.setRowHeight */ any;
				
		/**
		 * 
		 */
		setRowsHeight : /* zebra.Dummy.setRowsHeight */ any;
				
		/**
		 * 
		 */
		setColWidth : /* zebra.Dummy.setColWidth */ any;
				
		/**
		 * 
		 */
		setColsWidth : /* zebra.Dummy.setColsWidth */ any;
				
		/**
		 * 
		 */
		cellModified : /* zebra.Dummy.cellModified */ any;
				
		/**
		 * 
		 */
		setEditorProvider : /* zebra.Dummy.setEditorProvider */ any;
				
		/**
		 * 
		 */
		setUsePsMetric : /* zebra.Dummy.setUsePsMetric */ any;
				
		/**
		 * 
		 */
		setCellPadding : /* zebra.Dummy.setCellPadding */ any;
				
		/**
		 * 
		 */
		setCellPaddings : /* zebra.Dummy.setCellPaddings */ any;
				
		/**
		 * 
		 */
		setLineColor : /* zebra.Dummy.setLineColor */ any;
				
		/**
		 * 
		 */
		setLineSize : /* zebra.Dummy.setLineSize */ any;
				
		/**
		 * 
		 */
		startEditing : /* zebra.Dummy.startEditing */ any;
				
		/**
		 * 
		 */
		getDataToEdit : /* zebra.Dummy.getDataToEdit */ any;
				
		/**
		 * 
		 */
		setEditedData : /* zebra.Dummy.setEditedData */ any;
				
		/**
		 * 
		 */
		colWidths : /* zebra.Dummy.colWidths */ any;
				
		/**
		 * 
		 */
		editors : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		rowHeights : /* zebra.Dummy.rowHeights */ any;
				
		/**
		 * 
		 */
		visibility : /* zebra.Dummy.visibility */ any;
				
		/**
		 * 
		 */
		getMinWidth : /* zebra.Dummy.getMinWidth */ any;
				
		/**
		 * 
		 */
		calcColWidths : /* zebra.Dummy.calcColWidths */ any;
				
		/**
		 * 
		 */
		recalcPS : /* zebra.Dummy.recalcPS */ any;
				
		/**
		 * 
		 */
		grid : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$widths : /* zebra.Dummy.$widths */ any;
				
		/**
		 * 
		 */
		$strPs : /* zebra.Dummy.$strPs */ any;
				
		/**
		 * 
		 */
		$props : /* zebra.Dummy.$props */ any;
				
		/**
		 * 
		 */
		isOpen : /* zebra.Dummy.isOpen */ any;
				
		/**
		 * 
		 */
		getItemMetrics : /* zebra.Dummy.getItemMetrics */ any;
				
		/**
		 * 
		 */
		togglePressed : /* zebra.Dummy.togglePressed */ any;
				
		/**
		 * 
		 */
		itemPressed : /* zebra.Dummy.itemPressed */ any;
				
		/**
		 * 
		 */
		getItemBounds : /* zebra.Dummy.getItemBounds */ any;
				
		/**
		 * 
		 */
		getToggleBounds : /* zebra.Dummy.getToggleBounds */ any;
				
		/**
		 * 
		 */
		getToggleView : /* zebra.Dummy.getToggleView */ any;
				
		/**
		 * 
		 */
		getItemPreferredSize : /* zebra.Dummy.getItemPreferredSize */ any;
				
		/**
		 * 
		 */
		recalc_ : /* zebra.Dummy.recalc_ */ any;
				
		/**
		 * 
		 */
		isOpen_ : /* zebra.Dummy.isOpen_ */ any;
				
		/**
		 * 
		 */
		getIM : /* zebra.Dummy.getIM */ any;
				
		/**
		 * 
		 */
		getItemAt : /* zebra.Dummy.getItemAt */ any;
				
		/**
		 * 
		 */
		getItemAtInBranch : /* zebra.Dummy.getItemAtInBranch */ any;
				
		/**
		 * 
		 */
		getIconView : /* zebra.Dummy.getIconView */ any;
				
		/**
		 * 
		 */
		getIconSize : /* zebra.Dummy.getIconSize */ any;
				
		/**
		 * 
		 */
		getIconBounds : /* zebra.Dummy.getIconBounds */ any;
				
		/**
		 * 
		 */
		getToggleSize : /* zebra.Dummy.getToggleSize */ any;
				
		/**
		 * 
		 */
		isOverVisibleArea : /* zebra.Dummy.isOverVisibleArea */ any;
				
		/**
		 * 
		 */
		findOpened : /* zebra.Dummy.findOpened */ any;
				
		/**
		 * 
		 */
		findNext : /* zebra.Dummy.findNext */ any;
				
		/**
		 * 
		 */
		findPrev : /* zebra.Dummy.findPrev */ any;
				
		/**
		 * 
		 */
		findLast : /* zebra.Dummy.findLast */ any;
				
		/**
		 * 
		 */
		prevVisible : /* zebra.Dummy.prevVisible */ any;
				
		/**
		 * 
		 */
		isVerVisible : /* zebra.Dummy.isVerVisible */ any;
				
		/**
		 * 
		 */
		nextVisible : /* zebra.Dummy.nextVisible */ any;
				
		/**
		 * 
		 */
		nextVisibleInBranch : /* zebra.Dummy.nextVisibleInBranch */ any;
				
		/**
		 * 
		 */
		paintSelectedItem : /* zebra.Dummy.paintSelectedItem */ any;
				
		/**
		 * 
		 */
		paintTree : /* zebra.Dummy.paintTree */ any;
				
		/**
		 * 
		 */
		paintBranch : /* zebra.Dummy.paintBranch */ any;
				
		/**
		 * 
		 */
		y_ : /* zebra.Dummy.y_ */ any;
				
		/**
		 * 
		 */
		paintChild : /* zebra.Dummy.paintChild */ any;
				
		/**
		 * 
		 */
		nextPage : /* zebra.Dummy.nextPage */ any;
				
		/**
		 * 
		 */
		toggleAll : /* zebra.Dummy.toggleAll */ any;
				
		/**
		 * 
		 */
		itemInserted : /* zebra.Dummy.itemInserted */ any;
				
		/**
		 * 
		 */
		itemRemoved : /* zebra.Dummy.itemRemoved */ any;
				
		/**
		 * 
		 */
		itemModified : /* zebra.Dummy.itemModified */ any;
				
		/**
		 * 
		 */
		lnColor : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		viewSizes : /* zebra.Dummy.viewSizes */ any;
				
		/**
		 * 
		 */
		nodes : any;
				
		/**
		 * 
		 */
		isSelectable : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		shouldStartEdit : /* zebra.Dummy.shouldStartEdit */ any;
				
		/**
		 * 
		 */
		paintItem : /* zebra.Dummy.paintItem */ any;
				
		/**
		 * 
		 */
		se : /* zebra.Dummy.se */ any;
				
		/**
		 * 
		 */
		pressedItem : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		adjustLocation : /* zebra.Dummy.adjustLocation */ any;
				
		/**
		 * 
		 */
		setContent : /* zebra.Dummy.setContent */ any;
				
		/**
		 * 
		 */
		setStyle : /* zebra.Dummy.setStyle */ any;
				
		/**
		 * 
		 */
		isInInvisibleState : /* zebra.Dummy.isInInvisibleState */ any;
				
		/**
		 * 
		 */
		element : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		globalCompListener : /* zebra.Dummy.globalCompListener */ any;
				
		/**
		 * 
		 */
		globalWinListener : /* zebra.Dummy.globalWinListener */ any;
				
		/**
		 * 
		 */
		detectAt : /* zebra.Dummy.detectAt */ any;
				
		/**
		 * 
		 */
		shaperBr : zebra.Dummy;
				
		/**
		 * 
		 */
		buildModel : /* zebra.Dummy.buildModel */ any;
				
		/**
		 * 
		 */
		itemByComponent : /* zebra.Dummy.itemByComponent */ any;
				
		/**
		 * 
		 */
		createItem : /* zebra.Dummy.createItem */ any;
				
		/**
		 * 
		 */
		kids : /* zebra.$measure.!0.kids */ any;
				
		/**
		 * 
		 */
		onmousemove : /* zebra.$measure.!0.onmousemove */ any;
				
		/**
		 * 
		 */
		onmousedown : /* zebra.$measure.!0.onmousedown */ any;
				
		/**
		 * 
		 */
		onmouseup : /* zebra.$measure.!0.onmouseup */ any;
				
		/**
		 * 
		 */
		onmouseover : /* zebra.$measure.!0.onmouseover */ any;
				
		/**
		 * 
		 */
		onmouseout : /* zebra.$measure.!0.onmouseout */ any;
				
		/**
		 * 
		 */
		oncontextmenu : /* zebra.$measure.!0.oncontextmenu */ any;
				
		/**
		 * 
		 */
		onkeydown : /* zebra.$measure.!0.onkeydown */ any;
				
		/**
		 * 
		 */
		onkeyup : /* zebra.$measure.!0.onkeyup */ any;
				
		/**
		 * 
		 */
		onkeypress : /* zebra.$measure.!0.onkeypress */ any;
				
		/**
		 * 
		 */
		onfocus : /* zebra.$measure.!0.onfocus */ any;
				
		/**
		 * 
		 */
		onblur : /* zebra.$measure.!0.onblur */ any;
	}
}
declare namespace zebra.$env.$canvas{
	// zebra.$env.$canvas.size.!ret
	
	/**
	 * 
	 */
	interface SizeRet {
				
		/**
		 * 
		 */
		textBaseline : string;
		
		/**
		 * 
		 */
		$states : {
		}
				
		/**
		 * 
		 */
		$curState : number;
				
		/**
		 * 
		 */
		getImageData : /* zebra.$canvas.size.!ret.$getImageData */ any;
				
		/**
		 * 
		 */
		scale : /* zebra.$canvas.size.!ret.$scale */ any;
				
		/**
		 * 
		 */
		$getImageData : /* zebra.$canvas.size.!ret.$getImageData */ any;
				
		/**
		 * 
		 */
		$scale : /* zebra.$canvas.size.!ret.$scale */ any;
				
		/**
		 * 
		 */
		reset : /* zebra.$canvas.size.!ret.reset */ any;
				
		/**
		 * 
		 */
		tX : /* zebra.$canvas.size.!ret.tX */ any;
				
		/**
		 * 
		 */
		tY : /* zebra.$canvas.size.!ret.tY */ any;
				
		/**
		 * 
		 */
		translate : /* zebra.$canvas.size.!ret.translate */ any;
				
		/**
		 * 
		 */
		rotate : /* zebra.$canvas.size.!ret.rotate */ any;
				
		/**
		 * 
		 */
		save : /* zebra.$canvas.size.!ret.save */ any;
				
		/**
		 * 
		 */
		restore : /* zebra.$canvas.size.!ret.restore */ any;
				
		/**
		 * 
		 */
		clipRect : /* zebra.$canvas.size.!ret.clipRect */ any;
	}
}
declare namespace zebra.$env{
	// zebra.$env.$getPS.!ret
	
	/**
	 * 
	 */
	interface $getPSRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env{
	// zebra.$env.$cvp.!1
	
	/**
	 * 
	 */
	interface $cvp1 {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		y : number;
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.$env{
	// zebra.$env.loadImage.!ret
	
	/**
	 * 
	 */
	interface LoadImageRet {
				
		/**
		 * 
		 */
		crossOrigin : string;
				
		/**
		 * 
		 */
		onerror : /* zebra.loadImage.!ret.onerror */ any;
				
		/**
		 * 
		 */
		onload : /* zebra.loadImage.!ret.onload */ any;
	}
}
declare namespace zebra{
	// zebra.getPropertySetter.!0
	
	/**
	 * the description is not atomic or array type. it can
	 * be either a number of fields that should be merged
	 * with appropriate field of "o" object, or it can define
	 * how to instantiate an instance of a class. There is
	 * one special case: ".name" property says that object
	 * is created by calling "name" method
	 */
	interface GetPropertySetter0 {
				
		/**
		 * 
		 */
		 : Array<any>;
	}
}
declare namespace zebra{
	// zebra.getPropertySetter.!ret
	
	/**
	 * 
	 */
	interface GetPropertySetterRet {
				
		/**
		 * 
		 */
		methodName : string;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.find.!2
	type Find2 = ((item : any) => boolean);
}
declare namespace zebra.Dummy{
	// zebra.Dummy.findAll.!0
	
	/**
	 * 
	 */
	interface FindAll0 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.findAll.!1
	type FindAll1 = ((kid : any) => boolean);
}
declare namespace zebra.Dummy{
	// zebra.Dummy.findAll.!ret
	type FindAllRet = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getPreferredSize.!ret
	
	/**
	 * 
	 */
	interface GetPreferredSizeRet {
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.calcPreferredSize.!ret
	
	/**
	 * 
	 */
	interface CalcPreferredSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.removeAt.!ret
	
	/**
	 * 
	 */
	interface RemoveAtRet {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.calcCols.!ret
	type CalcColsRet = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.calcRows.!ret
	type CalcRowsRet = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.kids.<i>
	
	/**
	 * Currently activated as a window children component
	 * @attribute activeWin
	 * @type {zebra.ui.Panel}
	 * @readOnly
	 * @protected
	 */
	interface KidsI {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getPointByOffset.!ret
	type GetPointByOffsetRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.invoke.!ret
	type InvokeRet = (() => void);
}
declare namespace zebra.Dummy{
	// zebra.Dummy.encode.!0
	type Encode0 = Array</* zebra.Dummy.encode.!0 */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.encode.!1
	type Encode1 = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.encodeValue.!1
	type EncodeValue1 = Array</* string,[zebra.Dummy.encode.!0],string */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getLnInfo.!ret
	type GetLnInfoRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.iterate.!0
	type Iterate0 = ((k : any, v : any) => void);
}
declare namespace zebra.Dummy{
	// zebra.Dummy.lines.<i>
	
	/**
	 * 
	 */
	interface LinesI {
				
		/**
		 * 
		 */
		s : string;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.objs.<i>
	type ObjsI = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.paint.!0
	
	/**
	 * 
	 */
	interface Paint0 {
				
		/**
		 * 
		 */
		lineWidth : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.outline.!0
	
	/**
	 * 
	 */
	interface Outline0 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.canvasFocusLost.!0
	
	/**
	 * 
	 */
	interface CanvasFocusLost0 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.parseKey.!ret
	type ParseKeyRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.$keyTyped.!0
	
	/**
	 * 
	 */
	interface $keyTyped0 {
				
		/**
		 * 
		 */
		preventDefault(): void;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.$keyPressed.!0
	
	/**
	 * 
	 */
	interface $keyPressed0 {
				
		/**
		 * 
		 */
		preventDefault(): void;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.$mouseEntered.!1
	
	/**
	 * 
	 */
	interface $mouseEntered1 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.$mousePressed.!1
	
	/**
	 * 
	 */
	interface $mousePressed1 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.paintOnTop.!0
	
	/**
	 * 
	 */
	interface PaintOnTop0 {
				
		/**
		 * Set the CSS font of the wrapped HTML element
		 * @param {String|zebra.ui.Font} f a font
		 * @method setFont
		 * @param f 
		 */
		setFont(f : any): void;
				
		/**
		 * Set the CSS color of the wrapped HTML element
		 * @param {String} c a color
		 * @method setColor
		 * @param c 
		 */
		setColor(c : any): void;
				
		/**
		 * 
		 * @param x1 
		 * @param y1 
		 * @param x2 
		 * @param y2 
		 * @param w 
		 */
		drawLine(x1 : number, y1 : number, x2 : number, y2 : number, w : number): void;
				
		/**
		 * Get the given text line width in pixels
		 * @param  {Integer} line a text line number
		 * @return {Integer} a text line width in pixels
		 * @method lineWidth
		 */
		lineWidth : number;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 */
		ovalPath(x : number, y : number, w : number, h : number): void;
				
		/**
		 * 
		 * @param xPoints 
		 * @param yPoints 
		 * @param nPoints 
		 */
		polylinePath(xPoints : zebra.Dummy.PaintOnTop0.PolylinePath0, yPoints : any, nPoints : any): void;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 */
		drawDottedRect(x : any, y : any, w : any, h : any): void;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param x2 
		 * @param y2 
		 */
		drawDashLine(x : number, y : number, x2 : any, y2 : any): void;
	}
}
declare namespace zebra.Dummy.PaintOnTop0{
	// zebra.Dummy.paintOnTop.!0.polylinePath.!0
	
	/**
	 * copy parents prototype methods and fields into
	 * new class template
	 */
	interface PolylinePath0 {
				
		/**
		 * 
		 */
		 : Array<(),fn(target : () => void) => void>;
	}
}
declare namespace zebra.Dummy.PaintOnTop0.PolylinePath0.0{
	// zebra.Dummy.paintOnTop.!0.polylinePath.!0.0
	
	/**
	 * 
	 */
	interface 0 {
				
		/**
		 * 
		 */
		methodName : string;
				
		/**
		 * 
		 */
		(): void;
	}
}
declare namespace zebra.Dummy.PaintOnTop0.PolylinePath0.1{
	// zebra.Dummy.paintOnTop.!0.polylinePath.!0.1
	
	/**
	 * clone method if it is bound to a class
	 */
	interface 1 {
				
		/**
		 * 
		 */
		methodName : string;
				
		/**
		 * 
		 * @param target 
		 */
		(target : () => void): void;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getTitleInfo.!ret
	
	/**
	 * 
	 */
	interface GetTitleInfoRet {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		width : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getBundleBounds.!ret
	
	/**
	 * 
	 */
	interface GetBundleBoundsRet {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.findNextWord.!ret
	type FindNextWordRet = Array</* ?,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getSubString.!1
	type GetSubString1 = Array<number>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getSubString.!2
	type GetSubString2 = Array<number>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getStartSelection.!ret
	type GetStartSelectionRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getEndSelection.!ret
	type GetEndSelectionRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.history.<i>
	type HistoryI = Array</* number,number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getItemLocation.!ret
	
	/**
	 * 
	 */
	interface GetItemLocationRet {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getItemSize.!ret
	
	/**
	 * 
	 */
	interface GetItemSizeRet {
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.calcMaxItemSize.!ret
	
	/**
	 * 
	 */
	interface CalcMaxItemSizeRet {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.$showSubMenu.!0
	
	/**
	 * 
	 */
	interface $showSubMenu0 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.fetchEditedValue.!3
	
	/**
	 * 
	 */
	interface FetchEditedValue3 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getCaptionAt.!2
	type GetCaptionAt2 = ((m : any, xy : number, xxyy : any, wh : any, i : any) => boolean);
}
declare namespace zebra.Dummy{
	// zebra.Dummy.colVisibility.!ret
	type ColVisibilityRet = Array</* number,? */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.rowVisibility.!ret
	type RowVisibilityRet = Array</* number,? */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.cellByLocation.!ret
	type CellByLocationRet = Array</* number,number */ any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.paintNet.!0
	
	/**
	 * 
	 */
	interface PaintNet0 {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getItemMetrics.!0
	type GetItemMetrics0 = Array<any>;
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getToggleBounds.!ret
	
	/**
	 * 
	 */
	interface GetToggleBoundsRet {
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getItemPreferredSize.!ret
	
	/**
	 * 
	 */
	interface GetItemPreferredSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.getIconSize.!ret
	
	/**
	 * 
	 */
	interface GetIconSizeRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.onmousemove.!0
	
	/**
	 * get appropriate mousePressed event by event id
	 */
	interface Onmousemove0 {
				
		/**
		 * 
		 */
		identifier : number;
				
		/**
		 * 
		 */
		time : number;
				
		/**
		 * 
		 */
		clicks : number;
				
		/**
		 * 
		 */
		modifiers : /*no type*/{};
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.buildModel.!1
	
	/**
	 * 
	 */
	interface BuildModel1 {
				
		/**
		 * 
		 */
		comp : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		parent : /* zebra.Dummy.buildModel.!1 */ any;
	}
}
declare namespace zebra{
	// zebra.newInstance.!1
	type NewInstance1 = Array<any>;
}
declare namespace zebra{
	// zebra.newInstance.!ret
	
	/**
	 * 
	 */
	interface NewInstanceRet {
	}
}
declare namespace zebra{
	// zebra.intersection.!8
	
	/**
	 * 
	 */
	interface Intersection8 {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		y : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra{
	// zebra.unite.!8
	
	/**
	 * 
	 */
	interface Unite8 {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra{
	// zebra.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : boolean;
	}
}
declare namespace zebra{
	// zebra.getRequest.!ret
	
	/**
	 * !!! IE9 returns 404 if XDomainRequest is used for the same domain but for different paths.
	 * !!! Using standard XMLHttpRequest has to be forced in this case
	 */
	interface GetRequestRet {
				
		/**
		 * 
		 * @param data 
		 */
		__send(data : any): void;
				
		/**
		 * 
		 */
		onreadystatechange(): void;
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		statusText : string;
				
		/**
		 * 
		 */
		send : /* zebra.getRequest.!ret.__send */ any;
	}
}
declare namespace zebra{
	// zebra.$windowSize.!ret
	
	/**
	 * c.setLocation(window.pageXOffset, -window.pageYOffset);
	 */
	interface $windowSizeRet {
				
		/**
		 * 
		 */
		width : number;
	}
}
declare namespace zebra{
	// zebra.$measure.!0
	
	/**
	 * 
	 */
	interface $measure0 {
				
		/**
		 * 
		 */
		isSingleton : boolean;
				
		/**
		 * 
		 */
		cachedHeight : number;
				
		/**
		 * 
		 */
		height : number;
				
		/**
		 * 
		 */
		cachedWidth : number;
				
		/**
		 * 
		 */
		psHeight : number;
				
		/**
		 * 
		 */
		psWidth : number;
				
		/**
		 * 
		 */
		isValid : boolean;
				
		/**
		 * 
		 */
		isLayoutValid : boolean;
				
		/**
		 * 
		 */
		isVisible : boolean;
				
		/**
		 * Sides gap
		 * @attribute sideSpace
		 * @type {Integer}
		 * @readOnly
		 * @default 1
		 */
		vgap : number;
				
		/**
		 * Vertical gap (space between components)
		 * @attribute vgap
		 * @default 0
		 * @readOnly
		 * @type {Integer}
		 */
		hgap : number;
				
		/**
		 * 
		 */
		stretchLast : boolean;
				
		/**
		 * 
		 */
		right : number;
				
		/**
		 * Bottom padding
		 * @readOnly
		 * @private
		 * @attribute bottom
		 * @type {Integer}
		 */
		left : number;
				
		/**
		 * 
		 */
		bottom : number;
				
		/**
		 * 
		 */
		colSpan : number;
				
		/**
		 * 
		 */
		rowSpan : number;
				
		/**
		 * Array of children items of the item element
		 * @attribute kids
		 * @type {Array}
		 * @default []
		 * @readOnly
		 */
		kids : Array<any>;
				
		/**
		 * 
		 */
		flag : number;
				
		/**
		 * Number of virtual rows to place children components
		 * @attribute rows
		 * @readOnly
		 * @type {Integer}
		 */
		rows : number;
				
		/**
		 * Number of virtual columns to place children components
		 * @attribute cols
		 * @readOnly
		 * @type {Integer}
		 */
		cols : number;
				
		/**
		 * A bits mask of pressed meta keys (CTRL, ALT, etc)
		 * @attribute mask
		 * @readOnly
		 * @type {Integer}
		 */
		mask : number;
				
		/**
		 * The attribute rules how arrays have to be merged if the bag is loaded from few
		 * JSON sources. true means that if a two JSON have the same key that reference to
		 * array values the final value will be a concatenation of the two arrays from the
		 * two JSON sources.
		 * @attribute concatArrays
		 * @type {Boolean}
		 * @default false
		 */
		concatArrays : boolean;
				
		/**
		 * * The property says if the object introspection is required to try find a setter
		 * * method for the given key. For instance if an object is loaded with the
		 * * following JSON:
		 * 
		 * {
		 *    "color": "red"
		 * }
		 * 
		 * * the introspection will cause bag class to try finding "setColor(c)" method in
		 * * the loaded with the JSON object and call it to set "red" property value.
		 * * @attribute usePropertySetters
		 * * @default true
		 * * @type {Boolean}
		 */
		usePropertySetters : boolean;
				
		/**
		 * 
		 */
		ignoreNonExistentKeys : boolean;
				
		/**
		 * 
		 */
		$url : string;
				
		/**
		 * 
		 */
		DOWN : number;
				
		/**
		 * 
		 */
		UP : number;
				
		/**
		 * 
		 */
		BEG : number;
				
		/**
		 * 
		 */
		END : number;
				
		/**
		 * 
		 */
		offset : number;
				
		/**
		 * Current virtual cursor offset
		 * @attribute offset
		 * @type {Integer}
		 * @readOnly
		 */
		currentLine : number;
				
		/**
		 * 
		 */
		currentCol : number;
				
		/**
		 * Number of columns in the matrix model
		 * @attribute cols
		 * @type {Integer}
		 * @readOnly
		 */
		_ : number;
				
		/**
		 * 
		 */
		version : string;
				
		/**
		 * 
		 */
		contentType : string;
				
		/**
		 * 
		 */
		textLength : number;
				
		/**
		 * 
		 */
		maxLen : number;
				
		/**
		 * Maximal possible value
		 * @attribute max
		 * @type {Integer}
		 * @readOnly
		 * @default 100
		 */
		extra : number;
				
		/**
		 * 
		 */
		dyZoom : number;
				
		/**
		 * 
		 */
		dxZoom : number;
				
		/**
		 * 
		 */
		dyNorma : number;
				
		/**
		 * 
		 */
		dxNorma : number;
				
		/**
		 * 
		 */
		naturalDirection : boolean;
				
		/**
		 * 
		 */
		touchCounter : number;
				
		/**
		 * 
		 */
		dc : number;
				
		/**
		 * 
		 */
		middle : string;
				
		/**
		 * 
		 */
		darkest : string;
				
		/**
		 * 
		 */
		MOUSE_UID : number;
				
		/**
		 * 
		 */
		KEY_UID : number;
				
		/**
		 * 
		 */
		FOCUS_UID : number;
				
		/**
		 * !!! don't change order
		 */
		FOCUS_LOST : number;
				
		/**
		 * 
		 */
		FOCUS_GAINED : number;
				
		/**
		 * !!! don't change order
		 */
		TYPED : number;
				
		/**
		 * 
		 */
		RELEASED : number;
				
		/**
		 * 
		 */
		PRESSED : number;
				
		/**
		 * 
		 */
		M_CTRL : number;
				
		/**
		 * 
		 */
		M_SHIFT : number;
				
		/**
		 * 
		 */
		M_ALT : number;
				
		/**
		 * 
		 */
		M_CMD : number;
				
		/**
		 * !!! don't change order
		 */
		CLICKED : number;
				
		/**
		 * 
		 */
		ENTERED : number;
				
		/**
		 * 
		 */
		EXITED : number;
				
		/**
		 * 
		 */
		DRAGGED : number;
				
		/**
		 * 
		 */
		DRAGSTARTED : number;
				
		/**
		 * 
		 */
		DRAGENDED : number;
				
		/**
		 * 
		 */
		MOVED : number;
				
		/**
		 * 
		 */
		LEFT_BUTTON : number;
				
		/**
		 * 
		 */
		RIGHT_BUTTON : number;
				
		/**
		 * 
		 */
		ENABLED : number;
				
		/**
		 * 
		 */
		SHOWN : number;
				
		/**
		 * 
		 */
		SIZED : number;
				
		/**
		 * 
		 */
		ADDED : number;
				
		/**
		 * 
		 */
		REMOVED : number;
				
		/**
		 * Current cursor type
		 * @attribute cursorType
		 * @type {String}
		 * @readOnly
		 * @default "default"
		 */
		cursorType : string;
				
		/**
		 * 
		 */
		$isFunc : boolean;
				
		/**
		 * 
		 */
		$isMasterCanvas : boolean;
				
		/**
		 * 
		 */
		$focusGainedCounter : number;
				
		/**
		 * Indicate if the canvas has to be stretched to
		 * fill the whole screen area.
		 * @type {Boolean}
		 * @attribute isFullScreen
		 * @readOnly
		 */
		isFullScreen : boolean;
				
		/**
		 * 
		 */
		radius : number;
				
		/**
		 * 
		 */
		gx1 : number;
				
		/**
		 * 
		 */
		gx2 : number;
				
		/**
		 * 
		 */
		gy1 : number;
				
		/**
		 * 
		 */
		gy2 : number;
				
		/**
		 * 
		 */
		clicks : number;
				
		/**
		 * 
		 */
		absX : number;
				
		/**
		 * 
		 */
		absY : number;
				
		/**
		 * 
		 */
		bg : string;
				
		/**
		 * 
		 */
		stringWidth : number;
				
		/**
		 * Indicates if the last entered character doesn't have to be replaced with echo character
		 * @type {Boolean}
		 * @attribute showLast
		 * @default true
		 * @readOnly
		 */
		showLast : boolean;
				
		/**
		 * 
		 */
		fillColor1 : string;
				
		/**
		 * Indicate if the button should
		 * fire event by pressed event
		 * @attribute isFireByPress
		 * @type {Boolean}
		 * @default false
		 * @readOnly
		 */
		isFireByPress : boolean;
				
		/**
		 * Fire button event repeating period. -1 means
		 * the button event repeating is disabled.
		 * @attribute firePeriod
		 * @type {Integer}
		 * @default -1
		 * @readOnly
		 */
		firePeriod : number;
				
		/**
		 * 
		 */
		startIn : number;
				
		/**
		 * 
		 */
		hGap : number;
				
		/**
		 * Horizontal gap. Define left and right paddings between
		 * border panel border and the border panel content
		 * @attribute hGap
		 * @type {Integer}
		 * @readOnly
		 * @default 0
		 */
		vGap : number;
				
		/**
		 * Border panel label indent
		 * @type {Integer}
		 * @attribute indent
		 * @default 4
		 */
		indent : number;
				
		/**
		 * 
		 */
		prevLoc : number;
				
		/**
		 * 
		 */
		rightMinSize : number;
				
		/**
		 * A reference to right (bottom) sizable UI component
		 * @attribute rightComp
		 * @type {zebra.ui.Panel}
		 * @readOnly
		 */
		leftMinSize : number;
				
		/**
		 * 
		 */
		isMoveable : boolean;
				
		/**
		 * 
		 */
		maxXY : number;
				
		/**
		 * 
		 */
		minXY : number;
				
		/**
		 * 
		 */
		barLocation : number;
				
		/**
		 * 
		 */
		bundleHeight : number;
				
		/**
		 * Indicate if the extender panel is collapsed
		 * @type {Boolean}
		 * @attribute isCollapsed
		 * @readOnly
		 * @default false
		 */
		isCollapsed : boolean;
				
		/**
		 * 
		 */
		sy : number;
				
		/**
		 * 
		 */
		sx : number;
				
		/**
		 * 
		 */
		isDragable : boolean;
				
		/**
		 * 
		 */
		MIN_BUNDLE_SIZE : number;
				
		/**
		 * 
		 */
		max : number;
				
		/**
		 * Page increment value
		 * @attribute pageIncrement
		 * @type {Integer}
		 * @readOnly
		 * @default 20
		 */
		pageIncrement : number;
				
		/**
		 * Unit increment value
		 * @attribute unitIncrement
		 * @type {Integer}
		 * @readOnly
		 * @default 5
		 */
		unitIncrement : number;
				
		/**
		 * 
		 */
		bundleLoc : number;
				
		/**
		 * !!! It is more convenient to  if (this.isDragable || this.isInBundle(e.x, e.y)){
		 */
		startDragLoc : number;
				
		/**
		 * Indicate if the scroll bars should be hidden
		 * when they are not active
		 * @attribute autoHide
		 * @type {Boolean}
		 * @readOnly
		 */
		autoHide : boolean;
				
		/**
		 * 
		 */
		$interval : number;
				
		/**
		 * 
		 */
		isPosChangedLocked : boolean;
				
		/**
		 * 
		 */
		tabAreaX : number;
				
		/**
		 * 
		 */
		repaintY : number;
				
		/**
		 * 
		 */
		repaintX : number;
				
		/**
		 * 
		 */
		repaintHeight : number;
				
		/**
		 * 
		 */
		repaintWidth : number;
				
		/**
		 * 
		 */
		sideSpace : number;
				
		/**
		 * 
		 */
		tabAreaHeight : number;
				
		/**
		 * 
		 */
		tabAreaWidth : number;
				
		/**
		 * 
		 */
		tabAreaY : number;
				
		/**
		 * Currently selected list item index
		 * @type {Integer}
		 * @attribute selectedIndex
		 * @default -1
		 * @readOnly
		 */
		selectedIndex : number;
				
		/**
		 * 
		 */
		overTab : number;
				
		/**
		 * 
		 */
		exactStep : number;
				
		/**
		 * 
		 */
		roughStep : number;
				
		/**
		 * 
		 */
		min : number;
				
		/**
		 * 
		 */
		netSize : number;
				
		/**
		 * 
		 */
		psH : number;
				
		/**
		 * 
		 */
		psW : number;
				
		/**
		 * 
		 */
		scaleStep : number;
				
		/**
		 * 
		 */
		correctDt : number;
				
		/**
		 * 
		 */
		isShowTitle : boolean;
				
		/**
		 * 
		 */
		isShowScale : boolean;
				
		/**
		 * 
		 */
		isIntervalMode : boolean;
				
		/**
		 * 
		 */
		dragged : boolean;
				
		/**
		 * 
		 */
		isPlaying : boolean;
				
		/**
		 * 
		 */
		isReady : boolean;
				
		/**
		 * 
		 */
		identifier : number;
				
		/**
		 * 
		 */
		invLines : number;
				
		/**
		 * 
		 */
		startInvLine : number;
				
		/**
		 * 
		 */
		textWidth : number;
				
		/**
		 * 
		 */
		textHeight : number;
				
		/**
		 * 
		 */
		$dontHide : boolean;
				
		/**
		 * 
		 */
		selectionColor : string;
				
		/**
		 * Specify the text field cursor blinking period in milliseconds.
		 * -1 means no blinkable cursor
		 * @type {Number}
		 * @default -1
		 * @readOnly
		 * @attribute blinkigPeriod
		 */
		blinkingPeriod : number;
				
		/**
		 * 
		 */
		blinkMe : boolean;
				
		/**
		 * 
		 */
		blinkMeCounter : number;
				
		/**
		 * 
		 */
		isEditable : boolean;
				
		/**
		 * 
		 */
		curX : number;
				
		/**
		 * 
		 */
		endCol : number;
				
		/**
		 * 
		 */
		endLine : number;
				
		/**
		 * 
		 */
		startCol : number;
				
		/**
		 * 
		 */
		startLine : number;
				
		/**
		 * 
		 */
		endOff : number;
				
		/**
		 * 
		 */
		startOff : number;
				
		/**
		 * 
		 */
		historyPos : number;
				
		/**
		 * 
		 */
		curH : number;
				
		/**
		 * TODO: cursor size should be set by property
		 */
		curW : number;
				
		/**
		 * 
		 */
		curY : number;
				
		/**
		 * 
		 */
		undoCounter : number;
				
		/**
		 * 
		 */
		redoCounter : number;
				
		/**
		 * Index of the first visible list item
		 * @readOnly
		 * @attribute firstVisible
		 * @type {Integer}
		 * @private
		 */
		firstVisible : number;
				
		/**
		 * 
		 */
		psHeight_ : number;
				
		/**
		 * 
		 */
		psWidth_ : number;
				
		/**
		 * Y coordinate of the first visible list item
		 * @readOnly
		 * @attribute firstVisibleY
		 * @type {Integer}
		 * @private
		 */
		firstVisibleY : number;
				
		/**
		 * Internal flag to track list items visibility status. It is set
		 * to false to trigger list items metrics and visibility recalculation
		 * @attribute visValid
		 * @type {Boolean}
		 * @private
		 */
		visValid : boolean;
				
		/**
		 * 
		 */
		$closeTime : number;
				
		/**
		 * 
		 */
		dontGenerateUpdateEvent : boolean;
				
		/**
		 * Maximal size the combo box height can have
		 * @attribute maxPadHeight
		 * @readOnly
		 * @type {Integer}
		 */
		maxPadHeight : number;
				
		/**
		 * 
		 */
		$lockListSelEvent : boolean;
				
		/**
		 * 
		 */
		$triggeredByPointer : boolean;
				
		/**
		 * 
		 */
		topModalIndex : number;
				
		/**
		 * 
		 */
		isPopupEditor : boolean;
				
		/**
		 * Minimal possible grid cell size
		 * @type {Number}
		 * @default 10
		 * @attribute minSize
		 */
		minSize : number;
				
		/**
		 * 
		 */
		psw : number;
				
		/**
		 * 
		 */
		prevH : number;
				
		/**
		 * 
		 */
		dy : number;
				
		/**
		 * 
		 */
		dx : number;
				
		/**
		 * 
		 */
		py : number;
				
		/**
		 * 
		 */
		px : number;
				
		/**
		 * 
		 */
		psh : number;
				
		/**
		 * 
		 */
		action : number;
				
		/**
		 * 
		 */
		noSubIfEmpty : boolean;
				
		/**
		 * 
		 */
		$isActive : boolean;
				
		/**
		 * 
		 */
		mRight : number;
				
		/**
		 * 
		 */
		mBottom : number;
				
		/**
		 * 
		 */
		mLeft : number;
				
		/**
		 * 
		 */
		mTop : number;
				
		/**
		 * 
		 */
		borderColor : string;
				
		/**
		 * 
		 */
		borderWidth : number;
				
		/**
		 * Indicates if a shown tooltip has to disappear by mouse pressed event
		 * @attribute hideTooltipByPress
		 * @type {Boolean}
		 * @default true
		 */
		hideTooltipByPress : boolean;
				
		/**
		 * 
		 */
		$popupMenuY : number;
				
		/**
		 * 
		 */
		$popupMenuX : number;
				
		/**
		 * 
		 */
		$tooltipY : number;
				
		/**
		 * 
		 */
		$tooltipX : number;
				
		/**
		 * Define interval (in milliseconds) between entering a component and showing
		 * a tooltip for the entered component
		 * @attribute showTooltipIn
		 * @type {Integer}
		 * @default 400
		 */
		showTooltipIn : number;
				
		/**
		 * 
		 */
		size : number;
				
		/**
		 * Size of the active area where cells size can be changed by mouse dragging event
		 * @attribute activeAreaSize
		 * @type {Number}
		 * @default 5
		 */
		activeAreaSize : number;
				
		/**
		 * Line color
		 * @attribute lineColor
		 * @type {String}
		 * @default gray
		 * @readOnly
		 */
		lineColor : string;
				
		/**
		 * 
		 */
		isResizable : boolean;
				
		/**
		 * Indicate if the grid cells are resize-able.
		 * to the cell preferred size by mouse double click event.
		 * @attribute isResizable
		 * @default true
		 * @type {Boolean}
		 */
		isAutoFit : boolean;
				
		/**
		 * 
		 */
		selectedColRow : number;
				
		/**
		 * 
		 */
		sortState : number;
				
		/**
		 * Indicates if the title panel has to initiate a column sorting
		 * @default false
		 * @attribute isSortable
		 * @readOnly
		 * @type {Boolean}
		 */
		isSortable : boolean;
				
		/**
		 * 
		 */
		DEF_COLWIDTH : number;
				
		/**
		 * 
		 */
		DEF_ROWHEIGHT : number;
				
		/**
		 * 
		 */
		cellInsetsBottom : number;
				
		/**
		 * 
		 */
		cellInsetsTop : number;
				
		/**
		 * Grid cell right padding
		 * @attribute cellInsetsRight
		 * @default 2
		 * @type {Integer}
		 * @readOnly
		 */
		lineSize : number;
				
		/**
		 * 
		 */
		cellInsetsRight : number;
				
		/**
		 * 
		 */
		cellInsetsLeft : number;
				
		/**
		 * 
		 */
		drawHorLines : boolean;
				
		/**
		 * Indicate if horizontal lines have to be rendered
		 * @attribute drawHorLines
		 * @type {Boolean}
		 * @readOnly
		 * @default true
		 */
		drawVerLines : boolean;
				
		/**
		 * Indicate if size of grid cells have to be calculated
		 * automatically basing on its preferred heights and widths
		 * @attribute isUsePsMetric
		 * @type {Boolean}
		 * @default false
		 * @readOnly
		 */
		isUsePsMetric : boolean;
				
		/**
		 * 
		 */
		colOffset : number;
				
		/**
		 * 
		 */
		pressedCol : number;
				
		/**
		 * 
		 */
		rowOffset : number;
				
		/**
		 * 
		 */
		pressedRow : number;
				
		/**
		 * 
		 */
		editingCol : number;
				
		/**
		 * Currently editing column. -1 if no column is editing
		 * @attribute editingCol
		 * @type {Integer}
		 * @default -1
		 * @readOnly
		 */
		editingRow : number;
				
		/**
		 * 
		 */
		$prevWidth : number;
				
		/**
		 * 
		 */
		$propW : number;
				
		/**
		 * 
		 */
		$propsW : number;
				
		/**
		 * 
		 */
		gapy : number;
				
		/**
		 * 
		 */
		maxh : number;
				
		/**
		 * 
		 */
		maxw : number;
				
		/**
		 * 
		 */
		_isVal : boolean;
				
		/**
		 * 
		 */
		itemGapY : number;
				
		/**
		 * 
		 */
		itemGapX : number;
				
		/**
		 * 
		 */
		plus : boolean;
				
		/**
		 * 
		 */
		isLocAdjusted : boolean;
				
		/**
		 * 
		 */
		ePsH : number;
				
		/**
		 * fetch preferred size
		 */
		ePsW : number;
				
		/**
		 * 
		 * @param e 
		 */
		onmousemove(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onmousedown(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onmouseup(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onmouseover(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onmouseout(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		oncontextmenu(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onkeydown(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onkeyup(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onkeypress(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onfocus(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onblur(e : any): void;
				
		/**
		 * 
		 */
		minWidth : number;
				
		/**
		 * Minimal possible width or controlled component
		 * @attribute minWidth
		 * @type {Integer}
		 * @default 12
		 */
		minHeight : number;
				
		/**
		 * 
		 */
		isMoveEnabled : boolean;
				
		/**
		 * 
		 */
		isResizeEnabled : boolean;
				
		/**
		 * 
		 */
		parent : any;
				
		/**
		 * 
		 */
		find : /* zebra.Dummy.find */ any;
				
		/**
		 * 
		 */
		findAll : /* zebra.Dummy.findAll */ any;
				
		/**
		 * 
		 */
		setId : /* zebra.Dummy.setId */ any;
				
		/**
		 * 
		 */
		properties : /* zebra.Dummy.properties */ any;
				
		/**
		 * 
		 */
		property : /* zebra.Dummy.property */ any;
				
		/**
		 * 
		 */
		validateMetric : /* zebra.Dummy.validateMetric */ any;
				
		/**
		 * 
		 */
		invalidateLayout : /* zebra.Dummy.invalidateLayout */ any;
				
		/**
		 * 
		 */
		invalidate : /* zebra.Dummy.invalidate */ any;
				
		/**
		 * 
		 */
		validate : /* zebra.Dummy.validate */ any;
				
		/**
		 * 
		 */
		getPreferredSize : /* zebra.Dummy.getPreferredSize */ any;
				
		/**
		 * 
		 */
		getTop : /* zebra.Dummy.getTop */ any;
				
		/**
		 * 
		 */
		getLeft : /* zebra.Dummy.getLeft */ any;
				
		/**
		 * 
		 */
		getBottom : /* zebra.Dummy.getBottom */ any;
				
		/**
		 * 
		 */
		getRight : /* zebra.Dummy.getRight */ any;
				
		/**
		 * 
		 */
		setParent : /* zebra.Dummy.setParent */ any;
				
		/**
		 * 
		 */
		setLayout : /* zebra.Dummy.setLayout */ any;
				
		/**
		 * 
		 */
		calcPreferredSize : /* zebra.Dummy.calcPreferredSize */ any;
				
		/**
		 * 
		 */
		doLayout : /* zebra.Dummy.doLayout */ any;
				
		/**
		 * 
		 */
		indexOf : /* zebra.Dummy.indexOf */ any;
				
		/**
		 * 
		 */
		insert : /* zebra.Dummy.insert */ any;
				
		/**
		 * 
		 */
		setLocation : /* zebra.Dummy.setLocation */ any;
				
		/**
		 * 
		 */
		setBounds : /* zebra.Dummy.setBounds */ any;
				
		/**
		 * 
		 */
		setSize : /* zebra.Dummy.setSize */ any;
				
		/**
		 * 
		 */
		getByConstraints : /* zebra.Dummy.getByConstraints */ any;
				
		/**
		 * 
		 */
		remove : /* zebra.Dummy.remove */ any;
				
		/**
		 * 
		 */
		removeAt : /* zebra.Dummy.removeAt */ any;
				
		/**
		 * 
		 */
		removeMe : /* zebra.Dummy.removeMe */ any;
				
		/**
		 * 
		 */
		setPreferredSize : /* zebra.Dummy.setPreferredSize */ any;
				
		/**
		 * 
		 */
		setAt : /* zebra.Dummy.setAt */ any;
				
		/**
		 * 
		 */
		add : /* zebra.Dummy.add */ any;
				
		/**
		 * 
		 */
		 : /* zebra.Dummy. */ any;
				
		/**
		 * 
		 */
		setPadding : /* zebra.Dummy.setPadding */ any;
				
		/**
		 * 
		 */
		calcCols : /* zebra.Dummy.calcCols */ any;
				
		/**
		 * 
		 */
		calcRows : /* zebra.Dummy.calcRows */ any;
				
		/**
		 * 
		 */
		calcRow : /* zebra.Dummy.calcRow */ any;
				
		/**
		 * 
		 */
		calcCol : /* zebra.Dummy.calcCol */ any;
				
		/**
		 * 
		 */
		colSizes : /* zebra.Dummy.colSizes */ any;
				
		/**
		 * 
		 */
		rowSizes : /* zebra.Dummy.rowSizes */ any;
				
		/**
		 * 
		 */
		get : /* zebra.Dummy.get */ any;
				
		/**
		 * 
		 */
		mergeObjWithDesc : /* zebra.Dummy.mergeObjWithDesc */ any;
				
		/**
		 * 
		 */
		resolveClass : /* zebra.Dummy.resolveClass */ any;
				
		/**
		 * 
		 */
		inherit : /* zebra.Dummy.inherit */ any;
				
		/**
		 * 
		 */
		load : /* zebra.Dummy.load */ any;
				
		/**
		 * 
		 */
		resolveVar : /* zebra.Dummy.resolveVar */ any;
				
		/**
		 * 
		 */
		expr : /* zebra.Dummy.expr */ any;
				
		/**
		 * 
		 */
		variables : any;
				
		/**
		 * 
		 */
		Metric : /* zebra.Layout */ any;
				
		/**
		 * 
		 */
		setOffset : /* zebra.Dummy.setOffset */ any;
				
		/**
		 * 
		 */
		seek : /* zebra.Dummy.seek */ any;
				
		/**
		 * 
		 */
		setRowCol : /* zebra.Dummy.setRowCol */ any;
				
		/**
		 * 
		 */
		inserted : /* zebra.Dummy.inserted */ any;
				
		/**
		 * 
		 */
		removed : /* zebra.Dummy.removed */ any;
				
		/**
		 * 
		 */
		getPointByOffset : /* zebra.Dummy.getPointByOffset */ any;
				
		/**
		 * 
		 */
		getOffsetByPoint : /* zebra.Dummy.getOffsetByPoint */ any;
				
		/**
		 * 
		 */
		seekLineTo : /* zebra.Dummy.seekLineTo */ any;
				
		/**
		 * 
		 */
		setMetric : /* zebra.Dummy.setMetric */ any;
				
		/**
		 * 
		 */
		metrics : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		append : /* zebra.Dummy.append */ any;
				
		/**
		 * 
		 */
		parse : /* zebra.Dummy.parse */ any;
				
		/**
		 * 
		 */
		toQS : /* zebra.Dummy.toQS */ any;
				
		/**
		 * 
		 */
		header : any;
				
		/**
		 * 
		 */
		encode : /* zebra.Dummy.encode */ any;
				
		/**
		 * 
		 */
		encodeValue : /* zebra.Dummy.encodeValue */ any;
				
		/**
		 * 
		 */
		decodeValue : /* zebra.Dummy.decodeValue */ any;
				
		/**
		 * 
		 */
		decode : /* zebra.Dummy.decode */ any;
				
		/**
		 * 
		 */
		getLnInfo : /* zebra.Dummy.getLnInfo */ any;
				
		/**
		 * 
		 */
		getLine : /* zebra.Dummy.getLine */ any;
				
		/**
		 * 
		 */
		getValue : /* zebra.Dummy.getValue */ any;
				
		/**
		 * 
		 */
		getLines : /* zebra.Dummy.getLines */ any;
				
		/**
		 * 
		 */
		getTextLength : /* zebra.Dummy.getTextLength */ any;
				
		/**
		 * 
		 */
		write : /* zebra.Dummy.write */ any;
				
		/**
		 * 
		 */
		setValue : /* zebra.Dummy.setValue */ any;
				
		/**
		 * 
		 */
		setMaxLength : /* zebra.Dummy.setMaxLength */ any;
				
		/**
		 * 
		 */
		removeAll : /* zebra.Dummy.removeAll */ any;
				
		/**
		 * 
		 */
		count : /* zebra.Dummy.count */ any;
				
		/**
		 * 
		 */
		set : /* zebra.Dummy.set */ any;
				
		/**
		 * 
		 */
		contains : /* zebra.Dummy.contains */ any;
				
		/**
		 * 
		 */
		create : /* zebra.Dummy.create */ any;
				
		/**
		 * 
		 */
		findOne : /* zebra.Dummy.findOne */ any;
				
		/**
		 * 
		 */
		iterate : /* zebra.Dummy.iterate */ any;
				
		/**
		 * 
		 */
		removeKids : /* zebra.Dummy.removeKids */ any;
				
		/**
		 * 
		 */
		put : /* zebra.Dummy.put */ any;
				
		/**
		 * 
		 */
		puti : /* zebra.Dummy.puti */ any;
				
		/**
		 * 
		 */
		setRowsCols : /* zebra.Dummy.setRowsCols */ any;
				
		/**
		 * 
		 */
		setRows : /* zebra.Dummy.setRows */ any;
				
		/**
		 * 
		 */
		setCols : /* zebra.Dummy.setCols */ any;
				
		/**
		 * 
		 */
		removeRows : /* zebra.Dummy.removeRows */ any;
				
		/**
		 * 
		 */
		removeCols : /* zebra.Dummy.removeCols */ any;
				
		/**
		 * 
		 */
		insertRows : /* zebra.Dummy.insertRows */ any;
				
		/**
		 * 
		 */
		insertCols : /* zebra.Dummy.insertCols */ any;
				
		/**
		 * 
		 */
		sortCol : /* zebra.Dummy.sortCol */ any;
				
		/**
		 * 
		 */
		lines : /* zebra.Dummy.lines */ any;
				
		/**
		 * 
		 */
		d : /* zebra.Dummy.d */ any;
				
		/**
		 * 
		 */
		objs : /* zebra.Dummy.objs */ any;
				
		/**
		 * 
		 */
		wheeled : /* zebra.Dummy.wheeled */ any;
				
		/**
		 * 
		 */
		$fixEnd : /* zebra.Dummy.$fixEnd */ any;
				
		/**
		 * 
		 */
		start : /* zebra.Dummy.start */ any;
				
		/**
		 * 
		 */
		end : /* zebra.Dummy.end */ any;
				
		/**
		 * 
		 */
		Q : /* zebra.Dummy.Q */ any;
				
		/**
		 * 
		 */
		touches : /* zebra.Dummy.touches */ any;
				
		/**
		 * 
		 */
		queue : /* zebra.Dummy.queue */ any;
				
		/**
		 * 
		 */
		paint : /* zebra.Dummy.paint */ any;
				
		/**
		 * 
		 */
		setTarget : /* zebra.Dummy.setTarget */ any;
				
		/**
		 * 
		 */
		outline : /* zebra.Dummy.outline */ any;
				
		/**
		 * 
		 */
		targetWasChanged : /* zebra.Dummy.targetWasChanged */ any;
				
		/**
		 * 
		 */
		$recalc : /* zebra.Dummy.$recalc */ any;
				
		/**
		 * 
		 */
		recalc : /* zebra.Dummy.recalc */ any;
				
		/**
		 * 
		 */
		ownerChanged : /* zebra.Dummy.ownerChanged */ any;
				
		/**
		 * 
		 */
		activate : /* zebra.Dummy.activate */ any;
				
		/**
		 * 
		 */
		loadImage : /* zebra.Dummy.loadImage */ any;
				
		/**
		 * 
		 */
		reset : /* zebra.Dummy.reset */ any;
				
		/**
		 * 
		 */
		isControlPressed : /* zebra.Dummy.isControlPressed */ any;
				
		/**
		 * 
		 */
		isShiftPressed : /* zebra.Dummy.isShiftPressed */ any;
				
		/**
		 * 
		 */
		isAltPressed : /* zebra.Dummy.isAltPressed */ any;
				
		/**
		 * 
		 */
		isCmdPressed : /* zebra.Dummy.isCmdPressed */ any;
				
		/**
		 * 
		 */
		isActionMask : /* zebra.Dummy.isActionMask */ any;
				
		/**
		 * 
		 */
		modifiers : /* zebra.Dummy.modifiers */ any;
				
		/**
		 * 
		 */
		getCanvas : /* zebra.Dummy.getCanvas */ any;
				
		/**
		 * 
		 */
		notifyRender : /* zebra.Dummy.notifyRender */ any;
				
		/**
		 * 
		 */
		getComponentAt : /* zebra.Dummy.getComponentAt */ any;
				
		/**
		 * 
		 */
		vrp : /* zebra.Dummy.vrp */ any;
				
		/**
		 * 
		 */
		isInvalidatedByChild : /* zebra.Dummy.isInvalidatedByChild */ any;
				
		/**
		 * 
		 */
		kidAdded : /* zebra.Dummy.kidAdded */ any;
				
		/**
		 * 
		 */
		kidRemoved : /* zebra.Dummy.kidRemoved */ any;
				
		/**
		 * 
		 */
		relocated : /* zebra.Dummy.relocated */ any;
				
		/**
		 * 
		 */
		resized : /* zebra.Dummy.resized */ any;
				
		/**
		 * 
		 */
		hasFocus : /* zebra.Dummy.hasFocus */ any;
				
		/**
		 * 
		 */
		requestFocus : /* zebra.Dummy.requestFocus */ any;
				
		/**
		 * 
		 */
		requestFocusIn : /* zebra.Dummy.requestFocusIn */ any;
				
		/**
		 * 
		 */
		setVisible : /* zebra.Dummy.setVisible */ any;
				
		/**
		 * 
		 */
		setEnabled : /* zebra.Dummy.setEnabled */ any;
				
		/**
		 * 
		 */
		setBorder : /* zebra.Dummy.setBorder */ any;
				
		/**
		 * 
		 */
		setBackground : /* zebra.Dummy.setBackground */ any;
				
		/**
		 * 
		 */
		setKids : /* zebra.Dummy.setKids */ any;
				
		/**
		 * 
		 */
		focused : /* zebra.Dummy.focused */ any;
				
		/**
		 * 
		 */
		repaint : /* zebra.Dummy.repaint */ any;
				
		/**
		 * 
		 */
		toFront : /* zebra.Dummy.toFront */ any;
				
		/**
		 * 
		 */
		toBack : /* zebra.Dummy.toBack */ any;
				
		/**
		 * 
		 */
		toPreferredSize : /* zebra.Dummy.toPreferredSize */ any;
				
		/**
		 * 
		 */
		getFocusRoot : /* zebra.Dummy.getFocusRoot */ any;
				
		/**
		 * 
		 */
		layerMousePressed : /* zebra.Dummy.layerMousePressed */ any;
				
		/**
		 * 
		 */
		layerKeyPressed : /* zebra.Dummy.layerKeyPressed */ any;
				
		/**
		 * 
		 */
		view : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		setView : /* zebra.Dummy.setView */ any;
				
		/**
		 * 
		 */
		paintComponent : /* zebra.Dummy.paintComponent */ any;
				
		/**
		 * 
		 */
		focusOwner : any;
				
		/**
		 * 
		 */
		compEnabled : /* zebra.Dummy.compEnabled */ any;
				
		/**
		 * 
		 */
		compShown : /* zebra.Dummy.compShown */ any;
				
		/**
		 * 
		 */
		compRemoved : /* zebra.Dummy.compRemoved */ any;
				
		/**
		 * 
		 */
		canvasFocusLost : /* zebra.Dummy.canvasFocusLost */ any;
				
		/**
		 * 
		 */
		canvasFocusGained : /* zebra.Dummy.canvasFocusGained */ any;
				
		/**
		 * 
		 */
		keyPressed : /* zebra.Dummy.keyPressed */ any;
				
		/**
		 * 
		 */
		findFocusable : /* zebra.Dummy.findFocusable */ any;
				
		/**
		 * 
		 */
		isFocusable : /* zebra.Dummy.isFocusable */ any;
				
		/**
		 * 
		 */
		fd : /* zebra.Dummy.fd */ any;
				
		/**
		 * 
		 */
		ff : /* zebra.Dummy.ff */ any;
				
		/**
		 * 
		 */
		mousePressed : /* zebra.Dummy.mousePressed */ any;
				
		/**
		 * 
		 */
		parseKey : /* zebra.Dummy.parseKey */ any;
				
		/**
		 * 
		 */
		setCommands : /* zebra.Dummy.setCommands */ any;
				
		/**
		 * 
		 */
		keyCommands : any;
				
		/**
		 * 
		 */
		mouseMoved : /* zebra.Dummy.mouseMoved */ any;
				
		/**
		 * 
		 */
		mouseEntered : /* zebra.Dummy.mouseEntered */ any;
				
		/**
		 * 
		 */
		mouseExited : /* zebra.Dummy.mouseExited */ any;
				
		/**
		 * 
		 */
		mouseDragged : /* zebra.Dummy.mouseDragged */ any;
				
		/**
		 * 
		 */
		$hasMethod : /* zebra.Dummy.$hasMethod */ any;
				
		/**
		 * 
		 */
		fireCompEvent : /* zebra.Dummy.fireCompEvent */ any;
				
		/**
		 * 
		 */
		getEventDestination : /* zebra.Dummy.getEventDestination */ any;
				
		/**
		 * 
		 */
		fireInputEvent : /* zebra.Dummy.fireInputEvent */ any;
				
		/**
		 * 
		 */
		addListener : /* zebra.Dummy.addListener */ any;
				
		/**
		 * 
		 */
		removeListener : /* zebra.Dummy.removeListener */ any;
				
		/**
		 * 
		 */
		addComponentListener : /* zebra.Dummy.addComponentListener */ any;
				
		/**
		 * 
		 */
		removeComponentListener : /* zebra.Dummy.removeComponentListener */ any;
				
		/**
		 * 
		 */
		addMouseListener : /* zebra.Dummy.addMouseListener */ any;
				
		/**
		 * 
		 */
		removeMouseListener : /* zebra.Dummy.removeMouseListener */ any;
				
		/**
		 * 
		 */
		addFocusListener : /* zebra.Dummy.addFocusListener */ any;
				
		/**
		 * 
		 */
		removeFocusListener : /* zebra.Dummy.removeFocusListener */ any;
				
		/**
		 * 
		 */
		addKeyListener : /* zebra.Dummy.addKeyListener */ any;
				
		/**
		 * 
		 */
		removeKeyListener : /* zebra.Dummy.removeKeyListener */ any;
				
		/**
		 * 
		 */
		a_ : /* zebra.Dummy.a_ */ any;
				
		/**
		 * 
		 */
		r_ : /* zebra.Dummy.r_ */ any;
				
		/**
		 * 
		 */
		m_l : /* zebra.Dummy.m_l */ any;
				
		/**
		 * 
		 */
		k_l : /* zebra.Dummy.k_l */ any;
				
		/**
		 * 
		 */
		f_l : /* zebra.Dummy.f_l */ any;
				
		/**
		 * 
		 */
		c_l : /* zebra.Dummy.c_l */ any;
				
		/**
		 * 
		 */
		$keyTyped : /* zebra.Dummy.$keyTyped */ any;
				
		/**
		 * 
		 */
		$keyPressed : /* zebra.Dummy.$keyPressed */ any;
				
		/**
		 * 
		 */
		$keyReleased : /* zebra.Dummy.$keyReleased */ any;
				
		/**
		 * 
		 */
		$mouseEntered : /* zebra.Dummy.$mouseEntered */ any;
				
		/**
		 * 
		 */
		$mouseExited : /* zebra.Dummy.$mouseExited */ any;
				
		/**
		 * 
		 */
		$mouseMoved : /* zebra.Dummy.$mouseMoved */ any;
				
		/**
		 * 
		 */
		$mouseReleased : /* zebra.Dummy.$mouseReleased */ any;
				
		/**
		 * 
		 */
		$mousePressed : /* zebra.Dummy.$mousePressed */ any;
				
		/**
		 * 
		 */
		recalcOffset : /* zebra.Dummy.recalcOffset */ any;
				
		/**
		 * 
		 */
		getLayer : /* zebra.Dummy.getLayer */ any;
				
		/**
		 * 
		 */
		setStyles : /* zebra.Dummy.setStyles */ any;
				
		/**
		 * 
		 */
		setAttribute : /* zebra.Dummy.setAttribute */ any;
				
		/**
		 * 
		 */
		setFeatures : /* zebra.Dummy.setFeatures */ any;
				
		/**
		 * 
		 */
		$nativeListeners : /* zebra.Dummy.$nativeListeners */ any;
				
		/**
		 * 
		 */
		$da : /* zebra.Dummy.$da */ any;
				
		/**
		 * 
		 */
		colors : /* zebra.Dummy.colors */ any;
				
		/**
		 * 
		 */
		views : /* zebra.Dummy.views */ any;
				
		/**
		 * 
		 */
		source : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$px : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		border : zebra.Dummy;
				
		/**
		 * 
		 */
		lineColors : /* zebra.Dummy.lineColors */ any;
				
		/**
		 * 
		 */
		setLineColors : /* zebra.Dummy.setLineColors */ any;
				
		/**
		 * 
		 */
		owner : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		getLineHeight : /* zebra.Dummy.getLineHeight */ any;
				
		/**
		 * 
		 */
		setFont : /* zebra.Dummy.setFont */ any;
				
		/**
		 * 
		 */
		setColor : /* zebra.Dummy.setColor */ any;
				
		/**
		 * 
		 */
		getLineIndent : /* zebra.Dummy.getLineIndent */ any;
				
		/**
		 * 
		 */
		getLineSize : /* zebra.Dummy.getLineSize */ any;
				
		/**
		 * 
		 */
		getMaxOffset : /* zebra.Dummy.getMaxOffset */ any;
				
		/**
		 * 
		 */
		paintLine : /* zebra.Dummy.paintLine */ any;
				
		/**
		 * 
		 */
		textUpdated : /* zebra.Dummy.textUpdated */ any;
				
		/**
		 * 
		 */
		paintSelection : /* zebra.Dummy.paintSelection */ any;
				
		/**
		 * 
		 */
		setModel : /* zebra.Dummy.setModel */ any;
				
		/**
		 * 
		 */
		getModel : /* zebra.Dummy.getModel */ any;
				
		/**
		 * 
		 */
		getColor : /* zebra.Dummy.getColor */ any;
				
		/**
		 * 
		 */
		getFont : /* zebra.Dummy.getFont */ any;
				
		/**
		 * 
		 */
		setState : /* zebra.Dummy.setState */ any;
				
		/**
		 * 
		 */
		stateUpdated : /* zebra.Dummy.stateUpdated */ any;
				
		/**
		 * 
		 */
		syncState : /* zebra.Dummy.syncState */ any;
				
		/**
		 * 
		 */
		toViewId : /* zebra.Dummy.toViewId */ any;
				
		/**
		 * 
		 */
		_keyPressed : /* zebra.Dummy._keyPressed */ any;
				
		/**
		 * 
		 */
		_keyReleased : /* zebra.Dummy._keyReleased */ any;
				
		/**
		 * 
		 */
		_mouseEntered : /* zebra.Dummy._mouseEntered */ any;
				
		/**
		 * 
		 */
		_mousePressed : /* zebra.Dummy._mousePressed */ any;
				
		/**
		 * 
		 */
		_mouseReleased : /* zebra.Dummy._mouseReleased */ any;
				
		/**
		 * 
		 */
		childInputEvent : /* zebra.Dummy.childInputEvent */ any;
				
		/**
		 * 
		 */
		keyReleased : /* zebra.Dummy.keyReleased */ any;
				
		/**
		 * 
		 */
		mouseReleased : /* zebra.Dummy.mouseReleased */ any;
				
		/**
		 * 
		 */
		focusComponent : any;
				
		/**
		 * 
		 */
		paintOnTop : /* zebra.Dummy.paintOnTop */ any;
				
		/**
		 * 
		 */
		setFocusMarkerView : /* zebra.Dummy.setFocusMarkerView */ any;
				
		/**
		 * 
		 */
		setCanHaveFocus : /* zebra.Dummy.setCanHaveFocus */ any;
				
		/**
		 * 
		 */
		setFocusAnchorComponent : /* zebra.Dummy.setFocusAnchorComponent */ any;
				
		/**
		 * 
		 */
		Label : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		fire : /* zebra.Dummy.fire */ any;
				
		/**
		 * 
		 */
		run : /* zebra.Dummy.run */ any;
				
		/**
		 * 
		 */
		setFireParams : /* zebra.Dummy.setFireParams */ any;
				
		/**
		 * 
		 */
		getTitleInfo : /* zebra.Dummy.getTitleInfo */ any;
				
		/**
		 * 
		 */
		setGaps : /* zebra.Dummy.setGaps */ any;
				
		/**
		 * 
		 */
		updated : /* zebra.Dummy.updated */ any;
				
		/**
		 * 
		 */
		install : /* zebra.Dummy.install */ any;
				
		/**
		 * 
		 */
		uninstall : /* zebra.Dummy.uninstall */ any;
				
		/**
		 * 
		 */
		clearSelected : /* zebra.Dummy.clearSelected */ any;
				
		/**
		 * 
		 */
		parentStateUpdated : /* zebra.Dummy.parentStateUpdated */ any;
				
		/**
		 * 
		 */
		Box : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		switched : /* zebra.Dummy.switched */ any;
				
		/**
		 * 
		 */
		mouseDragStarted : /* zebra.Dummy.mouseDragStarted */ any;
				
		/**
		 * 
		 */
		mouseDragEnded : /* zebra.Dummy.mouseDragEnded */ any;
				
		/**
		 * 
		 */
		getCursorType : /* zebra.Dummy.getCursorType */ any;
				
		/**
		 * 
		 */
		Bar : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		normalizeBarLoc : /* zebra.Dummy.normalizeBarLoc */ any;
				
		/**
		 * 
		 */
		setOrientation : /* zebra.Dummy.setOrientation */ any;
				
		/**
		 * 
		 */
		setGripperLoc : /* zebra.Dummy.setGripperLoc */ any;
				
		/**
		 * 
		 */
		setGap : /* zebra.Dummy.setGap */ any;
				
		/**
		 * 
		 */
		setLeftMinSize : /* zebra.Dummy.setLeftMinSize */ any;
				
		/**
		 * 
		 */
		setRightMinSize : /* zebra.Dummy.setRightMinSize */ any;
				
		/**
		 * 
		 */
		setGripperMovable : /* zebra.Dummy.setGripperMovable */ any;
				
		/**
		 * 
		 */
		bundleView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		toggle : /* zebra.Dummy.toggle */ any;
				
		/**
		 * 
		 */
		TitlePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		TogglePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		contentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		getSX : /* zebra.Dummy.getSX */ any;
				
		/**
		 * 
		 */
		getSY : /* zebra.Dummy.getSY */ any;
				
		/**
		 * 
		 */
		scrollXTo : /* zebra.Dummy.scrollXTo */ any;
				
		/**
		 * 
		 */
		scrollYTo : /* zebra.Dummy.scrollYTo */ any;
				
		/**
		 * 
		 */
		scrollTo : /* zebra.Dummy.scrollTo */ any;
				
		/**
		 * 
		 */
		makeVisible : /* zebra.Dummy.makeVisible */ any;
				
		/**
		 * 
		 */
		VIncButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		VDecButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HIncButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HDecButton : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		VBundle : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		HBundle : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		isInBundle : /* zebra.Dummy.isInBundle */ any;
				
		/**
		 * 
		 */
		amount : /* zebra.Dummy.amount */ any;
				
		/**
		 * 
		 */
		pixel2value : /* zebra.Dummy.pixel2value */ any;
				
		/**
		 * 
		 */
		value2pixel : /* zebra.Dummy.value2pixel */ any;
				
		/**
		 * 
		 */
		posChanged : /* zebra.Dummy.posChanged */ any;
				
		/**
		 * 
		 */
		fired : /* zebra.Dummy.fired */ any;
				
		/**
		 * 
		 */
		mouseClicked : /* zebra.Dummy.mouseClicked */ any;
				
		/**
		 * 
		 */
		setMaximum : /* zebra.Dummy.setMaximum */ any;
				
		/**
		 * 
		 */
		setPosition : /* zebra.Dummy.setPosition */ any;
				
		/**
		 * 
		 */
		setExtraSize : /* zebra.Dummy.setExtraSize */ any;
				
		/**
		 * 
		 */
		position : any;
				
		/**
		 * 
		 */
		scrollStateUpdated : /* zebra.Dummy.scrollStateUpdated */ any;
				
		/**
		 * 
		 */
		scrollManager : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		ContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setAutoHide : /* zebra.Dummy.setAutoHide */ any;
				
		/**
		 * 
		 */
		doScroll : /* zebra.Dummy.doScroll */ any;
				
		/**
		 * 
		 */
		scrolled : /* zebra.Dummy.scrolled */ any;
				
		/**
		 * 
		 */
		setIncrements : /* zebra.Dummy.setIncrements */ any;
				
		/**
		 * 
		 */
		TabPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		next : /* zebra.Dummy.next */ any;
				
		/**
		 * 
		 */
		isTabEnabled : /* zebra.Dummy.isTabEnabled */ any;
				
		/**
		 * 
		 */
		drawMarker : /* zebra.Dummy.drawMarker */ any;
				
		/**
		 * 
		 */
		paintTab : /* zebra.Dummy.paintTab */ any;
				
		/**
		 * 
		 */
		getTabBounds : /* zebra.Dummy.getTabBounds */ any;
				
		/**
		 * 
		 */
		getTabAt : /* zebra.Dummy.getTabAt */ any;
				
		/**
		 * 
		 */
		select : /* zebra.Dummy.select */ any;
				
		/**
		 * 
		 */
		getTab : /* zebra.Dummy.getTab */ any;
				
		/**
		 * 
		 */
		setSideSpace : /* zebra.Dummy.setSideSpace */ any;
				
		/**
		 * 
		 */
		setPageGaps : /* zebra.Dummy.setPageGaps */ any;
				
		/**
		 * 
		 */
		setAlignment : /* zebra.Dummy.setAlignment */ any;
				
		/**
		 * 
		 */
		enableTab : /* zebra.Dummy.enableTab */ any;
				
		/**
		 * 
		 */
		pages : /* zebra.Dummy.pages */ any;
				
		/**
		 * 
		 */
		paintNums : /* zebra.Dummy.paintNums */ any;
				
		/**
		 * 
		 */
		getScaleSize : /* zebra.Dummy.getScaleSize */ any;
				
		/**
		 * 
		 */
		findNearest : /* zebra.Dummy.findNearest */ any;
				
		/**
		 * 
		 */
		value2loc : /* zebra.Dummy.value2loc */ any;
				
		/**
		 * 
		 */
		loc2value : /* zebra.Dummy.loc2value */ any;
				
		/**
		 * 
		 */
		nextValue : /* zebra.Dummy.nextValue */ any;
				
		/**
		 * 
		 */
		getBundleLoc : /* zebra.Dummy.getBundleLoc */ any;
				
		/**
		 * 
		 */
		getBundleBounds : /* zebra.Dummy.getBundleBounds */ any;
				
		/**
		 * 
		 */
		getNeighborPoint : /* zebra.Dummy.getNeighborPoint */ any;
				
		/**
		 * 
		 */
		getPointValue : /* zebra.Dummy.getPointValue */ any;
				
		/**
		 * 
		 */
		getView : /* zebra.Dummy.getView */ any;
				
		/**
		 * 
		 */
		render : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		Line : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Checkbox : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		isDecorative : /* zebra.Dummy.isDecorative */ any;
				
		/**
		 * 
		 */
		pause : /* zebra.Dummy.pause */ any;
				
		/**
		 * 
		 */
		play : /* zebra.Dummy.play */ any;
				
		/**
		 * 
		 */
		HintRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		curView : any;
				
		/**
		 * 
		 */
		setBlinking : /* zebra.Dummy.setBlinking */ any;
				
		/**
		 * 
		 */
		setTextAlign : /* zebra.Dummy.setTextAlign */ any;
				
		/**
		 * 
		 */
		getTextRowColAt : /* zebra.Dummy.getTextRowColAt */ any;
				
		/**
		 * 
		 */
		findNextWord : /* zebra.Dummy.findNextWord */ any;
				
		/**
		 * 
		 */
		getSubString : /* zebra.Dummy.getSubString */ any;
				
		/**
		 * 
		 */
		removeSelected : /* zebra.Dummy.removeSelected */ any;
				
		/**
		 * 
		 */
		startSelection : /* zebra.Dummy.startSelection */ any;
				
		/**
		 * 
		 */
		keyTyped : /* zebra.Dummy.keyTyped */ any;
				
		/**
		 * 
		 */
		selectAll_command : /* zebra.Dummy.selectAll_command */ any;
				
		/**
		 * 
		 */
		nextWord_command : /* zebra.Dummy.nextWord_command */ any;
				
		/**
		 * 
		 */
		nextPage_command : /* zebra.Dummy.nextPage_command */ any;
				
		/**
		 * 
		 */
		isFiltered : /* zebra.Dummy.isFiltered */ any;
				
		/**
		 * 
		 */
		catchScrolled : /* zebra.Dummy.catchScrolled */ any;
				
		/**
		 * 
		 */
		drawCursor : /* zebra.Dummy.drawCursor */ any;
				
		/**
		 * 
		 */
		hasSelection : /* zebra.Dummy.hasSelection */ any;
				
		/**
		 * 
		 */
		setHint : /* zebra.Dummy.setHint */ any;
				
		/**
		 * 
		 */
		undo_command : /* zebra.Dummy.undo_command */ any;
				
		/**
		 * 
		 */
		redo_command : /* zebra.Dummy.redo_command */ any;
				
		/**
		 * 
		 */
		getStartSelection : /* zebra.Dummy.getStartSelection */ any;
				
		/**
		 * 
		 */
		getEndSelection : /* zebra.Dummy.getEndSelection */ any;
				
		/**
		 * 
		 */
		getSelectedText : /* zebra.Dummy.getSelectedText */ any;
				
		/**
		 * 
		 */
		focusGained : /* zebra.Dummy.focusGained */ any;
				
		/**
		 * 
		 */
		focusLost : /* zebra.Dummy.focusLost */ any;
				
		/**
		 * 
		 */
		repaintCursor : /* zebra.Dummy.repaintCursor */ any;
				
		/**
		 * 
		 */
		clearSelection : /* zebra.Dummy.clearSelection */ any;
				
		/**
		 * 
		 */
		pageSize : /* zebra.Dummy.pageSize */ any;
				
		/**
		 * 
		 */
		clipPaste : /* zebra.Dummy.clipPaste */ any;
				
		/**
		 * 
		 */
		clipCopy : /* zebra.Dummy.clipCopy */ any;
				
		/**
		 * 
		 */
		cut : /* zebra.Dummy.cut */ any;
				
		/**
		 * 
		 */
		setCursorView : /* zebra.Dummy.setCursorView */ any;
				
		/**
		 * 
		 */
		setPSByRowsCols : /* zebra.Dummy.setPSByRowsCols */ any;
				
		/**
		 * 
		 */
		setEditable : /* zebra.Dummy.setEditable */ any;
				
		/**
		 * 
		 */
		setSelectionColor : /* zebra.Dummy.setSelectionColor */ any;
				
		/**
		 * 
		 */
		history : /* zebra.Dummy.history */ any;
				
		/**
		 * 
		 */
		isItemSelectable : /* zebra.Dummy.isItemSelectable */ any;
				
		/**
		 * 
		 */
		getSelected : /* zebra.Dummy.getSelected */ any;
				
		/**
		 * 
		 */
		lookupItem : /* zebra.Dummy.lookupItem */ any;
				
		/**
		 * 
		 */
		isSelected : /* zebra.Dummy.isSelected */ any;
				
		/**
		 * 
		 */
		pointerMoved : /* zebra.Dummy.pointerMoved */ any;
				
		/**
		 * 
		 */
		getItemLocation : /* zebra.Dummy.getItemLocation */ any;
				
		/**
		 * 
		 */
		getItemSize : /* zebra.Dummy.getItemSize */ any;
				
		/**
		 * 
		 */
		getItemIdxAt : /* zebra.Dummy.getItemIdxAt */ any;
				
		/**
		 * 
		 */
		calcMaxItemSize : /* zebra.Dummy.calcMaxItemSize */ any;
				
		/**
		 * 
		 */
		repaintByOffsets : /* zebra.Dummy.repaintByOffsets */ any;
				
		/**
		 * 
		 */
		drawViewAt : /* zebra.Dummy.drawViewAt */ any;
				
		/**
		 * 
		 */
		drawView : /* zebra.Dummy.drawView */ any;
				
		/**
		 * 
		 */
		update : /* zebra.Dummy.update */ any;
				
		/**
		 * 
		 */
		fireSelected : /* zebra.Dummy.fireSelected */ any;
				
		/**
		 * 
		 */
		$select : /* zebra.Dummy.$select */ any;
				
		/**
		 * 
		 */
		elementInserted : /* zebra.Dummy.elementInserted */ any;
				
		/**
		 * 
		 */
		elementRemoved : /* zebra.Dummy.elementRemoved */ any;
				
		/**
		 * 
		 */
		elementSet : /* zebra.Dummy.elementSet */ any;
				
		/**
		 * 
		 */
		findSelectable : /* zebra.Dummy.findSelectable */ any;
				
		/**
		 * 
		 */
		setViewProvider : /* zebra.Dummy.setViewProvider */ any;
				
		/**
		 * 
		 */
		notifyScrollMan : /* zebra.Dummy.notifyScrollMan */ any;
				
		/**
		 * 
		 */
		ViewProvider : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setItemGap : /* zebra.Dummy.setItemGap */ any;
				
		/**
		 * 
		 */
		vVisibility : /* zebra.Dummy.vVisibility */ any;
				
		/**
		 * 
		 */
		vArea : /* zebra.Dummy.vArea */ any;
				
		/**
		 * 
		 */
		widths : /* zebra.Dummy.widths */ any;
				
		/**
		 * 
		 */
		heights : /* zebra.Dummy.heights */ any;
				
		/**
		 * 
		 */
		src : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ImageLabel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		CompListModel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		comboValueUpdated : /* zebra.Dummy.comboValueUpdated */ any;
				
		/**
		 * 
		 */
		getCombo : /* zebra.Dummy.getCombo */ any;
				
		/**
		 * 
		 */
		TextField : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ComboPadPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		ReadonlyContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		EditableContentPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Button : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		List : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		contentUpdated : /* zebra.Dummy.contentUpdated */ any;
				
		/**
		 * 
		 */
		setSelectedIndex : /* zebra.Dummy.setSelectedIndex */ any;
				
		/**
		 * 
		 */
		isPadShown : /* zebra.Dummy.isPadShown */ any;
				
		/**
		 * 
		 */
		hidePad : /* zebra.Dummy.hidePad */ any;
				
		/**
		 * 
		 */
		showPad : /* zebra.Dummy.showPad */ any;
				
		/**
		 * 
		 */
		setList : /* zebra.Dummy.setList */ any;
				
		/**
		 * 
		 */
		setSelectionView : /* zebra.Dummy.setSelectionView */ any;
				
		/**
		 * 
		 */
		setMaxPadHeight : /* zebra.Dummy.setMaxPadHeight */ any;
				
		/**
		 * 
		 */
		model : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		text : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		list : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		selectionView : any;
				
		/**
		 * 
		 */
		isLayerActiveAt : /* zebra.Dummy.isLayerActiveAt */ any;
				
		/**
		 * 
		 */
		getWinType : /* zebra.Dummy.getWinType */ any;
				
		/**
		 * 
		 */
		addWin : /* zebra.Dummy.addWin */ any;
				
		/**
		 * 
		 */
		winsStack : /* zebra.Dummy.winsStack */ any;
				
		/**
		 * 
		 */
		winsListeners : any;
				
		/**
		 * 
		 */
		winsTypes : /* zebra.Dummy.winsTypes */ any;
				
		/**
		 * 
		 */
		isActive : /* zebra.Dummy.isActive */ any;
				
		/**
		 * 
		 */
		insideCorner : /* zebra.Dummy.insideCorner */ any;
				
		/**
		 * 
		 */
		winOpened : /* zebra.Dummy.winOpened */ any;
				
		/**
		 * 
		 */
		winActivated : /* zebra.Dummy.winActivated */ any;
				
		/**
		 * 
		 */
		isMaximized : /* zebra.Dummy.isMaximized */ any;
				
		/**
		 * 
		 */
		createCaptionPan : /* zebra.Dummy.createCaptionPan */ any;
				
		/**
		 * 
		 */
		createContentPan : /* zebra.Dummy.createContentPan */ any;
				
		/**
		 * 
		 */
		createTitle : /* zebra.Dummy.createTitle */ any;
				
		/**
		 * 
		 */
		setIcon : /* zebra.Dummy.setIcon */ any;
				
		/**
		 * 
		 */
		CaptionPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		TitleLab : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		StatusPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		SizerIcon : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Icon : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		icons : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		buttons : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		SubImage : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		CheckStatePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		itemSelected : /* zebra.Dummy.itemSelected */ any;
				
		/**
		 * 
		 */
		setCaption : /* zebra.Dummy.setCaption */ any;
				
		/**
		 * 
		 */
		getCheck : /* zebra.Dummy.getCheck */ any;
				
		/**
		 * 
		 */
		getContent : /* zebra.Dummy.getContent */ any;
				
		/**
		 * 
		 */
		getSub : /* zebra.Dummy.getSub */ any;
				
		/**
		 * 
		 */
		hideSub : /* zebra.Dummy.hideSub */ any;
				
		/**
		 * 
		 */
		activateSub : /* zebra.Dummy.activateSub */ any;
				
		/**
		 * 
		 */
		setCheckState : /* zebra.Dummy.setCheckState */ any;
				
		/**
		 * 
		 */
		getCheckState : /* zebra.Dummy.getCheckState */ any;
				
		/**
		 * 
		 */
		setCheckManager : /* zebra.Dummy.setCheckManager */ any;
				
		/**
		 * 
		 */
		MenuItem : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		childCompEvent : /* zebra.Dummy.childCompEvent */ any;
				
		/**
		 * 
		 */
		getMenuItem : /* zebra.Dummy.getMenuItem */ any;
				
		/**
		 * 
		 */
		hasSelectableItems : /* zebra.Dummy.hasSelectableItems */ any;
				
		/**
		 * 
		 */
		getMenuAt : /* zebra.Dummy.getMenuAt */ any;
				
		/**
		 * 
		 */
		setMenuAt : /* zebra.Dummy.setMenuAt */ any;
				
		/**
		 * 
		 */
		indexMenuOf : /* zebra.Dummy.indexMenuOf */ any;
				
		/**
		 * 
		 */
		$canceled : /* zebra.Dummy.$canceled */ any;
				
		/**
		 * 
		 */
		$topMenu : /* zebra.Dummy.$topMenu */ any;
				
		/**
		 * 
		 */
		$hideMenu : /* zebra.Dummy.$hideMenu */ any;
				
		/**
		 * 
		 */
		$childMenu : /* zebra.Dummy.$childMenu */ any;
				
		/**
		 * 
		 */
		$showSubMenu : /* zebra.Dummy.$showSubMenu */ any;
				
		/**
		 * 
		 */
		triggerSelectionByPos : /* zebra.Dummy.triggerSelectionByPos */ any;
				
		/**
		 * 
		 */
		menus : any;
				
		/**
		 * 
		 */
		decoratives : /* zebra.Dummy.decoratives */ any;
				
		/**
		 * 
		 */
		setMenubar : /* zebra.Dummy.setMenubar */ any;
				
		/**
		 * 
		 */
		TooltipBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$contentPs : /* zebra.Dummy.$contentPs */ any;
				
		/**
		 * 
		 */
		hideTooltip : /* zebra.Dummy.hideTooltip */ any;
				
		/**
		 * 
		 */
		toString : /* zebra.Dummy.toString */ any;
				
		/**
		 * 
		 */
		items : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Combo : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Items : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		fetchEditedValue : /* zebra.Dummy.fetchEditedValue */ any;
				
		/**
		 * 
		 */
		getEditor : /* zebra.Dummy.getEditor */ any;
				
		/**
		 * 
		 */
		shouldStart : /* zebra.Dummy.shouldStart */ any;
				
		/**
		 * 
		 */
		shouldCancel : /* zebra.Dummy.shouldCancel */ any;
				
		/**
		 * 
		 */
		shouldFinish : /* zebra.Dummy.shouldFinish */ any;
				
		/**
		 * 
		 */
		getCaptionPS : /* zebra.Dummy.getCaptionPS */ any;
				
		/**
		 * 
		 */
		captionResized : /* zebra.Dummy.captionResized */ any;
				
		/**
		 * 
		 */
		calcRowColAt : /* zebra.Dummy.calcRowColAt */ any;
				
		/**
		 * 
		 */
		getCaptionAt : /* zebra.Dummy.getCaptionAt */ any;
				
		/**
		 * 
		 */
		getTitleView : /* zebra.Dummy.getTitleView */ any;
				
		/**
		 * 
		 */
		getTitle : /* zebra.Dummy.getTitle */ any;
				
		/**
		 * 
		 */
		putTitle : /* zebra.Dummy.putTitle */ any;
				
		/**
		 * 
		 */
		setTitleAlignments : /* zebra.Dummy.setTitleAlignments */ any;
				
		/**
		 * 
		 */
		setTitleBackground : /* zebra.Dummy.setTitleBackground */ any;
				
		/**
		 * 
		 */
		titles : /* zebra.Dummy.titles */ any;
				
		/**
		 * 
		 */
		iconPan : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		statusPan : /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		Layout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		Link : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setSortable : /* zebra.Dummy.setSortable */ any;
				
		/**
		 * 
		 */
		matrixSorted : /* zebra.Dummy.matrixSorted */ any;
				
		/**
		 * 
		 */
		matrixResized : /* zebra.Dummy.matrixResized */ any;
				
		/**
		 * 
		 */
		CornerPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$topY : /* zebra.Dummy.$topY */ any;
				
		/**
		 * 
		 */
		$leftX : /* zebra.Dummy.$leftX */ any;
				
		/**
		 * 
		 */
		colVisibility : /* zebra.Dummy.colVisibility */ any;
				
		/**
		 * 
		 */
		rowVisibility : /* zebra.Dummy.rowVisibility */ any;
				
		/**
		 * 
		 */
		$se : /* zebra.Dummy.$se */ any;
				
		/**
		 * 
		 */
		getXOrigin : /* zebra.Dummy.getXOrigin */ any;
				
		/**
		 * 
		 */
		getYOrigin : /* zebra.Dummy.getYOrigin */ any;
				
		/**
		 * 
		 */
		getColPSWidth : /* zebra.Dummy.getColPSWidth */ any;
				
		/**
		 * 
		 */
		getRowPSHeight : /* zebra.Dummy.getRowPSHeight */ any;
				
		/**
		 * 
		 */
		getGridRows : /* zebra.Dummy.getGridRows */ any;
				
		/**
		 * 
		 */
		getGridCols : /* zebra.Dummy.getGridCols */ any;
				
		/**
		 * 
		 */
		getRowHeight : /* zebra.Dummy.getRowHeight */ any;
				
		/**
		 * 
		 */
		getColWidth : /* zebra.Dummy.getColWidth */ any;
				
		/**
		 * 
		 */
		getCellsVisibility : /* zebra.Dummy.getCellsVisibility */ any;
				
		/**
		 * 
		 */
		getColX : /* zebra.Dummy.getColX */ any;
				
		/**
		 * 
		 */
		getRowY : /* zebra.Dummy.getRowY */ any;
				
		/**
		 * 
		 */
		iColVisibility : /* zebra.Dummy.iColVisibility */ any;
				
		/**
		 * 
		 */
		iRowVisibility : /* zebra.Dummy.iRowVisibility */ any;
				
		/**
		 * 
		 */
		getTopCaptionHeight : /* zebra.Dummy.getTopCaptionHeight */ any;
				
		/**
		 * 
		 */
		getLeftCaptionWidth : /* zebra.Dummy.getLeftCaptionWidth */ any;
				
		/**
		 * 
		 */
		stopEditing : /* zebra.Dummy.stopEditing */ any;
				
		/**
		 * 
		 */
		setDrawLines : /* zebra.Dummy.setDrawLines */ any;
				
		/**
		 * 
		 */
		setPosMarkerMode : /* zebra.Dummy.setPosMarkerMode */ any;
				
		/**
		 * 
		 */
		repaintRows : /* zebra.Dummy.repaintRows */ any;
				
		/**
		 * 
		 */
		cellByLocation : /* zebra.Dummy.cellByLocation */ any;
				
		/**
		 * 
		 */
		clearSelect : /* zebra.Dummy.clearSelect */ any;
				
		/**
		 * 
		 */
		laidout : /* zebra.Dummy.laidout */ any;
				
		/**
		 * 
		 */
		paintNet : /* zebra.Dummy.paintNet */ any;
				
		/**
		 * 
		 */
		paintData : /* zebra.Dummy.paintData */ any;
				
		/**
		 * 
		 */
		paintPosMarker : /* zebra.Dummy.paintPosMarker */ any;
				
		/**
		 * 
		 */
		rPsMetric : /* zebra.Dummy.rPsMetric */ any;
				
		/**
		 * 
		 */
		getPSSize : /* zebra.Dummy.getPSSize */ any;
				
		/**
		 * 
		 */
		rCustomMetric : /* zebra.Dummy.rCustomMetric */ any;
				
		/**
		 * 
		 */
		setRowHeight : /* zebra.Dummy.setRowHeight */ any;
				
		/**
		 * 
		 */
		setRowsHeight : /* zebra.Dummy.setRowsHeight */ any;
				
		/**
		 * 
		 */
		setColWidth : /* zebra.Dummy.setColWidth */ any;
				
		/**
		 * 
		 */
		setColsWidth : /* zebra.Dummy.setColsWidth */ any;
				
		/**
		 * 
		 */
		cellModified : /* zebra.Dummy.cellModified */ any;
				
		/**
		 * 
		 */
		setEditorProvider : /* zebra.Dummy.setEditorProvider */ any;
				
		/**
		 * 
		 */
		setUsePsMetric : /* zebra.Dummy.setUsePsMetric */ any;
				
		/**
		 * 
		 */
		setCellPadding : /* zebra.Dummy.setCellPadding */ any;
				
		/**
		 * 
		 */
		setCellPaddings : /* zebra.Dummy.setCellPaddings */ any;
				
		/**
		 * 
		 */
		setLineColor : /* zebra.Dummy.setLineColor */ any;
				
		/**
		 * 
		 */
		setLineSize : /* zebra.Dummy.setLineSize */ any;
				
		/**
		 * 
		 */
		startEditing : /* zebra.Dummy.startEditing */ any;
				
		/**
		 * 
		 */
		getDataToEdit : /* zebra.Dummy.getDataToEdit */ any;
				
		/**
		 * 
		 */
		setEditedData : /* zebra.Dummy.setEditedData */ any;
				
		/**
		 * 
		 */
		colWidths : /* zebra.Dummy.colWidths */ any;
				
		/**
		 * 
		 */
		editors : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		rowHeights : /* zebra.Dummy.rowHeights */ any;
				
		/**
		 * 
		 */
		visibility : /* zebra.Dummy.visibility */ any;
				
		/**
		 * 
		 */
		getMinWidth : /* zebra.Dummy.getMinWidth */ any;
				
		/**
		 * 
		 */
		calcColWidths : /* zebra.Dummy.calcColWidths */ any;
				
		/**
		 * 
		 */
		recalcPS : /* zebra.Dummy.recalcPS */ any;
				
		/**
		 * 
		 */
		grid : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		$widths : /* zebra.Dummy.$widths */ any;
				
		/**
		 * 
		 */
		$strPs : /* zebra.Dummy.$strPs */ any;
				
		/**
		 * 
		 */
		$props : /* zebra.Dummy.$props */ any;
				
		/**
		 * 
		 */
		isOpen : /* zebra.Dummy.isOpen */ any;
				
		/**
		 * 
		 */
		getItemMetrics : /* zebra.Dummy.getItemMetrics */ any;
				
		/**
		 * 
		 */
		togglePressed : /* zebra.Dummy.togglePressed */ any;
				
		/**
		 * 
		 */
		itemPressed : /* zebra.Dummy.itemPressed */ any;
				
		/**
		 * 
		 */
		getItemBounds : /* zebra.Dummy.getItemBounds */ any;
				
		/**
		 * 
		 */
		getToggleBounds : /* zebra.Dummy.getToggleBounds */ any;
				
		/**
		 * 
		 */
		getToggleView : /* zebra.Dummy.getToggleView */ any;
				
		/**
		 * 
		 */
		getItemPreferredSize : /* zebra.Dummy.getItemPreferredSize */ any;
				
		/**
		 * 
		 */
		recalc_ : /* zebra.Dummy.recalc_ */ any;
				
		/**
		 * 
		 */
		isOpen_ : /* zebra.Dummy.isOpen_ */ any;
				
		/**
		 * 
		 */
		getIM : /* zebra.Dummy.getIM */ any;
				
		/**
		 * 
		 */
		getItemAt : /* zebra.Dummy.getItemAt */ any;
				
		/**
		 * 
		 */
		getItemAtInBranch : /* zebra.Dummy.getItemAtInBranch */ any;
				
		/**
		 * 
		 */
		getIconView : /* zebra.Dummy.getIconView */ any;
				
		/**
		 * 
		 */
		getIconSize : /* zebra.Dummy.getIconSize */ any;
				
		/**
		 * 
		 */
		getIconBounds : /* zebra.Dummy.getIconBounds */ any;
				
		/**
		 * 
		 */
		getToggleSize : /* zebra.Dummy.getToggleSize */ any;
				
		/**
		 * 
		 */
		isOverVisibleArea : /* zebra.Dummy.isOverVisibleArea */ any;
				
		/**
		 * 
		 */
		findOpened : /* zebra.Dummy.findOpened */ any;
				
		/**
		 * 
		 */
		findNext : /* zebra.Dummy.findNext */ any;
				
		/**
		 * 
		 */
		findPrev : /* zebra.Dummy.findPrev */ any;
				
		/**
		 * 
		 */
		findLast : /* zebra.Dummy.findLast */ any;
				
		/**
		 * 
		 */
		prevVisible : /* zebra.Dummy.prevVisible */ any;
				
		/**
		 * 
		 */
		isVerVisible : /* zebra.Dummy.isVerVisible */ any;
				
		/**
		 * 
		 */
		nextVisible : /* zebra.Dummy.nextVisible */ any;
				
		/**
		 * 
		 */
		nextVisibleInBranch : /* zebra.Dummy.nextVisibleInBranch */ any;
				
		/**
		 * 
		 */
		paintSelectedItem : /* zebra.Dummy.paintSelectedItem */ any;
				
		/**
		 * 
		 */
		paintTree : /* zebra.Dummy.paintTree */ any;
				
		/**
		 * 
		 */
		paintBranch : /* zebra.Dummy.paintBranch */ any;
				
		/**
		 * 
		 */
		y_ : /* zebra.Dummy.y_ */ any;
				
		/**
		 * 
		 */
		paintChild : /* zebra.Dummy.paintChild */ any;
				
		/**
		 * 
		 */
		nextPage : /* zebra.Dummy.nextPage */ any;
				
		/**
		 * 
		 */
		toggleAll : /* zebra.Dummy.toggleAll */ any;
				
		/**
		 * 
		 */
		itemInserted : /* zebra.Dummy.itemInserted */ any;
				
		/**
		 * 
		 */
		itemRemoved : /* zebra.Dummy.itemRemoved */ any;
				
		/**
		 * 
		 */
		itemModified : /* zebra.Dummy.itemModified */ any;
				
		/**
		 * 
		 */
		lnColor : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		viewSizes : /* zebra.Dummy.viewSizes */ any;
				
		/**
		 * 
		 */
		nodes : any;
				
		/**
		 * 
		 */
		isSelectable : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		shouldStartEdit : /* zebra.Dummy.shouldStartEdit */ any;
				
		/**
		 * 
		 */
		paintItem : /* zebra.Dummy.paintItem */ any;
				
		/**
		 * 
		 */
		se : /* zebra.Dummy.se */ any;
				
		/**
		 * 
		 */
		pressedItem : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		adjustLocation : /* zebra.Dummy.adjustLocation */ any;
				
		/**
		 * 
		 */
		setContent : /* zebra.Dummy.setContent */ any;
				
		/**
		 * 
		 */
		setStyle : /* zebra.Dummy.setStyle */ any;
				
		/**
		 * 
		 */
		isInInvisibleState : /* zebra.Dummy.isInInvisibleState */ any;
				
		/**
		 * 
		 */
		element : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		globalCompListener : /* zebra.Dummy.globalCompListener */ any;
				
		/**
		 * 
		 */
		globalWinListener : /* zebra.Dummy.globalWinListener */ any;
				
		/**
		 * 
		 */
		detectAt : /* zebra.Dummy.detectAt */ any;
				
		/**
		 * 
		 */
		shaperBr : zebra.Dummy;
				
		/**
		 * 
		 */
		buildModel : /* zebra.Dummy.buildModel */ any;
				
		/**
		 * 
		 */
		itemByComponent : /* zebra.Dummy.itemByComponent */ any;
				
		/**
		 * 
		 */
		createItem : /* zebra.Dummy.createItem */ any;
	}
}
declare namespace zebra.$canvas{
	// zebra.$canvas.size.!ret
	
	/**
	 * 
	 */
	interface SizeRet {
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 */
		$getImageData(x : number, y : number, w : any, h : any): void;
				
		/**
		 * customize context with number of new methods
		 * var proto = ctx.constructor.prototype;
		 * @param sx 
		 * @param sy 
		 */
		$scale(sx : number, sy : number): void;
				
		/**
		 * 
		 */
		textBaseline : string;
				
		/**
		 * Reset the event properties with new values
		 * @private
		 * @param  {zebra.ui.Panel} target  a target component that triggers the event
		 * @param  {Integer} id an unique id of the event
		 * @param  {Integer} ax an absolute (relatively to a canvas where the target
		 * component is hosted) x mouse cursor coordinate
		 * @param  {Integer} ay an absolute (relatively to a canvas where the target
		 * component is hosted) y mouse cursor coordinate
		 * @param  {Integer} mask   a pressed mouse buttons mask
		 * @param  {Integer} clicks number of a button clicks
		 * @method  reset
		 * @param w 
		 * @param h 
		 */
		reset(w : () => void, h : any): void;
				
		/**
		 * pre-allocate canvas save $states
		 */
		$states : Array</* zebra.$canvas.size.!ret.$statesI */ any>;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		tX(x : any, y : any): number;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		tY(x : any, y : any): number;
				
		/**
		 * 
		 * @param dx 
		 * @param dy 
		 */
		translate(dx : any, dy : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		rotate(v : any): void;
				
		/**
		 * 
		 * @return  
		 */
		save(): number;
				
		/**
		 * 
		 * @return  
		 */
		restore(): number;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 */
		clipRect(x : any, y : any, w : any, h : any): void;
				
		/**
		 * 
		 */
		$curState : number;
				
		/**
		 * 
		 */
		getImageData : /* zebra.$canvas.size.!ret.$getImageData */ any;
				
		/**
		 * 
		 */
		scale : /* zebra.$canvas.size.!ret.$scale */ any;
	}
}
declare namespace zebra.$canvas.SizeRet{
	// zebra.$canvas.size.!ret.$states.<i>
	
	/**
	 * 
	 */
	interface $statesI {
				
		/**
		 * 
		 */
		dy : number;
				
		/**
		 * 
		 */
		dx : number;
				
		/**
		 * 
		 */
		height : number;
				
		/**
		 * 
		 */
		y : number;
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		rotateVal : number;
				
		/**
		 * 
		 */
		srot : number;
				
		/**
		 * 
		 */
		sy : number;
				
		/**
		 * 
		 */
		sx : number;
				
		/**
		 * 
		 */
		crot : number;
	}
}
declare namespace zebra{
	// zebra.$getPS.!ret
	
	/**
	 * 
	 */
	interface $getPSRet {
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra{
	// zebra.$cvp.!1
	
	/**
	 * 
	 */
	interface $cvp1 {
				
		/**
		 * 
		 */
		x : number;
				
		/**
		 * 
		 */
		y : number;
				
		/**
		 * 
		 */
		width : number;
				
		/**
		 * 
		 */
		height : number;
	}
}
declare namespace zebra{
	// zebra.calcOrigin.!ret
	type CalcOriginRet = Array<number>;
}
declare namespace zebra{
	// zebra.loadImage.!ret
	
	/**
	 * 
	 */
	interface LoadImageRet {
				
		/**
		 * 
		 */
		crossOrigin : string;
				
		/**
		 * 
		 * @param e 
		 */
		onerror(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		onload(e : any): void;
	}
}
declare namespace zebra.Dummy{
	// zebra.Dummy.paintSelection.!0
	
	/**
	 * 
	 */
	interface PaintSelection0 {
				
		/**
		 * 
		 */
		fillStyle : number;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.encode.!0
	
	/**
	 * 
	 */
	interface Encode0 {
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.encodeValue.!1
	
	/**
	 * 
	 */
	interface EncodeValue1 {
				
		/**
		 * 
		 */
		1 : /* zebra.Dummy.encode.!0 */ any;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.parse.!2
	
	/**
	 * 
	 */
	interface Parse2 {
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.buildModel.!1
	
	/**
	 * 
	 */
	interface BuildModel1 {
				
		/**
		 * 
		 */
		comp : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		parent : /* zebra.Dummy.buildModel.!1 */ any;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.$keyTyped.!0
	
	/**
	 * 
	 */
	interface $keyTyped0 {
				
		/**
		 * 
		 */
		preventDefault : /* zebra.Dummy.$keyTyped.!0.preventDefault */ any;
	}
}
declare namespace zebra.$env.Layoutable{
	// zebra.$env.Layoutable.$keyPressed.!0
	
	/**
	 * 
	 */
	interface $keyPressed0 {
				
		/**
		 * 
		 */
		preventDefault : /* zebra.Dummy.$keyPressed.!0.preventDefault */ any;
	}
}

/**
 * 
 * @param name 
 * @return  
 */
declare function zebra(name : any): any;

/**
 * 
 */
declare namespace zebra{
		
	/**
	 * 
	 */
	interface Import {
				
		/**
		 * 
		 * @return  
		 */
		new (): string;
	}

	
	/**
	 * 
	 */
	namespace $env{
				
		/**
		 * 
		 */
		export var NONE : number;
				
		/**
		 * 
		 */
		export var LEFT : number;
				
		/**
		 * 
		 */
		export var RIGHT : number;
				
		/**
		 * 
		 */
		export var TOP : number;
				
		/**
		 * 
		 */
		export var BOTTOM : number;
				
		/**
		 * 
		 */
		export var CENTER : number;
				
		/**
		 * 
		 */
		export var HORIZONTAL : number;
				
		/**
		 * 
		 */
		export var VERTICAL : number;
				
		/**
		 * 
		 */
		export var TEMPORARY : number;
				
		/**
		 * 
		 */
		export var USE_PS_SIZE : number;
				
		/**
		 * 
		 */
		export var UsePsSize : number;
				
		/**
		 * 
		 */
		export var STRETCH : number;
				
		/**
		 * 
		 */
		export var TopLeft : number;
				
		/**
		 * 
		 */
		export var TopRight : number;
				
		/**
		 * 
		 */
		export var BottomLeft : number;
				
		/**
		 * 
		 */
		export var BottomRight : number;
		
		/**
		 * 
		 */
		namespace Layout{
						
			/**
			 * 
			 */
			export var $hash$ : string;
			
			/**
			 * 
			 */
			namespace $clazz{
								
				/**
				 * 
				 */
				export var $hash$ : string;
				
				/**
				 * 
				 */
				namespace $parents{
				}
								
				/**
				 * 
				 */
				export var toString : /* zebra.Interface.toString */ any;
				
				/**
				 * 
				 */
				var prototype : {
										
					/**
					 * 
					 */
					$clazz : /* zebra.Interface */ any;
										
					/**
					 * 
					 */
					toString : /* zebra.Interface.toString */ any;
				}
			}
			
			/**
			 * 
			 */
			namespace $parents{
			}
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				$clazz : /* zebra.Layout */ any;
								
				/**
				 * 
				 */
				toString : /* zebra.Interface.toString */ any;
			}
						
			/**
			 * 
			 */
			export var toString : /* zebra.Interface.toString */ any;
		}
		
		/**
		 * 
		 */
		namespace Layoutable{
						
			/**
			 * 
			 */
			export var $hash$ : string;
			
			/**
			 * 
			 */
			namespace $clazz{
								
				/**
				 * 
				 */
				export var $hash$ : string;
				
				/**
				 * 
				 */
				namespace $parents{
				}
								
				/**
				 * 
				 */
				export var toString : /* zebra.Interface.toString */ any;
				
				/**
				 * 
				 */
				var prototype : {
										
					/**
					 * 
					 */
					$clazz : /* zebra.Class */ any;
										
					/**
					 * 
					 */
					toString : /* zebra.Interface.toString */ any;
				}
								
				/**
				 * 
				 */
				export var forName : /* zebra.Class.forName */ any;
			}
			
			/**
			 * 
			 */
			namespace $parents{
			}
			
			/**
			 * 
			 */
			namespace $propertyInfo{
			}
						
			/**
			 * 
			 */
			export var $isSingleton : boolean;
						
			/**
			 * 
			 */
			export var isSingleton : boolean;
						
			/**
			 * 
			 */
			export var cachedHeight : number;
						
			/**
			 * 
			 */
			export var height : number;
						
			/**
			 * 
			 */
			export var cachedWidth : number;
						
			/**
			 * 
			 */
			export var psHeight : number;
						
			/**
			 * 
			 */
			export var psWidth : number;
						
			/**
			 * 
			 */
			export var isValid : boolean;
						
			/**
			 * 
			 */
			export var isLayoutValid : boolean;
			
			/**
			 * 
			 */
			namespace constraints{
								
				/**
				 * 
				 */
				export var $hash$ : string;
								
				/**
				 * 
				 */
				export var isSortable : boolean;
								
				/**
				 * 
				 */
				export var parent : /* zebra.Dummy.constraints */ any;
								
				/**
				 * 
				 */
				export var getView : Function;
			}
						
			/**
			 * 
			 */
			export var isVisible : boolean;
						
			/**
			 * 
			 */
			export var getPreferredSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var calcPreferredSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var vgap : number;
						
			/**
			 * 
			 */
			export var hgap : number;
						
			/**
			 * 
			 */
			export var ax : number;
						
			/**
			 * 
			 */
			export var ay : number;
						
			/**
			 * 
			 */
			export var direction : number;
						
			/**
			 * 
			 */
			export var stretchLast : boolean;
						
			/**
			 * 
			 */
			export var stretch : boolean;
						
			/**
			 * 
			 */
			export var right : number;
						
			/**
			 * 
			 */
			export var left : number;
						
			/**
			 * 
			 */
			export var bottom : number;
						
			/**
			 * 
			 */
			export var top : number;
						
			/**
			 * 
			 */
			export var colSpan : number;
						
			/**
			 * 
			 */
			export var rowSpan : number;
						
			/**
			 * 
			 */
			export var flag : number;
						
			/**
			 * 
			 */
			export var rows : number;
						
			/**
			 * 
			 */
			export var cols : number;
						
			/**
			 * 
			 */
			export var mask : number;
						
			/**
			 * 
			 */
			export var concatArrays : boolean;
						
			/**
			 * 
			 */
			export var usePropertySetters : boolean;
						
			/**
			 * 
			 */
			export var ignoreNonExistentKeys : boolean;
						
			/**
			 * 
			 */
			export var inherit : /*no type*/{};
						
			/**
			 * 
			 */
			export var $url : string;
						
			/**
			 * 
			 */
			export var DOWN : number;
						
			/**
			 * 
			 */
			export var UP : number;
						
			/**
			 * 
			 */
			export var BEG : number;
						
			/**
			 * 
			 */
			export var END : number;
						
			/**
			 * 
			 */
			export var offset : number;
						
			/**
			 * 
			 */
			export var currentLine : number;
						
			/**
			 * 
			 */
			export var currentCol : number;
						
			/**
			 * 
			 */
			export var version : string;
						
			/**
			 * 
			 */
			export var contentType : string;
						
			/**
			 * 
			 */
			export var textLength : number;
						
			/**
			 * 
			 */
			export var maxLen : number;
						
			/**
			 * 
			 */
			export var extra : number;
						
			/**
			 * 
			 */
			export var dyZoom : number;
						
			/**
			 * 
			 */
			export var dxZoom : number;
						
			/**
			 * 
			 */
			export var dyNorma : number;
						
			/**
			 * 
			 */
			export var dxNorma : number;
						
			/**
			 * 
			 */
			export var naturalDirection : boolean;
						
			/**
			 * 
			 */
			export var touchCounter : number;
			
			/**
			 * 
			 */
			namespace touches{
			}
						
			/**
			 * 
			 */
			export var dc : number;
						
			/**
			 * 
			 */
			export var paint : /*no type*/{};
						
			/**
			 * 
			 */
			export var middle : string;
						
			/**
			 * 
			 */
			export var darkest : string;
						
			/**
			 * 
			 */
			export var MOUSE_UID : number;
						
			/**
			 * 
			 */
			export var KEY_UID : number;
						
			/**
			 * 
			 */
			export var FOCUS_UID : number;
						
			/**
			 * 
			 */
			export var FOCUS_LOST : number;
						
			/**
			 * 
			 */
			export var FOCUS_GAINED : number;
						
			/**
			 * 
			 */
			export var TYPED : number;
						
			/**
			 * 
			 */
			export var RELEASED : number;
						
			/**
			 * 
			 */
			export var PRESSED : number;
						
			/**
			 * 
			 */
			export var M_CTRL : number;
						
			/**
			 * 
			 */
			export var M_SHIFT : number;
						
			/**
			 * 
			 */
			export var M_ALT : number;
						
			/**
			 * 
			 */
			export var M_CMD : number;
						
			/**
			 * 
			 */
			export var CLICKED : number;
						
			/**
			 * 
			 */
			export var ENTERED : number;
						
			/**
			 * 
			 */
			export var EXITED : number;
						
			/**
			 * 
			 */
			export var DRAGGED : number;
						
			/**
			 * 
			 */
			export var DRAGSTARTED : number;
						
			/**
			 * 
			 */
			export var DRAGENDED : number;
						
			/**
			 * 
			 */
			export var MOVED : number;
						
			/**
			 * 
			 */
			export var LEFT_BUTTON : number;
						
			/**
			 * 
			 */
			export var RIGHT_BUTTON : number;
			
			/**
			 * 
			 */
			namespace modifiers{
								
				/**
				 * setup modifiers
				 */
				export var altKey : boolean;
								
				/**
				 * 
				 */
				export var ctrlKey : boolean;
								
				/**
				 * 
				 */
				export var metaKey : boolean;
								
				/**
				 * 
				 */
				export var shiftKey : boolean;
			}
						
			/**
			 * 
			 */
			export var ENABLED : number;
						
			/**
			 * 
			 */
			export var SHOWN : number;
						
			/**
			 * 
			 */
			export var SIZED : number;
						
			/**
			 * 
			 */
			export var ADDED : number;
						
			/**
			 * 
			 */
			export var REMOVED : number;
						
			/**
			 * 
			 */
			export var toPreferredSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var cursorType : string;
						
			/**
			 * 
			 */
			export var $isFunc : boolean;
						
			/**
			 * 
			 */
			export var $isMasterCanvas : boolean;
						
			/**
			 * 
			 */
			export var $focusGainedCounter : number;
						
			/**
			 * 
			 */
			export var getLayer : /*no type*/{};
			
			/**
			 * 
			 */
			var $da : {
								
				/**
				 * 
				 */
				x : number;
								
				/**
				 * 
				 */
				y : number;
								
				/**
				 * 
				 */
				width : number;
								
				/**
				 * 
				 */
				height : number;
			}
						
			/**
			 * 
			 */
			export var isFullScreen : boolean;
						
			/**
			 * 
			 */
			export var color : string;
						
			/**
			 * 
			 */
			export var radius : number;
						
			/**
			 * 
			 */
			export var gx1 : number;
						
			/**
			 * 
			 */
			export var gx2 : number;
						
			/**
			 * 
			 */
			export var gy1 : number;
						
			/**
			 * 
			 */
			export var gy2 : number;
						
			/**
			 * 
			 */
			export var clicks : number;
						
			/**
			 * 
			 */
			export var absX : number;
						
			/**
			 * 
			 */
			export var absY : number;
						
			/**
			 * 
			 */
			export var bg : string;
						
			/**
			 * 
			 */
			export var crossOrigin : string;
						
			/**
			 * 
			 */
			export var stringWidth : number;
						
			/**
			 * 
			 */
			export var showLast : boolean;
						
			/**
			 * 
			 */
			export var fillColor1 : string;
						
			/**
			 * 
			 */
			export var paintOnTop : /*no type*/{};
						
			/**
			 * 
			 */
			export var isFireByPress : boolean;
						
			/**
			 * 
			 */
			export var firePeriod : number;
						
			/**
			 * 
			 */
			export var startIn : number;
						
			/**
			 * 
			 */
			export var hGap : number;
						
			/**
			 * 
			 */
			export var vGap : number;
						
			/**
			 * 
			 */
			export var indent : number;
						
			/**
			 * 
			 */
			export var getTitleInfo : /*no type*/{};
						
			/**
			 * 
			 */
			export var prevLoc : number;
						
			/**
			 * 
			 */
			export var rightMinSize : number;
						
			/**
			 * 
			 */
			export var leftMinSize : number;
						
			/**
			 * 
			 */
			export var isMoveable : boolean;
						
			/**
			 * 
			 */
			export var maxXY : number;
						
			/**
			 * 
			 */
			export var minXY : number;
						
			/**
			 * 
			 */
			export var barLocation : number;
						
			/**
			 * 
			 */
			export var bundleHeight : number;
						
			/**
			 * 
			 */
			export var isCollapsed : boolean;
						
			/**
			 * 
			 */
			export var sy : number;
						
			/**
			 * 
			 */
			export var sx : number;
						
			/**
			 * 
			 */
			export var isDragable : boolean;
						
			/**
			 * 
			 */
			export var MIN_BUNDLE_SIZE : number;
						
			/**
			 * 
			 */
			export var max : number;
						
			/**
			 * 
			 */
			export var pageIncrement : number;
						
			/**
			 * 
			 */
			export var unitIncrement : number;
						
			/**
			 * 
			 */
			export var bundleLoc : number;
						
			/**
			 * 
			 */
			export var startDragLoc : number;
						
			/**
			 * 
			 */
			export var autoHide : boolean;
						
			/**
			 * 
			 */
			export var $interval : number;
						
			/**
			 * 
			 */
			export var isPosChangedLocked : boolean;
						
			/**
			 * 
			 */
			export var tabAreaX : number;
						
			/**
			 * 
			 */
			export var repaintY : number;
						
			/**
			 * 
			 */
			export var repaintX : number;
						
			/**
			 * 
			 */
			export var repaintHeight : number;
						
			/**
			 * 
			 */
			export var repaintWidth : number;
						
			/**
			 * 
			 */
			export var sideSpace : number;
						
			/**
			 * 
			 */
			export var tabAreaHeight : number;
						
			/**
			 * 
			 */
			export var tabAreaWidth : number;
						
			/**
			 * 
			 */
			export var tabAreaY : number;
						
			/**
			 * 
			 */
			export var selectedIndex : number;
						
			/**
			 * 
			 */
			export var overTab : number;
						
			/**
			 * 
			 */
			export var exactStep : number;
						
			/**
			 * 
			 */
			export var roughStep : number;
						
			/**
			 * 
			 */
			export var min : number;
						
			/**
			 * 
			 */
			export var netSize : number;
						
			/**
			 * 
			 */
			export var psH : number;
						
			/**
			 * 
			 */
			export var psW : number;
						
			/**
			 * 
			 */
			export var scaleStep : number;
						
			/**
			 * 
			 */
			export var correctDt : number;
						
			/**
			 * 
			 */
			export var isShowTitle : boolean;
						
			/**
			 * 
			 */
			export var isShowScale : boolean;
						
			/**
			 * 
			 */
			export var isIntervalMode : boolean;
						
			/**
			 * 
			 */
			export var dragged : boolean;
						
			/**
			 * 
			 */
			export var isPlaying : boolean;
						
			/**
			 * 
			 */
			export var isReady : boolean;
						
			/**
			 * 
			 */
			export var identifier : number;
						
			/**
			 * 
			 */
			export var invLines : number;
						
			/**
			 * 
			 */
			export var startInvLine : number;
						
			/**
			 * 
			 */
			export var textWidth : number;
						
			/**
			 * 
			 */
			export var textHeight : number;
						
			/**
			 * 
			 */
			export var $dontHide : boolean;
						
			/**
			 * 
			 */
			export var selectionColor : string;
						
			/**
			 * 
			 */
			export var blinkingPeriod : number;
						
			/**
			 * 
			 */
			export var blinkMe : boolean;
						
			/**
			 * 
			 */
			export var blinkMeCounter : number;
						
			/**
			 * 
			 */
			export var isEditable : boolean;
						
			/**
			 * 
			 */
			export var curX : number;
						
			/**
			 * 
			 */
			export var endCol : number;
						
			/**
			 * 
			 */
			export var endLine : number;
						
			/**
			 * 
			 */
			export var startCol : number;
						
			/**
			 * 
			 */
			export var startLine : number;
						
			/**
			 * 
			 */
			export var endOff : number;
						
			/**
			 * 
			 */
			export var startOff : number;
						
			/**
			 * 
			 */
			export var historyPos : number;
						
			/**
			 * 
			 */
			export var curH : number;
						
			/**
			 * 
			 */
			export var curW : number;
						
			/**
			 * 
			 */
			export var curY : number;
						
			/**
			 * 
			 */
			export var undoCounter : number;
						
			/**
			 * 
			 */
			export var redoCounter : number;
						
			/**
			 * 
			 */
			export var getItemSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var firstVisible : number;
						
			/**
			 * 
			 */
			export var psHeight_ : number;
						
			/**
			 * 
			 */
			export var psWidth_ : number;
						
			/**
			 * 
			 */
			export var firstVisibleY : number;
			
			/**
			 * 
			 */
			var vArea : {
								
				/**
				 * 
				 */
				y : number;
								
				/**
				 * 
				 */
				x : number;
								
				/**
				 * 
				 */
				width : number;
								
				/**
				 * 
				 */
				height : number;
			}
						
			/**
			 * 
			 */
			export var visValid : boolean;
						
			/**
			 * 
			 */
			export var $closeTime : number;
						
			/**
			 * 
			 */
			export var dontGenerateUpdateEvent : boolean;
						
			/**
			 * 
			 */
			export var maxPadHeight : number;
						
			/**
			 * 
			 */
			export var $lockListSelEvent : boolean;
						
			/**
			 * 
			 */
			export var $triggeredByPointer : boolean;
						
			/**
			 * 
			 */
			export var topModalIndex : number;
						
			/**
			 * 
			 */
			export var isPopupEditor : boolean;
						
			/**
			 * 
			 */
			export var minSize : number;
						
			/**
			 * 
			 */
			export var psw : number;
						
			/**
			 * 
			 */
			export var prevH : number;
						
			/**
			 * 
			 */
			export var dy : number;
						
			/**
			 * 
			 */
			export var dx : number;
						
			/**
			 * 
			 */
			export var py : number;
						
			/**
			 * 
			 */
			export var px : number;
						
			/**
			 * 
			 */
			export var psh : number;
						
			/**
			 * 
			 */
			export var action : number;
						
			/**
			 * 
			 */
			export var noSubIfEmpty : boolean;
			
			/**
			 * 
			 */
			namespace decoratives{
			}
						
			/**
			 * 
			 */
			export var $isActive : boolean;
						
			/**
			 * 
			 */
			export var mRight : number;
						
			/**
			 * 
			 */
			export var mBottom : number;
						
			/**
			 * 
			 */
			export var mLeft : number;
						
			/**
			 * 
			 */
			export var mTop : number;
						
			/**
			 * 
			 */
			export var borderColor : string;
						
			/**
			 * 
			 */
			export var borderWidth : number;
			
			/**
			 * 
			 */
			var $contentPs : {
								
				/**
				 * 
				 */
				height : number;
								
				/**
				 * 
				 */
				width : number;
			}
						
			/**
			 * 
			 */
			export var hideTooltipByPress : boolean;
						
			/**
			 * 
			 */
			export var $popupMenuY : number;
						
			/**
			 * 
			 */
			export var $popupMenuX : number;
						
			/**
			 * 
			 */
			export var $tooltipY : number;
						
			/**
			 * 
			 */
			export var $tooltipX : number;
						
			/**
			 * 
			 */
			export var showTooltipIn : number;
						
			/**
			 * 
			 */
			export var size : number;
						
			/**
			 * 
			 */
			export var activeAreaSize : number;
						
			/**
			 * 
			 */
			export var lineColor : string;
						
			/**
			 * 
			 */
			export var isResizable : boolean;
						
			/**
			 * 
			 */
			export var isAutoFit : boolean;
						
			/**
			 * 
			 */
			export var selectedColRow : number;
						
			/**
			 * 
			 */
			export var sortState : number;
						
			/**
			 * 
			 */
			export var isSortable : boolean;
						
			/**
			 * 
			 */
			export var DEF_COLWIDTH : number;
						
			/**
			 * 
			 */
			export var DEF_ROWHEIGHT : number;
						
			/**
			 * 
			 */
			export var cellInsetsBottom : number;
						
			/**
			 * 
			 */
			export var cellInsetsTop : number;
						
			/**
			 * 
			 */
			export var lineSize : number;
						
			/**
			 * 
			 */
			export var cellInsetsRight : number;
						
			/**
			 * 
			 */
			export var cellInsetsLeft : number;
						
			/**
			 * 
			 */
			export var drawHorLines : boolean;
						
			/**
			 * 
			 */
			export var drawVerLines : boolean;
						
			/**
			 * 
			 */
			export var isUsePsMetric : boolean;
						
			/**
			 * 
			 */
			export var colOffset : number;
						
			/**
			 * 
			 */
			export var pressedCol : number;
						
			/**
			 * 
			 */
			export var rowOffset : number;
			
			/**
			 * 
			 */
			var visibleArea : {
								
				/**
				 * 
				 */
				y : number;
								
				/**
				 * 
				 */
				x : number;
								
				/**
				 * 
				 */
				width : number;
								
				/**
				 * 
				 */
				height : number;
			}
						
			/**
			 * 
			 */
			export var pressedRow : number;
						
			/**
			 * 
			 */
			export var editingCol : number;
						
			/**
			 * 
			 */
			export var editingRow : number;
			
			/**
			 * 
			 */
			var $strPs : {
								
				/**
				 * 
				 */
				width : number;
			}
						
			/**
			 * 
			 */
			export var $prevWidth : number;
						
			/**
			 * 
			 */
			export var $propW : number;
						
			/**
			 * 
			 */
			export var $propsW : number;
						
			/**
			 * 
			 */
			export var gapy : number;
						
			/**
			 * 
			 */
			export var getItemPreferredSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var getIconSize : /*no type*/{};
						
			/**
			 * 
			 */
			export var maxh : number;
						
			/**
			 * 
			 */
			export var maxw : number;
						
			/**
			 * 
			 */
			export var _isVal : boolean;
						
			/**
			 * 
			 */
			export var itemGapY : number;
						
			/**
			 * 
			 */
			export var itemGapX : number;
						
			/**
			 * 
			 */
			export var plus : boolean;
						
			/**
			 * 
			 */
			export var isLocAdjusted : boolean;
						
			/**
			 * 
			 */
			export var ePsH : number;
						
			/**
			 * 
			 */
			export var ePsW : number;
						
			/**
			 * 
			 */
			export var onmousemove : /*no type*/{};
						
			/**
			 * 
			 */
			export var disabled : boolean;
						
			/**
			 * 
			 */
			export var minWidth : number;
						
			/**
			 * 
			 */
			export var minHeight : number;
						
			/**
			 * 
			 */
			export var isMoveEnabled : boolean;
						
			/**
			 * 
			 */
			export var isResizeEnabled : boolean;
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				$clazz : /* zebra.Dummy */ any;
								
				/**
				 * 
				 */
				toString : /* zebra.Interface.toString */ any;
								
				/**
				 * 
				 */
				setViews : /* zebra.$ViewsSetter */ any;
								
				/**
				 * 
				 */
				extend : /* zebra.Dummy.prototype.extend */ any;
								
				/**
				 * 
				 */
				$super : /* zebra.Dummy.prototype.$super */ any;
								
				/**
				 * 
				 */
				$this : /* zebra.Dummy.prototype.$this */ any;
								
				/**
				 * 
				 */
				properties : /* zebra.Dummy.prototype.properties */ any;
								
				/**
				 * 
				 */
				bind : /* zebra.Dummy.prototype.bind */ any;
								
				/**
				 * 
				 */
				unbind : /* zebra.Dummy.prototype.unbind */ any;
			}
						
			/**
			 * 
			 */
			export var id : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Metric : /* zebra.Layout */ any;
						
			/**
			 * 
			 */
			export var url : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var encode : /*no type*/{};
						
			/**
			 * 
			 */
			export var encodeValue : /*no type*/{};
						
			/**
			 * 
			 */
			export var parse : /*no type*/{};
			
			/**
			 * 
			 */
			var queue : {
			}
						
			/**
			 * 
			 */
			export var target : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var view : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var orientation : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var source : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var $px : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var src : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var owner : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var focusComponent : any;
						
			/**
			 * 
			 */
			export var Label : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Box : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Bar : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var bundleView : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TitlePan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TogglePan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var contentPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var VIncButton : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var VDecButton : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var HIncButton : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var HDecButton : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var VBundle : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var HBundle : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var scrollManager : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var ContentPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TabPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var render : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var Line : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Checkbox : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var HintRender : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var ViewProvider : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var ImageLabel : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var CompListModel : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TextField : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var ComboPadPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var ReadonlyContentPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var EditableContentPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Button : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var List : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var model : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var text : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var list : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var selectionView : any;
						
			/**
			 * 
			 */
			export var CaptionPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TitleLab : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var StatusPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var SizerIcon : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Icon : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var icons : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var buttons : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var SubImage : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var CheckStatePan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var MenuItem : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var TooltipBorder : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var items : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Combo : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Items : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var iconPan : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var statusPan : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			export var Layout : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var Link : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var CornerPan : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var editors : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var grid : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var lnColor : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var isSelectable : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var pressedItem : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var element : /* zebra.Dummy */ any;
						
			/**
			 * 
			 */
			export var shaperBr : zebra.Dummy;
						
			/**
			 * 
			 */
			export var buildModel : /*no type*/{};
						
			/**
			 * 
			 */
			export var toString : /* zebra.Dummy.toString */ any;
						
			/**
			 * 
			 */
			export var extend : /* zebra.Dummy.extend */ any;
						
			/**
			 * 
			 */
			export var find : /* zebra.Dummy.find */ any;
						
			/**
			 * 
			 */
			export var findAll : /* zebra.Dummy.findAll */ any;
						
			/**
			 * 
			 */
			export var setId : /* zebra.Dummy.setId */ any;
						
			/**
			 * 
			 */
			export var properties : /* zebra.Dummy.properties */ any;
						
			/**
			 * 
			 */
			export var property : /* zebra.Dummy.property */ any;
						
			/**
			 * 
			 */
			export var validateMetric : /* zebra.Dummy.validateMetric */ any;
						
			/**
			 * 
			 */
			export var invalidateLayout : /* zebra.Dummy.invalidateLayout */ any;
						
			/**
			 * 
			 */
			export var invalidate : /* zebra.Dummy.invalidate */ any;
						
			/**
			 * 
			 */
			export var validate : /* zebra.Dummy.validate */ any;
						
			/**
			 * 
			 */
			export var getTop : /* zebra.Dummy.getTop */ any;
						
			/**
			 * 
			 */
			export var getLeft : /* zebra.Dummy.getLeft */ any;
						
			/**
			 * 
			 */
			export var getBottom : /* zebra.Dummy.getBottom */ any;
						
			/**
			 * 
			 */
			export var getRight : /* zebra.Dummy.getRight */ any;
						
			/**
			 * 
			 */
			export var setParent : /* zebra.Dummy.setParent */ any;
						
			/**
			 * 
			 */
			export var setLayout : /* zebra.Dummy.setLayout */ any;
						
			/**
			 * 
			 */
			export var doLayout : /* zebra.Dummy.doLayout */ any;
						
			/**
			 * 
			 */
			export var indexOf : /* zebra.Dummy.indexOf */ any;
						
			/**
			 * 
			 */
			export var insert : /* zebra.Dummy.insert */ any;
						
			/**
			 * 
			 */
			export var setLocation : /* zebra.Dummy.setLocation */ any;
						
			/**
			 * 
			 */
			export var setBounds : /* zebra.Dummy.setBounds */ any;
						
			/**
			 * 
			 */
			export var setSize : /* zebra.Dummy.setSize */ any;
						
			/**
			 * 
			 */
			export var getByConstraints : /* zebra.Dummy.getByConstraints */ any;
						
			/**
			 * 
			 */
			export var remove : /* zebra.Dummy.remove */ any;
						
			/**
			 * 
			 */
			export var removeAt : /* zebra.Dummy.removeAt */ any;
						
			/**
			 * 
			 */
			export var removeMe : /* zebra.Dummy.removeMe */ any;
						
			/**
			 * 
			 */
			export var setPreferredSize : /* zebra.Dummy.setPreferredSize */ any;
						
			/**
			 * 
			 */
			export var setAt : /* zebra.Dummy.setAt */ any;
						
			/**
			 * 
			 */
			export var add : /* zebra.Dummy.add */ any;
						
			/**
			 * 
			 */
			export var  : /* zebra.Dummy. */ any;
						
			/**
			 * 
			 */
			export var setPadding : /* zebra.Dummy.setPadding */ any;
						
			/**
			 * 
			 */
			export var calcCols : /* zebra.Dummy.calcCols */ any;
						
			/**
			 * 
			 */
			export var calcRows : /* zebra.Dummy.calcRows */ any;
						
			/**
			 * 
			 */
			export var calcRow : /* zebra.Dummy.calcRow */ any;
						
			/**
			 * 
			 */
			export var calcCol : /* zebra.Dummy.calcCol */ any;
			
			/**
			 * 
			 */
			var kids : {
			}
						
			/**
			 * 
			 */
			export var colSizes : /* zebra.Dummy.colSizes */ any;
						
			/**
			 * 
			 */
			export var rowSizes : /* zebra.Dummy.rowSizes */ any;
						
			/**
			 * 
			 */
			export var get : /* zebra.Dummy.get */ any;
						
			/**
			 * 
			 */
			export var mergeObjWithDesc : /* zebra.Dummy.mergeObjWithDesc */ any;
						
			/**
			 * 
			 */
			export var resolveClass : /* zebra.Dummy.resolveClass */ any;
						
			/**
			 * 
			 */
			export var load : /* zebra.Dummy.load */ any;
						
			/**
			 * 
			 */
			export var resolveVar : /* zebra.Dummy.resolveVar */ any;
						
			/**
			 * 
			 */
			export var expr : /* zebra.Dummy.expr */ any;
						
			/**
			 * 
			 */
			export var setOffset : /* zebra.Dummy.setOffset */ any;
						
			/**
			 * 
			 */
			export var seek : /* zebra.Dummy.seek */ any;
						
			/**
			 * 
			 */
			export var setRowCol : /* zebra.Dummy.setRowCol */ any;
						
			/**
			 * 
			 */
			export var inserted : /* zebra.Dummy.inserted */ any;
						
			/**
			 * 
			 */
			export var removed : /* zebra.Dummy.removed */ any;
						
			/**
			 * 
			 */
			export var getPointByOffset : /* zebra.Dummy.getPointByOffset */ any;
						
			/**
			 * 
			 */
			export var getOffsetByPoint : /* zebra.Dummy.getOffsetByPoint */ any;
						
			/**
			 * 
			 */
			export var seekLineTo : /* zebra.Dummy.seekLineTo */ any;
						
			/**
			 * 
			 */
			export var setMetric : /* zebra.Dummy.setMetric */ any;
						
			/**
			 * 
			 */
			export var _ : zebra.Listeners;
						
			/**
			 * 
			 */
			export var invoke : /* zebra.Dummy.invoke */ any;
						
			/**
			 * 
			 */
			export var append : /* zebra.Dummy.append */ any;
						
			/**
			 * 
			 */
			export var toQS : /* zebra.Dummy.toQS */ any;
						
			/**
			 * 
			 */
			export var decodeValue : /* zebra.Dummy.decodeValue */ any;
						
			/**
			 * 
			 */
			export var decode : /* zebra.Dummy.decode */ any;
						
			/**
			 * 
			 */
			export var getLnInfo : /* zebra.Dummy.getLnInfo */ any;
						
			/**
			 * 
			 */
			export var $lineTags : /* zebra.Dummy.$lineTags */ any;
						
			/**
			 * 
			 */
			export var getLine : /* zebra.Dummy.getLine */ any;
						
			/**
			 * 
			 */
			export var getValue : /* zebra.Dummy.getValue */ any;
						
			/**
			 * 
			 */
			export var getLines : /* zebra.Dummy.getLines */ any;
						
			/**
			 * 
			 */
			export var getTextLength : /* zebra.Dummy.getTextLength */ any;
						
			/**
			 * 
			 */
			export var write : /* zebra.Dummy.write */ any;
						
			/**
			 * 
			 */
			export var setValue : /* zebra.Dummy.setValue */ any;
						
			/**
			 * 
			 */
			export var setMaxLength : /* zebra.Dummy.setMaxLength */ any;
						
			/**
			 * 
			 */
			export var removeAll : /* zebra.Dummy.removeAll */ any;
						
			/**
			 * 
			 */
			export var count : /* zebra.Dummy.count */ any;
						
			/**
			 * 
			 */
			export var set : /* zebra.Dummy.set */ any;
						
			/**
			 * 
			 */
			export var contains : /* zebra.Dummy.contains */ any;
						
			/**
			 * 
			 */
			export var create : /* zebra.Dummy.create */ any;
						
			/**
			 * 
			 */
			export var findOne : /* zebra.Dummy.findOne */ any;
						
			/**
			 * 
			 */
			export var iterate : /* zebra.Dummy.iterate */ any;
						
			/**
			 * 
			 */
			export var removeKids : /* zebra.Dummy.removeKids */ any;
						
			/**
			 * 
			 */
			export var put : /* zebra.Dummy.put */ any;
						
			/**
			 * 
			 */
			export var puti : /* zebra.Dummy.puti */ any;
						
			/**
			 * 
			 */
			export var setRowsCols : /* zebra.Dummy.setRowsCols */ any;
						
			/**
			 * 
			 */
			export var setRows : /* zebra.Dummy.setRows */ any;
						
			/**
			 * 
			 */
			export var setCols : /* zebra.Dummy.setCols */ any;
						
			/**
			 * 
			 */
			export var removeRows : /* zebra.Dummy.removeRows */ any;
						
			/**
			 * 
			 */
			export var removeCols : /* zebra.Dummy.removeCols */ any;
						
			/**
			 * 
			 */
			export var insertRows : /* zebra.Dummy.insertRows */ any;
						
			/**
			 * 
			 */
			export var insertCols : /* zebra.Dummy.insertCols */ any;
						
			/**
			 * 
			 */
			export var sortCol : /* zebra.Dummy.sortCol */ any;
			
			/**
			 * 
			 */
			var lines : {
			}
						
			/**
			 * 
			 */
			export var d : /* zebra.Dummy.d */ any;
			
			/**
			 * 
			 */
			var objs : {
			}
						
			/**
			 * 
			 */
			export var wheeled : /* zebra.Dummy.wheeled */ any;
						
			/**
			 * 
			 */
			export var $fixEnd : /* zebra.Dummy.$fixEnd */ any;
						
			/**
			 * 
			 */
			export var start : /* zebra.Dummy.start */ any;
						
			/**
			 * 
			 */
			export var end : /* zebra.Dummy.end */ any;
						
			/**
			 * 
			 */
			export var Q : /* zebra.Dummy.Q */ any;
						
			/**
			 * 
			 */
			export var setTarget : /* zebra.Dummy.setTarget */ any;
						
			/**
			 * 
			 */
			export var outline : /* zebra.Dummy.outline */ any;
						
			/**
			 * 
			 */
			export var targetWasChanged : /* zebra.Dummy.targetWasChanged */ any;
						
			/**
			 * 
			 */
			export var $recalc : /* zebra.Dummy.$recalc */ any;
						
			/**
			 * 
			 */
			export var recalc : /* zebra.Dummy.recalc */ any;
						
			/**
			 * 
			 */
			export var ownerChanged : /* zebra.Dummy.ownerChanged */ any;
						
			/**
			 * 
			 */
			export var activate : /* zebra.Dummy.activate */ any;
						
			/**
			 * 
			 */
			export var loadImage : /* zebra.Dummy.loadImage */ any;
						
			/**
			 * 
			 */
			export var reset : /* zebra.Dummy.reset */ any;
						
			/**
			 * 
			 */
			export var isControlPressed : /* zebra.Dummy.isControlPressed */ any;
						
			/**
			 * 
			 */
			export var isShiftPressed : /* zebra.Dummy.isShiftPressed */ any;
						
			/**
			 * 
			 */
			export var isAltPressed : /* zebra.Dummy.isAltPressed */ any;
						
			/**
			 * 
			 */
			export var isCmdPressed : /* zebra.Dummy.isCmdPressed */ any;
						
			/**
			 * 
			 */
			export var isActionMask : /* zebra.Dummy.isActionMask */ any;
						
			/**
			 * 
			 */
			export var getCanvas : /* zebra.Dummy.getCanvas */ any;
						
			/**
			 * 
			 */
			export var notifyRender : /* zebra.Dummy.notifyRender */ any;
						
			/**
			 * 
			 */
			export var getComponentAt : /* zebra.Dummy.getComponentAt */ any;
						
			/**
			 * 
			 */
			export var vrp : /* zebra.Dummy.vrp */ any;
						
			/**
			 * 
			 */
			export var isInvalidatedByChild : /* zebra.Dummy.isInvalidatedByChild */ any;
						
			/**
			 * 
			 */
			export var kidAdded : /* zebra.Dummy.kidAdded */ any;
						
			/**
			 * 
			 */
			export var kidRemoved : /* zebra.Dummy.kidRemoved */ any;
						
			/**
			 * 
			 */
			export var relocated : /* zebra.Dummy.relocated */ any;
						
			/**
			 * 
			 */
			export var resized : /* zebra.Dummy.resized */ any;
						
			/**
			 * 
			 */
			export var hasFocus : /* zebra.Dummy.hasFocus */ any;
						
			/**
			 * 
			 */
			export var requestFocus : /* zebra.Dummy.requestFocus */ any;
						
			/**
			 * 
			 */
			export var requestFocusIn : /* zebra.Dummy.requestFocusIn */ any;
						
			/**
			 * 
			 */
			export var setVisible : /* zebra.Dummy.setVisible */ any;
						
			/**
			 * 
			 */
			export var setEnabled : /* zebra.Dummy.setEnabled */ any;
						
			/**
			 * 
			 */
			export var setBorder : /* zebra.Dummy.setBorder */ any;
						
			/**
			 * 
			 */
			export var setBackground : /* zebra.Dummy.setBackground */ any;
						
			/**
			 * 
			 */
			export var setKids : /* zebra.Dummy.setKids */ any;
						
			/**
			 * 
			 */
			export var focused : /* zebra.Dummy.focused */ any;
						
			/**
			 * 
			 */
			export var repaint : /* zebra.Dummy.repaint */ any;
						
			/**
			 * 
			 */
			export var toFront : /* zebra.Dummy.toFront */ any;
						
			/**
			 * 
			 */
			export var toBack : /* zebra.Dummy.toBack */ any;
						
			/**
			 * 
			 */
			export var getFocusRoot : /* zebra.Dummy.getFocusRoot */ any;
						
			/**
			 * 
			 */
			export var layerMousePressed : /* zebra.Dummy.layerMousePressed */ any;
						
			/**
			 * 
			 */
			export var layerKeyPressed : /* zebra.Dummy.layerKeyPressed */ any;
						
			/**
			 * 
			 */
			export var setView : /* zebra.Dummy.setView */ any;
						
			/**
			 * 
			 */
			export var paintComponent : /* zebra.Dummy.paintComponent */ any;
						
			/**
			 * 
			 */
			export var compEnabled : /* zebra.Dummy.compEnabled */ any;
						
			/**
			 * 
			 */
			export var compShown : /* zebra.Dummy.compShown */ any;
						
			/**
			 * 
			 */
			export var compRemoved : /* zebra.Dummy.compRemoved */ any;
						
			/**
			 * 
			 */
			export var canvasFocusLost : /* zebra.Dummy.canvasFocusLost */ any;
						
			/**
			 * 
			 */
			export var canvasFocusGained : /* zebra.Dummy.canvasFocusGained */ any;
						
			/**
			 * 
			 */
			export var keyPressed : /* zebra.Dummy.keyPressed */ any;
						
			/**
			 * 
			 */
			export var findFocusable : /* zebra.Dummy.findFocusable */ any;
						
			/**
			 * 
			 */
			export var isFocusable : /* zebra.Dummy.isFocusable */ any;
						
			/**
			 * 
			 */
			export var fd : /* zebra.Dummy.fd */ any;
						
			/**
			 * 
			 */
			export var ff : /* zebra.Dummy.ff */ any;
						
			/**
			 * 
			 */
			export var mousePressed : /* zebra.Dummy.mousePressed */ any;
						
			/**
			 * 
			 */
			export var parseKey : /* zebra.Dummy.parseKey */ any;
						
			/**
			 * 
			 */
			export var setCommands : /* zebra.Dummy.setCommands */ any;
						
			/**
			 * 
			 */
			export var mouseMoved : /* zebra.Dummy.mouseMoved */ any;
						
			/**
			 * 
			 */
			export var mouseEntered : /* zebra.Dummy.mouseEntered */ any;
						
			/**
			 * 
			 */
			export var mouseExited : /* zebra.Dummy.mouseExited */ any;
						
			/**
			 * 
			 */
			export var mouseDragged : /* zebra.Dummy.mouseDragged */ any;
						
			/**
			 * 
			 */
			export var $hasMethod : /* zebra.Dummy.$hasMethod */ any;
						
			/**
			 * 
			 */
			export var fireCompEvent : /* zebra.Dummy.fireCompEvent */ any;
						
			/**
			 * 
			 */
			export var getEventDestination : /* zebra.Dummy.getEventDestination */ any;
						
			/**
			 * 
			 */
			export var fireInputEvent : /* zebra.Dummy.fireInputEvent */ any;
						
			/**
			 * 
			 */
			export var addListener : /* zebra.Dummy.addListener */ any;
						
			/**
			 * 
			 */
			export var removeListener : /* zebra.Dummy.removeListener */ any;
						
			/**
			 * 
			 */
			export var addComponentListener : /* zebra.Dummy.addComponentListener */ any;
						
			/**
			 * 
			 */
			export var removeComponentListener : /* zebra.Dummy.removeComponentListener */ any;
						
			/**
			 * 
			 */
			export var addMouseListener : /* zebra.Dummy.addMouseListener */ any;
						
			/**
			 * 
			 */
			export var removeMouseListener : /* zebra.Dummy.removeMouseListener */ any;
						
			/**
			 * 
			 */
			export var addFocusListener : /* zebra.Dummy.addFocusListener */ any;
						
			/**
			 * 
			 */
			export var removeFocusListener : /* zebra.Dummy.removeFocusListener */ any;
						
			/**
			 * 
			 */
			export var addKeyListener : /* zebra.Dummy.addKeyListener */ any;
						
			/**
			 * 
			 */
			export var removeKeyListener : /* zebra.Dummy.removeKeyListener */ any;
						
			/**
			 * 
			 */
			export var a_ : /* zebra.Dummy.a_ */ any;
						
			/**
			 * 
			 */
			export var r_ : /* zebra.Dummy.r_ */ any;
						
			/**
			 * 
			 */
			export var m_l : /* zebra.Dummy.m_l */ any;
						
			/**
			 * 
			 */
			export var k_l : /* zebra.Dummy.k_l */ any;
						
			/**
			 * 
			 */
			export var f_l : /* zebra.Dummy.f_l */ any;
						
			/**
			 * 
			 */
			export var c_l : /* zebra.Dummy.c_l */ any;
						
			/**
			 * 
			 */
			export var $keyTyped : /*no type*/{};
						
			/**
			 * 
			 */
			export var $keyPressed : /*no type*/{};
						
			/**
			 * 
			 */
			export var $keyReleased : /* zebra.Dummy.$keyReleased */ any;
						
			/**
			 * 
			 */
			export var $mouseEntered : /* zebra.Dummy.$mouseEntered */ any;
						
			/**
			 * 
			 */
			export var $mouseExited : /* zebra.Dummy.$mouseExited */ any;
						
			/**
			 * 
			 */
			export var $mouseMoved : /* zebra.Dummy.$mouseMoved */ any;
						
			/**
			 * 
			 */
			export var $mouseReleased : /* zebra.Dummy.$mouseReleased */ any;
						
			/**
			 * 
			 */
			export var $mousePressed : /* zebra.Dummy.$mousePressed */ any;
						
			/**
			 * 
			 */
			export var recalcOffset : /* zebra.Dummy.recalcOffset */ any;
						
			/**
			 * 
			 */
			export var setStyles : /* zebra.Dummy.setStyles */ any;
						
			/**
			 * 
			 */
			export var setAttribute : /* zebra.Dummy.setAttribute */ any;
						
			/**
			 * 
			 */
			export var setFeatures : /* zebra.Dummy.setFeatures */ any;
						
			/**
			 * 
			 */
			export var $nativeListeners : /* zebra.Dummy.$nativeListeners */ any;
						
			/**
			 * 
			 */
			export var colors : /* zebra.Dummy.colors */ any;
						
			/**
			 * 
			 */
			export var views : /* zebra.Dummy.views */ any;
						
			/**
			 * 
			 */
			export var border : zebra.Dummy;
						
			/**
			 * 
			 */
			export var onerror : /* zebra.Dummy.onerror */ any;
						
			/**
			 * 
			 */
			export var onload : /* zebra.Dummy.onload */ any;
						
			/**
			 * 
			 */
			export var lineColors : /* zebra.Dummy.lineColors */ any;
						
			/**
			 * 
			 */
			export var setLineColors : /* zebra.Dummy.setLineColors */ any;
						
			/**
			 * 
			 */
			export var getLineHeight : /* zebra.Dummy.getLineHeight */ any;
						
			/**
			 * 
			 */
			export var setFont : /* zebra.Dummy.setFont */ any;
						
			/**
			 * 
			 */
			export var setColor : /* zebra.Dummy.setColor */ any;
						
			/**
			 * 
			 */
			export var getLineIndent : /* zebra.Dummy.getLineIndent */ any;
						
			/**
			 * 
			 */
			export var getLineSize : /* zebra.Dummy.getLineSize */ any;
						
			/**
			 * 
			 */
			export var getMaxOffset : /* zebra.Dummy.getMaxOffset */ any;
						
			/**
			 * 
			 */
			export var paintLine : /* zebra.Dummy.paintLine */ any;
						
			/**
			 * 
			 */
			export var textUpdated : /* zebra.Dummy.textUpdated */ any;
						
			/**
			 * 
			 */
			export var paintSelection : /* zebra.Dummy.paintSelection */ any;
						
			/**
			 * 
			 */
			export var setModel : /* zebra.Dummy.setModel */ any;
						
			/**
			 * 
			 */
			export var getModel : /* zebra.Dummy.getModel */ any;
						
			/**
			 * 
			 */
			export var getColor : /* zebra.Dummy.getColor */ any;
						
			/**
			 * 
			 */
			export var getFont : /* zebra.Dummy.getFont */ any;
						
			/**
			 * 
			 */
			export var setState : /* zebra.Dummy.setState */ any;
						
			/**
			 * 
			 */
			export var stateUpdated : /* zebra.Dummy.stateUpdated */ any;
						
			/**
			 * 
			 */
			export var syncState : /* zebra.Dummy.syncState */ any;
						
			/**
			 * 
			 */
			export var toViewId : /* zebra.Dummy.toViewId */ any;
						
			/**
			 * 
			 */
			export var _keyPressed : /* zebra.Dummy._keyPressed */ any;
						
			/**
			 * 
			 */
			export var _keyReleased : /* zebra.Dummy._keyReleased */ any;
						
			/**
			 * 
			 */
			export var _mouseEntered : /* zebra.Dummy._mouseEntered */ any;
						
			/**
			 * 
			 */
			export var _mousePressed : /* zebra.Dummy._mousePressed */ any;
						
			/**
			 * 
			 */
			export var _mouseReleased : /* zebra.Dummy._mouseReleased */ any;
						
			/**
			 * 
			 */
			export var childInputEvent : /* zebra.Dummy.childInputEvent */ any;
						
			/**
			 * 
			 */
			export var keyReleased : /* zebra.Dummy.keyReleased */ any;
						
			/**
			 * 
			 */
			export var mouseReleased : /* zebra.Dummy.mouseReleased */ any;
						
			/**
			 * 
			 */
			export var setFocusMarkerView : /* zebra.Dummy.setFocusMarkerView */ any;
						
			/**
			 * 
			 */
			export var setCanHaveFocus : /* zebra.Dummy.setCanHaveFocus */ any;
						
			/**
			 * 
			 */
			export var setFocusAnchorComponent : /* zebra.Dummy.setFocusAnchorComponent */ any;
						
			/**
			 * 
			 */
			export var fire : /* zebra.Dummy.fire */ any;
						
			/**
			 * 
			 */
			export var run : /* zebra.Dummy.run */ any;
						
			/**
			 * 
			 */
			export var setFireParams : /* zebra.Dummy.setFireParams */ any;
						
			/**
			 * 
			 */
			export var setGaps : /* zebra.Dummy.setGaps */ any;
						
			/**
			 * 
			 */
			export var updated : /* zebra.Dummy.updated */ any;
						
			/**
			 * 
			 */
			export var install : /* zebra.Dummy.install */ any;
						
			/**
			 * 
			 */
			export var uninstall : /* zebra.Dummy.uninstall */ any;
						
			/**
			 * 
			 */
			export var clearSelected : /* zebra.Dummy.clearSelected */ any;
						
			/**
			 * 
			 */
			export var parentStateUpdated : /* zebra.Dummy.parentStateUpdated */ any;
						
			/**
			 * 
			 */
			export var switched : /* zebra.Dummy.switched */ any;
						
			/**
			 * 
			 */
			export var mouseDragStarted : /* zebra.Dummy.mouseDragStarted */ any;
						
			/**
			 * 
			 */
			export var mouseDragEnded : /* zebra.Dummy.mouseDragEnded */ any;
						
			/**
			 * 
			 */
			export var getCursorType : /* zebra.Dummy.getCursorType */ any;
						
			/**
			 * 
			 */
			export var normalizeBarLoc : /* zebra.Dummy.normalizeBarLoc */ any;
						
			/**
			 * 
			 */
			export var setOrientation : /* zebra.Dummy.setOrientation */ any;
						
			/**
			 * 
			 */
			export var setGripperLoc : /* zebra.Dummy.setGripperLoc */ any;
						
			/**
			 * 
			 */
			export var setGap : /* zebra.Dummy.setGap */ any;
						
			/**
			 * 
			 */
			export var setLeftMinSize : /* zebra.Dummy.setLeftMinSize */ any;
						
			/**
			 * 
			 */
			export var setRightMinSize : /* zebra.Dummy.setRightMinSize */ any;
						
			/**
			 * 
			 */
			export var setGripperMovable : /* zebra.Dummy.setGripperMovable */ any;
						
			/**
			 * 
			 */
			export var toggle : /* zebra.Dummy.toggle */ any;
						
			/**
			 * 
			 */
			export var getSX : /* zebra.Dummy.getSX */ any;
						
			/**
			 * 
			 */
			export var getSY : /* zebra.Dummy.getSY */ any;
						
			/**
			 * 
			 */
			export var scrollXTo : /* zebra.Dummy.scrollXTo */ any;
						
			/**
			 * 
			 */
			export var scrollYTo : /* zebra.Dummy.scrollYTo */ any;
						
			/**
			 * 
			 */
			export var scrollTo : /* zebra.Dummy.scrollTo */ any;
						
			/**
			 * 
			 */
			export var makeVisible : /* zebra.Dummy.makeVisible */ any;
						
			/**
			 * 
			 */
			export var isInBundle : /* zebra.Dummy.isInBundle */ any;
						
			/**
			 * 
			 */
			export var amount : /* zebra.Dummy.amount */ any;
						
			/**
			 * 
			 */
			export var pixel2value : /* zebra.Dummy.pixel2value */ any;
						
			/**
			 * 
			 */
			export var value2pixel : /* zebra.Dummy.value2pixel */ any;
						
			/**
			 * 
			 */
			export var posChanged : /* zebra.Dummy.posChanged */ any;
						
			/**
			 * 
			 */
			export var fired : /* zebra.Dummy.fired */ any;
						
			/**
			 * 
			 */
			export var mouseClicked : /* zebra.Dummy.mouseClicked */ any;
						
			/**
			 * 
			 */
			export var setMaximum : /* zebra.Dummy.setMaximum */ any;
						
			/**
			 * 
			 */
			export var setPosition : /* zebra.Dummy.setPosition */ any;
						
			/**
			 * 
			 */
			export var setExtraSize : /* zebra.Dummy.setExtraSize */ any;
						
			/**
			 * 
			 */
			export var scrollStateUpdated : /* zebra.Dummy.scrollStateUpdated */ any;
						
			/**
			 * 
			 */
			export var setAutoHide : /* zebra.Dummy.setAutoHide */ any;
						
			/**
			 * 
			 */
			export var doScroll : /* zebra.Dummy.doScroll */ any;
						
			/**
			 * 
			 */
			export var scrolled : /* zebra.Dummy.scrolled */ any;
						
			/**
			 * 
			 */
			export var setIncrements : /* zebra.Dummy.setIncrements */ any;
						
			/**
			 * 
			 */
			export var next : /* zebra.Dummy.next */ any;
						
			/**
			 * 
			 */
			export var isTabEnabled : /* zebra.Dummy.isTabEnabled */ any;
						
			/**
			 * 
			 */
			export var drawMarker : /* zebra.Dummy.drawMarker */ any;
						
			/**
			 * 
			 */
			export var paintTab : /* zebra.Dummy.paintTab */ any;
						
			/**
			 * 
			 */
			export var getTabBounds : /* zebra.Dummy.getTabBounds */ any;
						
			/**
			 * 
			 */
			export var getTabAt : /* zebra.Dummy.getTabAt */ any;
						
			/**
			 * 
			 */
			export var select : /* zebra.Dummy.select */ any;
						
			/**
			 * 
			 */
			export var getTab : /* zebra.Dummy.getTab */ any;
						
			/**
			 * 
			 */
			export var setSideSpace : /* zebra.Dummy.setSideSpace */ any;
						
			/**
			 * 
			 */
			export var setPageGaps : /* zebra.Dummy.setPageGaps */ any;
						
			/**
			 * 
			 */
			export var setAlignment : /* zebra.Dummy.setAlignment */ any;
						
			/**
			 * 
			 */
			export var enableTab : /* zebra.Dummy.enableTab */ any;
						
			/**
			 * 
			 */
			export var pages : /* zebra.Dummy.pages */ any;
						
			/**
			 * 
			 */
			export var paintNums : /* zebra.Dummy.paintNums */ any;
						
			/**
			 * 
			 */
			export var getScaleSize : /* zebra.Dummy.getScaleSize */ any;
						
			/**
			 * 
			 */
			export var findNearest : /* zebra.Dummy.findNearest */ any;
						
			/**
			 * 
			 */
			export var value2loc : /* zebra.Dummy.value2loc */ any;
						
			/**
			 * 
			 */
			export var loc2value : /* zebra.Dummy.loc2value */ any;
						
			/**
			 * 
			 */
			export var nextValue : /* zebra.Dummy.nextValue */ any;
						
			/**
			 * 
			 */
			export var getBundleLoc : /* zebra.Dummy.getBundleLoc */ any;
						
			/**
			 * 
			 */
			export var getBundleBounds : /* zebra.Dummy.getBundleBounds */ any;
						
			/**
			 * 
			 */
			export var getNeighborPoint : /* zebra.Dummy.getNeighborPoint */ any;
						
			/**
			 * 
			 */
			export var getPointValue : /* zebra.Dummy.getPointValue */ any;
						
			/**
			 * 
			 */
			export var getView : /* zebra.Dummy.getView */ any;
						
			/**
			 * 
			 */
			export var isDecorative : /* zebra.Dummy.isDecorative */ any;
						
			/**
			 * 
			 */
			export var pause : /* zebra.Dummy.pause */ any;
						
			/**
			 * 
			 */
			export var play : /* zebra.Dummy.play */ any;
						
			/**
			 * 
			 */
			export var setBlinking : /* zebra.Dummy.setBlinking */ any;
						
			/**
			 * 
			 */
			export var setTextAlign : /* zebra.Dummy.setTextAlign */ any;
						
			/**
			 * 
			 */
			export var getTextRowColAt : /* zebra.Dummy.getTextRowColAt */ any;
						
			/**
			 * 
			 */
			export var findNextWord : /* zebra.Dummy.findNextWord */ any;
						
			/**
			 * 
			 */
			export var getSubString : /* zebra.Dummy.getSubString */ any;
						
			/**
			 * 
			 */
			export var removeSelected : /* zebra.Dummy.removeSelected */ any;
						
			/**
			 * 
			 */
			export var startSelection : /* zebra.Dummy.startSelection */ any;
						
			/**
			 * 
			 */
			export var keyTyped : /* zebra.Dummy.keyTyped */ any;
						
			/**
			 * 
			 */
			export var selectAll_command : /* zebra.Dummy.selectAll_command */ any;
						
			/**
			 * 
			 */
			export var nextWord_command : /* zebra.Dummy.nextWord_command */ any;
						
			/**
			 * 
			 */
			export var nextPage_command : /* zebra.Dummy.nextPage_command */ any;
						
			/**
			 * 
			 */
			export var isFiltered : /* zebra.Dummy.isFiltered */ any;
						
			/**
			 * 
			 */
			export var catchScrolled : /* zebra.Dummy.catchScrolled */ any;
						
			/**
			 * 
			 */
			export var drawCursor : /* zebra.Dummy.drawCursor */ any;
						
			/**
			 * 
			 */
			export var hasSelection : /* zebra.Dummy.hasSelection */ any;
						
			/**
			 * 
			 */
			export var setHint : /* zebra.Dummy.setHint */ any;
						
			/**
			 * 
			 */
			export var undo_command : /* zebra.Dummy.undo_command */ any;
						
			/**
			 * 
			 */
			export var redo_command : /* zebra.Dummy.redo_command */ any;
						
			/**
			 * 
			 */
			export var getStartSelection : /* zebra.Dummy.getStartSelection */ any;
						
			/**
			 * 
			 */
			export var getEndSelection : /* zebra.Dummy.getEndSelection */ any;
						
			/**
			 * 
			 */
			export var getSelectedText : /* zebra.Dummy.getSelectedText */ any;
						
			/**
			 * 
			 */
			export var focusGained : /* zebra.Dummy.focusGained */ any;
						
			/**
			 * 
			 */
			export var focusLost : /* zebra.Dummy.focusLost */ any;
						
			/**
			 * 
			 */
			export var repaintCursor : /* zebra.Dummy.repaintCursor */ any;
						
			/**
			 * 
			 */
			export var clearSelection : /* zebra.Dummy.clearSelection */ any;
						
			/**
			 * 
			 */
			export var pageSize : /* zebra.Dummy.pageSize */ any;
						
			/**
			 * 
			 */
			export var clipPaste : /* zebra.Dummy.clipPaste */ any;
						
			/**
			 * 
			 */
			export var clipCopy : /* zebra.Dummy.clipCopy */ any;
						
			/**
			 * 
			 */
			export var cut : /* zebra.Dummy.cut */ any;
						
			/**
			 * 
			 */
			export var setCursorView : /* zebra.Dummy.setCursorView */ any;
						
			/**
			 * 
			 */
			export var setPSByRowsCols : /* zebra.Dummy.setPSByRowsCols */ any;
						
			/**
			 * 
			 */
			export var setEditable : /* zebra.Dummy.setEditable */ any;
						
			/**
			 * 
			 */
			export var setSelectionColor : /* zebra.Dummy.setSelectionColor */ any;
			
			/**
			 * 
			 */
			var history : {
			}
						
			/**
			 * 
			 */
			export var isItemSelectable : /* zebra.Dummy.isItemSelectable */ any;
						
			/**
			 * 
			 */
			export var getSelected : /* zebra.Dummy.getSelected */ any;
						
			/**
			 * 
			 */
			export var lookupItem : /* zebra.Dummy.lookupItem */ any;
						
			/**
			 * 
			 */
			export var isSelected : /* zebra.Dummy.isSelected */ any;
						
			/**
			 * 
			 */
			export var pointerMoved : /* zebra.Dummy.pointerMoved */ any;
						
			/**
			 * 
			 */
			export var getItemLocation : /* zebra.Dummy.getItemLocation */ any;
						
			/**
			 * 
			 */
			export var getItemIdxAt : /* zebra.Dummy.getItemIdxAt */ any;
						
			/**
			 * 
			 */
			export var calcMaxItemSize : /* zebra.Dummy.calcMaxItemSize */ any;
						
			/**
			 * 
			 */
			export var repaintByOffsets : /* zebra.Dummy.repaintByOffsets */ any;
						
			/**
			 * 
			 */
			export var drawViewAt : /* zebra.Dummy.drawViewAt */ any;
						
			/**
			 * 
			 */
			export var drawView : /* zebra.Dummy.drawView */ any;
						
			/**
			 * 
			 */
			export var update : /* zebra.Dummy.update */ any;
						
			/**
			 * 
			 */
			export var fireSelected : /* zebra.Dummy.fireSelected */ any;
						
			/**
			 * 
			 */
			export var $select : /* zebra.Dummy.$select */ any;
						
			/**
			 * 
			 */
			export var elementInserted : /* zebra.Dummy.elementInserted */ any;
						
			/**
			 * 
			 */
			export var elementRemoved : /* zebra.Dummy.elementRemoved */ any;
						
			/**
			 * 
			 */
			export var elementSet : /* zebra.Dummy.elementSet */ any;
						
			/**
			 * 
			 */
			export var findSelectable : /* zebra.Dummy.findSelectable */ any;
						
			/**
			 * 
			 */
			export var setViewProvider : /* zebra.Dummy.setViewProvider */ any;
						
			/**
			 * 
			 */
			export var notifyScrollMan : /* zebra.Dummy.notifyScrollMan */ any;
						
			/**
			 * 
			 */
			export var setItemGap : /* zebra.Dummy.setItemGap */ any;
						
			/**
			 * 
			 */
			export var vVisibility : /* zebra.Dummy.vVisibility */ any;
						
			/**
			 * 
			 */
			export var widths : /* zebra.Dummy.widths */ any;
						
			/**
			 * 
			 */
			export var heights : /* zebra.Dummy.heights */ any;
						
			/**
			 * 
			 */
			export var comboValueUpdated : /* zebra.Dummy.comboValueUpdated */ any;
						
			/**
			 * 
			 */
			export var getCombo : /* zebra.Dummy.getCombo */ any;
						
			/**
			 * 
			 */
			export var contentUpdated : /* zebra.Dummy.contentUpdated */ any;
						
			/**
			 * 
			 */
			export var setSelectedIndex : /* zebra.Dummy.setSelectedIndex */ any;
						
			/**
			 * 
			 */
			export var isPadShown : /* zebra.Dummy.isPadShown */ any;
						
			/**
			 * 
			 */
			export var hidePad : /* zebra.Dummy.hidePad */ any;
						
			/**
			 * 
			 */
			export var showPad : /* zebra.Dummy.showPad */ any;
						
			/**
			 * 
			 */
			export var setList : /* zebra.Dummy.setList */ any;
						
			/**
			 * 
			 */
			export var setSelectionView : /* zebra.Dummy.setSelectionView */ any;
						
			/**
			 * 
			 */
			export var setMaxPadHeight : /* zebra.Dummy.setMaxPadHeight */ any;
						
			/**
			 * 
			 */
			export var isLayerActiveAt : /* zebra.Dummy.isLayerActiveAt */ any;
						
			/**
			 * 
			 */
			export var getWinType : /* zebra.Dummy.getWinType */ any;
						
			/**
			 * 
			 */
			export var addWin : /* zebra.Dummy.addWin */ any;
						
			/**
			 * 
			 */
			export var winsStack : /* zebra.Dummy.winsStack */ any;
						
			/**
			 * 
			 */
			export var winsTypes : /* zebra.Dummy.winsTypes */ any;
						
			/**
			 * 
			 */
			export var isActive : /* zebra.Dummy.isActive */ any;
						
			/**
			 * 
			 */
			export var insideCorner : /* zebra.Dummy.insideCorner */ any;
						
			/**
			 * 
			 */
			export var winOpened : /* zebra.Dummy.winOpened */ any;
						
			/**
			 * 
			 */
			export var winActivated : /* zebra.Dummy.winActivated */ any;
						
			/**
			 * 
			 */
			export var isMaximized : /* zebra.Dummy.isMaximized */ any;
						
			/**
			 * 
			 */
			export var createCaptionPan : /* zebra.Dummy.createCaptionPan */ any;
						
			/**
			 * 
			 */
			export var createContentPan : /* zebra.Dummy.createContentPan */ any;
						
			/**
			 * 
			 */
			export var createTitle : /* zebra.Dummy.createTitle */ any;
						
			/**
			 * 
			 */
			export var setIcon : /* zebra.Dummy.setIcon */ any;
						
			/**
			 * 
			 */
			export var itemSelected : /* zebra.Dummy.itemSelected */ any;
						
			/**
			 * 
			 */
			export var setCaption : /* zebra.Dummy.setCaption */ any;
						
			/**
			 * 
			 */
			export var getCheck : /* zebra.Dummy.getCheck */ any;
						
			/**
			 * 
			 */
			export var getContent : /* zebra.Dummy.getContent */ any;
						
			/**
			 * 
			 */
			export var getSub : /* zebra.Dummy.getSub */ any;
						
			/**
			 * 
			 */
			export var hideSub : /* zebra.Dummy.hideSub */ any;
						
			/**
			 * 
			 */
			export var activateSub : /* zebra.Dummy.activateSub */ any;
						
			/**
			 * 
			 */
			export var setCheckState : /* zebra.Dummy.setCheckState */ any;
						
			/**
			 * 
			 */
			export var getCheckState : /* zebra.Dummy.getCheckState */ any;
						
			/**
			 * 
			 */
			export var setCheckManager : /* zebra.Dummy.setCheckManager */ any;
						
			/**
			 * 
			 */
			export var childCompEvent : /* zebra.Dummy.childCompEvent */ any;
						
			/**
			 * 
			 */
			export var getMenuItem : /* zebra.Dummy.getMenuItem */ any;
						
			/**
			 * 
			 */
			export var hasSelectableItems : /* zebra.Dummy.hasSelectableItems */ any;
						
			/**
			 * 
			 */
			export var getMenuAt : /* zebra.Dummy.getMenuAt */ any;
						
			/**
			 * 
			 */
			export var setMenuAt : /* zebra.Dummy.setMenuAt */ any;
						
			/**
			 * 
			 */
			export var indexMenuOf : /* zebra.Dummy.indexMenuOf */ any;
						
			/**
			 * 
			 */
			export var $canceled : /* zebra.Dummy.$canceled */ any;
						
			/**
			 * 
			 */
			export var $topMenu : /* zebra.Dummy.$topMenu */ any;
						
			/**
			 * 
			 */
			export var $hideMenu : /* zebra.Dummy.$hideMenu */ any;
						
			/**
			 * 
			 */
			export var $childMenu : /* zebra.Dummy.$childMenu */ any;
						
			/**
			 * 
			 */
			export var $showSubMenu : /* zebra.Dummy.$showSubMenu */ any;
						
			/**
			 * 
			 */
			export var triggerSelectionByPos : /* zebra.Dummy.triggerSelectionByPos */ any;
						
			/**
			 * 
			 */
			export var setMenubar : /* zebra.Dummy.setMenubar */ any;
						
			/**
			 * 
			 */
			export var hideTooltip : /* zebra.Dummy.hideTooltip */ any;
						
			/**
			 * 
			 */
			export var fetchEditedValue : /* zebra.Dummy.fetchEditedValue */ any;
						
			/**
			 * 
			 */
			export var getEditor : /* zebra.Dummy.getEditor */ any;
						
			/**
			 * 
			 */
			export var shouldStart : /* zebra.Dummy.shouldStart */ any;
						
			/**
			 * 
			 */
			export var shouldCancel : /* zebra.Dummy.shouldCancel */ any;
						
			/**
			 * 
			 */
			export var shouldFinish : /* zebra.Dummy.shouldFinish */ any;
						
			/**
			 * 
			 */
			export var getCaptionPS : /* zebra.Dummy.getCaptionPS */ any;
						
			/**
			 * 
			 */
			export var captionResized : /* zebra.Dummy.captionResized */ any;
						
			/**
			 * 
			 */
			export var calcRowColAt : /* zebra.Dummy.calcRowColAt */ any;
						
			/**
			 * 
			 */
			export var getCaptionAt : /* zebra.Dummy.getCaptionAt */ any;
						
			/**
			 * 
			 */
			export var getTitleView : /* zebra.Dummy.getTitleView */ any;
						
			/**
			 * 
			 */
			export var getTitle : /* zebra.Dummy.getTitle */ any;
						
			/**
			 * 
			 */
			export var putTitle : /* zebra.Dummy.putTitle */ any;
						
			/**
			 * 
			 */
			export var setTitleAlignments : /* zebra.Dummy.setTitleAlignments */ any;
						
			/**
			 * 
			 */
			export var setTitleBackground : /* zebra.Dummy.setTitleBackground */ any;
						
			/**
			 * 
			 */
			export var titles : /* zebra.Dummy.titles */ any;
						
			/**
			 * 
			 */
			export var setSortable : /* zebra.Dummy.setSortable */ any;
						
			/**
			 * 
			 */
			export var matrixSorted : /* zebra.Dummy.matrixSorted */ any;
						
			/**
			 * 
			 */
			export var matrixResized : /* zebra.Dummy.matrixResized */ any;
						
			/**
			 * 
			 */
			export var $topY : /* zebra.Dummy.$topY */ any;
						
			/**
			 * 
			 */
			export var $leftX : /* zebra.Dummy.$leftX */ any;
						
			/**
			 * 
			 */
			export var colVisibility : /* zebra.Dummy.colVisibility */ any;
						
			/**
			 * 
			 */
			export var rowVisibility : /* zebra.Dummy.rowVisibility */ any;
						
			/**
			 * 
			 */
			export var $se : /* zebra.Dummy.$se */ any;
						
			/**
			 * 
			 */
			export var getXOrigin : /* zebra.Dummy.getXOrigin */ any;
						
			/**
			 * 
			 */
			export var getYOrigin : /* zebra.Dummy.getYOrigin */ any;
						
			/**
			 * 
			 */
			export var getColPSWidth : /* zebra.Dummy.getColPSWidth */ any;
						
			/**
			 * 
			 */
			export var getRowPSHeight : /* zebra.Dummy.getRowPSHeight */ any;
						
			/**
			 * 
			 */
			export var getGridRows : /* zebra.Dummy.getGridRows */ any;
						
			/**
			 * 
			 */
			export var getGridCols : /* zebra.Dummy.getGridCols */ any;
						
			/**
			 * 
			 */
			export var getRowHeight : /* zebra.Dummy.getRowHeight */ any;
						
			/**
			 * 
			 */
			export var getColWidth : /* zebra.Dummy.getColWidth */ any;
						
			/**
			 * 
			 */
			export var getCellsVisibility : /* zebra.Dummy.getCellsVisibility */ any;
						
			/**
			 * 
			 */
			export var getColX : /* zebra.Dummy.getColX */ any;
						
			/**
			 * 
			 */
			export var getRowY : /* zebra.Dummy.getRowY */ any;
						
			/**
			 * 
			 */
			export var iColVisibility : /* zebra.Dummy.iColVisibility */ any;
						
			/**
			 * 
			 */
			export var iRowVisibility : /* zebra.Dummy.iRowVisibility */ any;
						
			/**
			 * 
			 */
			export var getTopCaptionHeight : /* zebra.Dummy.getTopCaptionHeight */ any;
						
			/**
			 * 
			 */
			export var getLeftCaptionWidth : /* zebra.Dummy.getLeftCaptionWidth */ any;
						
			/**
			 * 
			 */
			export var stopEditing : /* zebra.Dummy.stopEditing */ any;
						
			/**
			 * 
			 */
			export var setDrawLines : /* zebra.Dummy.setDrawLines */ any;
						
			/**
			 * 
			 */
			export var setPosMarkerMode : /* zebra.Dummy.setPosMarkerMode */ any;
						
			/**
			 * 
			 */
			export var repaintRows : /* zebra.Dummy.repaintRows */ any;
						
			/**
			 * 
			 */
			export var cellByLocation : /* zebra.Dummy.cellByLocation */ any;
						
			/**
			 * 
			 */
			export var clearSelect : /* zebra.Dummy.clearSelect */ any;
						
			/**
			 * 
			 */
			export var laidout : /* zebra.Dummy.laidout */ any;
						
			/**
			 * 
			 */
			export var paintNet : /* zebra.Dummy.paintNet */ any;
						
			/**
			 * 
			 */
			export var paintData : /* zebra.Dummy.paintData */ any;
						
			/**
			 * 
			 */
			export var paintPosMarker : /* zebra.Dummy.paintPosMarker */ any;
						
			/**
			 * 
			 */
			export var rPsMetric : /* zebra.Dummy.rPsMetric */ any;
						
			/**
			 * 
			 */
			export var getPSSize : /* zebra.Dummy.getPSSize */ any;
						
			/**
			 * 
			 */
			export var rCustomMetric : /* zebra.Dummy.rCustomMetric */ any;
						
			/**
			 * 
			 */
			export var setRowHeight : /* zebra.Dummy.setRowHeight */ any;
						
			/**
			 * 
			 */
			export var setRowsHeight : /* zebra.Dummy.setRowsHeight */ any;
						
			/**
			 * 
			 */
			export var setColWidth : /* zebra.Dummy.setColWidth */ any;
						
			/**
			 * 
			 */
			export var setColsWidth : /* zebra.Dummy.setColsWidth */ any;
						
			/**
			 * 
			 */
			export var cellModified : /* zebra.Dummy.cellModified */ any;
						
			/**
			 * 
			 */
			export var setEditorProvider : /* zebra.Dummy.setEditorProvider */ any;
						
			/**
			 * 
			 */
			export var setUsePsMetric : /* zebra.Dummy.setUsePsMetric */ any;
						
			/**
			 * 
			 */
			export var setCellPadding : /* zebra.Dummy.setCellPadding */ any;
						
			/**
			 * 
			 */
			export var setCellPaddings : /* zebra.Dummy.setCellPaddings */ any;
						
			/**
			 * 
			 */
			export var setLineColor : /* zebra.Dummy.setLineColor */ any;
						
			/**
			 * 
			 */
			export var setLineSize : /* zebra.Dummy.setLineSize */ any;
						
			/**
			 * 
			 */
			export var startEditing : /* zebra.Dummy.startEditing */ any;
						
			/**
			 * 
			 */
			export var getDataToEdit : /* zebra.Dummy.getDataToEdit */ any;
						
			/**
			 * 
			 */
			export var setEditedData : /* zebra.Dummy.setEditedData */ any;
						
			/**
			 * 
			 */
			export var colWidths : /* zebra.Dummy.colWidths */ any;
						
			/**
			 * 
			 */
			export var rowHeights : /* zebra.Dummy.rowHeights */ any;
						
			/**
			 * 
			 */
			export var visibility : /* zebra.Dummy.visibility */ any;
						
			/**
			 * 
			 */
			export var getMinWidth : /* zebra.Dummy.getMinWidth */ any;
						
			/**
			 * 
			 */
			export var calcColWidths : /* zebra.Dummy.calcColWidths */ any;
						
			/**
			 * 
			 */
			export var recalcPS : /* zebra.Dummy.recalcPS */ any;
						
			/**
			 * 
			 */
			export var $widths : /* zebra.Dummy.$widths */ any;
						
			/**
			 * 
			 */
			export var $props : /* zebra.Dummy.$props */ any;
						
			/**
			 * 
			 */
			export var isOpen : /* zebra.Dummy.isOpen */ any;
						
			/**
			 * 
			 */
			export var getItemMetrics : /* zebra.Dummy.getItemMetrics */ any;
						
			/**
			 * 
			 */
			export var togglePressed : /* zebra.Dummy.togglePressed */ any;
						
			/**
			 * 
			 */
			export var itemPressed : /* zebra.Dummy.itemPressed */ any;
						
			/**
			 * 
			 */
			export var getItemBounds : /* zebra.Dummy.getItemBounds */ any;
						
			/**
			 * 
			 */
			export var getToggleBounds : /* zebra.Dummy.getToggleBounds */ any;
						
			/**
			 * 
			 */
			export var getToggleView : /* zebra.Dummy.getToggleView */ any;
						
			/**
			 * 
			 */
			export var recalc_ : /* zebra.Dummy.recalc_ */ any;
						
			/**
			 * 
			 */
			export var isOpen_ : /* zebra.Dummy.isOpen_ */ any;
						
			/**
			 * 
			 */
			export var getIM : /* zebra.Dummy.getIM */ any;
						
			/**
			 * 
			 */
			export var getItemAt : /* zebra.Dummy.getItemAt */ any;
						
			/**
			 * 
			 */
			export var getItemAtInBranch : /* zebra.Dummy.getItemAtInBranch */ any;
						
			/**
			 * 
			 */
			export var getIconView : /* zebra.Dummy.getIconView */ any;
						
			/**
			 * 
			 */
			export var getIconBounds : /* zebra.Dummy.getIconBounds */ any;
						
			/**
			 * 
			 */
			export var getToggleSize : /* zebra.Dummy.getToggleSize */ any;
						
			/**
			 * 
			 */
			export var isOverVisibleArea : /* zebra.Dummy.isOverVisibleArea */ any;
						
			/**
			 * 
			 */
			export var findOpened : /* zebra.Dummy.findOpened */ any;
						
			/**
			 * 
			 */
			export var findNext : /* zebra.Dummy.findNext */ any;
						
			/**
			 * 
			 */
			export var findPrev : /* zebra.Dummy.findPrev */ any;
						
			/**
			 * 
			 */
			export var findLast : /* zebra.Dummy.findLast */ any;
						
			/**
			 * 
			 */
			export var prevVisible : /* zebra.Dummy.prevVisible */ any;
						
			/**
			 * 
			 */
			export var isVerVisible : /* zebra.Dummy.isVerVisible */ any;
						
			/**
			 * 
			 */
			export var nextVisible : /* zebra.Dummy.nextVisible */ any;
						
			/**
			 * 
			 */
			export var nextVisibleInBranch : /* zebra.Dummy.nextVisibleInBranch */ any;
						
			/**
			 * 
			 */
			export var paintSelectedItem : /* zebra.Dummy.paintSelectedItem */ any;
						
			/**
			 * 
			 */
			export var paintTree : /* zebra.Dummy.paintTree */ any;
						
			/**
			 * 
			 */
			export var paintBranch : /* zebra.Dummy.paintBranch */ any;
						
			/**
			 * 
			 */
			export var y_ : /* zebra.Dummy.y_ */ any;
						
			/**
			 * 
			 */
			export var paintChild : /* zebra.Dummy.paintChild */ any;
						
			/**
			 * 
			 */
			export var nextPage : /* zebra.Dummy.nextPage */ any;
						
			/**
			 * 
			 */
			export var toggleAll : /* zebra.Dummy.toggleAll */ any;
						
			/**
			 * 
			 */
			export var itemInserted : /* zebra.Dummy.itemInserted */ any;
						
			/**
			 * 
			 */
			export var itemRemoved : /* zebra.Dummy.itemRemoved */ any;
						
			/**
			 * 
			 */
			export var itemModified : /* zebra.Dummy.itemModified */ any;
						
			/**
			 * 
			 */
			export var viewSizes : /* zebra.Dummy.viewSizes */ any;
						
			/**
			 * 
			 */
			export var shouldStartEdit : /* zebra.Dummy.shouldStartEdit */ any;
						
			/**
			 * 
			 */
			export var paintItem : /* zebra.Dummy.paintItem */ any;
						
			/**
			 * 
			 */
			export var se : /* zebra.Dummy.se */ any;
						
			/**
			 * 
			 */
			export var adjustLocation : /* zebra.Dummy.adjustLocation */ any;
						
			/**
			 * 
			 */
			export var setContent : /* zebra.Dummy.setContent */ any;
						
			/**
			 * 
			 */
			export var setStyle : /* zebra.Dummy.setStyle */ any;
						
			/**
			 * 
			 */
			export var isInInvisibleState : /* zebra.Dummy.isInInvisibleState */ any;
						
			/**
			 * 
			 */
			export var onmousedown : /* zebra.Dummy.onmousedown */ any;
						
			/**
			 * 
			 */
			export var onmouseup : /* zebra.Dummy.onmouseup */ any;
						
			/**
			 * 
			 */
			export var onkeydown : /* zebra.Dummy.onkeydown */ any;
						
			/**
			 * 
			 */
			export var onkeyup : /* zebra.Dummy.onkeyup */ any;
						
			/**
			 * 
			 */
			export var onkeypress : /* zebra.Dummy.onkeypress */ any;
			
			/**
			 * 
			 */
			var globalCompListener : {
								
				/**
				 * 
				 */
				compShown : /* zebra.Dummy.globalCompListener.compShown */ any;
								
				/**
				 * 
				 */
				compMoved : /* zebra.Dummy.globalCompListener.compMoved */ any;
								
				/**
				 * 
				 */
				compRemoved : /* zebra.Dummy.globalCompListener.compRemoved */ any;
								
				/**
				 * 
				 */
				compSized : /* zebra.Dummy.globalCompListener.compSized */ any;
			}
			
			/**
			 * 
			 */
			var globalWinListener : {
								
				/**
				 * 
				 */
				winActivated : /* zebra.Dummy.globalWinListener.winActivated */ any;
			}
						
			/**
			 * 
			 */
			export var detectAt : /* zebra.Dummy.detectAt */ any;
						
			/**
			 * 
			 */
			export var itemByComponent : /* zebra.Dummy.itemByComponent */ any;
						
			/**
			 * 
			 */
			export var createItem : /* zebra.Dummy.createItem */ any;
		}
				
		/**
		 * 
		 */
		export var intersection : /*no type*/{};
				
		/**
		 * 
		 */
		export var unite : /*no type*/{};
				
		/**
		 * 
		 */
		export var parseXML : /*no type*/{};
				
		/**
		 * 
		 */
		export var getRequest : /*no type*/{};
				
		/**
		 * 
		 */
		export var $deviceRatio : number;
				
		/**
		 * 
		 */
		export var $applyRenderExploit : boolean;
				
		/**
		 * 
		 */
		export var $windowSize : /*no type*/{};
				
		/**
		 * 
		 */
		export var $measure : /*no type*/{};
		
		/**
		 * 
		 */
		var $canvas : {
						
			/**
			 * 
			 */
			size : /*no type*/{};
						
			/**
			 * 
			 */
			context : /* zebra.$canvas.context */ any;
						
			/**
			 * 
			 */
			create : /* zebra.$canvas.create */ any;
						
			/**
			 * 
			 */
			ratio : /* zebra.$canvas.ratio */ any;
		}
				
		/**
		 * 
		 */
		export var clipboardTriggerKey : number;
				
		/**
		 * 
		 */
		export var $getPS : /*no type*/{};
				
		/**
		 * 
		 */
		export var $cvp : /*no type*/{};
		
		/**
		 * 
		 */
		var Cursor : {
						
			/**
			 * 
			 */
			DEFAULT : string;
						
			/**
			 * 
			 */
			MOVE : string;
						
			/**
			 * 
			 */
			WAIT : string;
						
			/**
			 * 
			 */
			TEXT : string;
						
			/**
			 * 
			 */
			HAND : string;
						
			/**
			 * 
			 */
			NE_RESIZE : string;
						
			/**
			 * 
			 */
			SW_RESIZE : string;
						
			/**
			 * 
			 */
			SE_RESIZE : string;
						
			/**
			 * 
			 */
			NW_RESIZE : string;
						
			/**
			 * 
			 */
			S_RESIZE : string;
						
			/**
			 * 
			 */
			W_RESIZE : string;
						
			/**
			 * 
			 */
			N_RESIZE : string;
						
			/**
			 * 
			 */
			E_RESIZE : string;
						
			/**
			 * 
			 */
			COL_RESIZE : string;
						
			/**
			 * 
			 */
			HELP : string;
		}
				
		/**
		 * 
		 */
		export var loadImage : /*no type*/{};
				
		/**
		 * 
		 */
		export var StackLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BorderLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var RasterLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var FlowLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ListLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PercentLayout : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Constraints : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var GridLayout : /* zebra.Dummy */ any;
		
		/**
		 * 
		 */
		var rgb : {
						
			/**
			 * 
			 */
			white : zebra.rgb;
						
			/**
			 * 
			 */
			red : zebra.rgb;
						
			/**
			 * 
			 */
			blue : zebra.rgb;
						
			/**
			 * 
			 */
			green : zebra.rgb;
						
			/**
			 * 
			 */
			gray : zebra.rgb;
						
			/**
			 * 
			 */
			lightGray : zebra.rgb;
						
			/**
			 * 
			 */
			darkGray : zebra.rgb;
						
			/**
			 * 
			 */
			orange : zebra.rgb;
						
			/**
			 * 
			 */
			yellow : zebra.rgb;
						
			/**
			 * 
			 */
			pink : zebra.rgb;
						
			/**
			 * 
			 */
			cyan : zebra.rgb;
						
			/**
			 * 
			 */
			magenta : zebra.rgb;
						
			/**
			 * 
			 */
			darkBlue : zebra.rgb;
						
			/**
			 * 
			 */
			transparent : zebra.rgb;
			
			/**
			 * 
			 */
			prototype : {
								
				/**
				 * 
				 */
				toString : /* zebra.rgb.prototype.toString */ any;
			}
						
			/**
			 * 
			 */
			export var black : zebra.rgb;
		}
				
		/**
		 * 
		 */
		export var Position : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var SingleColPosition : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Bag : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var QS : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HTTP : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Service : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var JRPC : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var XRPC : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TextModel : /* zebra.Layout */ any;
				
		/**
		 * 
		 */
		export var Text : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var SingleLineTxt : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ListModel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Item : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TreeModel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Matrix : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var MouseWheelSupport : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TouchHandler : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var View : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Render : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Raised : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Sunken : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Etched : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Dotted : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Border : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var RoundBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Gradient : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Radial : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Picture : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Pattern : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompositeView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ViewSet : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var InputEvent : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var KeyEvent : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var MouseEvent : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Panel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BaseLayer : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var RootLayer : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ViewPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ImagePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Manager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PaintManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PaintManImpl : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var FocusManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CommandManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CursorManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var EventManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var zCanvas : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Line : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var StringRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TextRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BoldTextRender : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PasswordText : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TabBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TitledBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Label : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var MLabel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BoldLabel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ImageLabel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var StatePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var EvStatePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompositeEvStatePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Button : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BorderPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var SwitchManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Group : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Checkbox : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Radiobox : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var SplitPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Progress : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Link : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ExtendablePan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ScrollManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Scroll : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ScrollPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Tabs : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Slider : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var StatusBar : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Toolbar : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var VideoPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ArrowView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CheckboxView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BunldeView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var RadioView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var MobileScrollMan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TextField : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TextArea : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PassTextField : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BaseList : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var List : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompList : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Combo : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ComboArrowView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var WinLayer : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Window : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var MenuItem : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Menu : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Menubar : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PopupLayer : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Tooltip : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var PopupManager : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var WindowTitleView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Metrics : /* zebra.Layout */ any;
				
		/**
		 * 
		 */
		export var DefViews : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var DefEditors : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BaseCaption : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var GridCaption : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompGridCaption : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Grid : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var GridStretchPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var BaseTree : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var Tree : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var CompTree : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var TreeSignView : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HtmlElement : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HtmlTextInput : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HtmlContent : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HtmlTextField : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var HtmlTextArea : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ShaperBorder : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var ShaperPan : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var FormTreeModel : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		export var $constraints : /* zebra.$constraints */ any;
				
		/**
		 * 
		 */
		export var getDirectChild : /* zebra.getDirectChild */ any;
				
		/**
		 * 
		 */
		export var getDirectAt : /* zebra.getDirectAt */ any;
				
		/**
		 * 
		 */
		export var getTopParent : /* zebra.getTopParent */ any;
				
		/**
		 * 
		 */
		export var toParentOrigin : /* zebra.toParentOrigin */ any;
				
		/**
		 * 
		 */
		export var toChildOrigin : /* zebra.toChildOrigin */ any;
				
		/**
		 * 
		 */
		export var getMaxPreferredSize : /* zebra.getMaxPreferredSize */ any;
				
		/**
		 * 
		 */
		export var isAncestorOf : /* zebra.isAncestorOf */ any;
				
		/**
		 * 
		 */
		export var newInstance : /* zebra.newInstance */ any;
				
		/**
		 * 
		 */
		export var Runner : /* zebra.Runner */ any;
				
		/**
		 * 
		 */
		export var findInTree : /* zebra.findInTree */ any;
				
		/**
		 * 
		 */
		export var isIntersect : /* zebra.isIntersect */ any;
				
		/**
		 * 
		 */
		export var isLetter : /* zebra.isLetter */ any;
		
		/**
		 * 
		 */
		namespace Listeners{
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				add : /* zebra.Listeners.prototype.add */ any;
								
				/**
				 * 
				 */
				remove : /* zebra.Listeners.prototype.remove */ any;
			}
		}
				
		/**
		 * 
		 */
		export var ListenersClass : /* zebra.ListenersClass */ any;
		
		/**
		 * 
		 */
		namespace TaskCotext{
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				shutdown : /* zebra.TaskCotext.prototype.shutdown */ any;
								
				/**
				 * 
				 */
				run : /* zebra.TaskCotext.prototype.run */ any;
								
				/**
				 * 
				 */
				pause : /* zebra.TaskCotext.prototype.pause */ any;
			}
		}
				
		/**
		 * 
		 */
		export var task : /* zebra.task */ any;
				
		/**
		 * 
		 */
		export var shutdownAll : /* zebra.shutdownAll */ any;
				
		/**
		 * 
		 */
		export var ID : /* zebra.ID */ any;
				
		/**
		 * 
		 */
		export var $sleep : /* zebra.$sleep */ any;
				
		/**
		 * 
		 */
		export var b64encode : /* zebra.b64encode */ any;
				
		/**
		 * 
		 */
		export var b64decode : /* zebra.b64decode */ any;
				
		/**
		 * 
		 */
		export var dateToISO8601 : /* zebra.dateToISO8601 */ any;
				
		/**
		 * 
		 */
		export var ISO8601toDate : /* zebra.ISO8601toDate */ any;
		
		/**
		 * 
		 */
		namespace $Request{
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				open : /* zebra.$Request.prototype.open */ any;
								
				/**
				 * 
				 */
				send : /* zebra.$Request.prototype.send */ any;
								
				/**
				 * 
				 */
				abort : /* zebra.$Request.prototype.abort */ any;
								
				/**
				 * 
				 */
				setRequestHeader : /* zebra.$Request.prototype.setRequestHeader */ any;
								
				/**
				 * 
				 */
				getResponseHeader : /* zebra.$Request.prototype.getResponseHeader */ any;
								
				/**
				 * 
				 */
				getAllResponseHeaders : /* zebra.$Request.prototype.getAllResponseHeaders */ any;
			}
		}
				
		/**
		 * 
		 */
		export var GET : /* zebra.GET */ any;
				
		/**
		 * 
		 */
		export var POST : /* zebra.POST */ any;
		
		/**
		 * 
		 */
		namespace Base64{
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				toString : /* zebra.Base64.prototype.toString */ any;
								
				/**
				 * 
				 */
				decode : /* zebra.Base64.prototype.decode */ any;
			}
		}
				
		/**
		 * 
		 */
		export var descent : /* zebra.descent */ any;
				
		/**
		 * 
		 */
		export var ascent : /* zebra.ascent */ any;
				
		/**
		 * 
		 */
		export var $canvases : /* zebra.$canvases */ any;
				
		/**
		 * 
		 */
		export var $elBoundsUpdated : /* zebra.$elBoundsUpdated */ any;
				
		/**
		 * 
		 */
		export var $contains : /* zebra.$contains */ any;
				
		/**
		 * 
		 */
		export var $view : /* zebra.$view */ any;
				
		/**
		 * 
		 */
		export var $detectZCanvas : /* zebra.$detectZCanvas */ any;
		
		/**
		 * 
		 */
		namespace Font{
			
			/**
			 * 
			 */
			var prototype : {
								
				/**
				 * 
				 */
				stringWidth : /* zebra.Font.prototype.stringWidth */ any;
								
				/**
				 * 
				 */
				charsWidth : /* zebra.Font.prototype.charsWidth */ any;
								
				/**
				 * 
				 */
				toString : /* zebra.Font.prototype.toString */ any;
			}
		}
				
		/**
		 * 
		 */
		export var makeFullyVisible : /* zebra.makeFullyVisible */ any;
				
		/**
		 * 
		 */
		export var calcOrigin : /* zebra.calcOrigin */ any;
				
		/**
		 * 
		 */
		export var $ViewsSetter : /* zebra.$ViewsSetter */ any;
				
		/**
		 * 
		 */
		export var showModalWindow : /* zebra.showModalWindow */ any;
				
		/**
		 * 
		 */
		export var showWindow : /* zebra.showWindow */ any;
				
		/**
		 * 
		 */
		export var showPopupMenu : /* zebra.showPopupMenu */ any;
				
		/**
		 * 
		 */
		export var activateWindow : /* zebra.activateWindow */ any;
				
		/**
		 * 
		 */
		export var $IM : /* zebra.$IM */ any;
	}
		
	/**
	 * 
	 */
	export var CNAME : string;
		
	/**
	 * 
	 * @param f 
	 * @return  
	 */
	function $FN(f : any): string;
	
	/**
	 * 
	 */
	var namespaces : {
	}
		
	/**
	 * 
	 * @param nsname 
	 * @param dontCreate 
	 * @return  
	 */
	function namespace(nsname : string, dontCreate : any): (name : any) => void;
		
	/**
	 * Faster match operation analogues:
	 * Math.floor(f)  =>  ~~(a)
	 * Math.round(f)  =>  (f + 0.5) | 0
	 * @param o 
	 * @return  
	 */
	function isString(o : any): boolean;
		
	/**
	 * 
	 * @param o 
	 * @return  
	 */
	function isNumber(o : any): boolean;
		
	/**
	 * 
	 * @param o 
	 * @return  
	 */
	function isBoolean(o : any): boolean;
		
	/**
	 * 
	 */
	export var version : string;
		
	/**
	 * 
	 * @param obj 
	 * @param name 
	 * @return  
	 */
	function getPropertySetter(obj : zebra.GetPropertySetter0, name : Array<any> | string): zebra.GetPropertySetterRet;
		
	/**
	 * target - is object whose properties have to populated
	 * p      - properties
	 * @param target 
	 * @param p 
	 */
	function properties(target : zebra.Dummy, p : /* zebra.Dummy.findAll.!0 */ any | (() => () => void)): void;
		
	/**
	 * 
	 */
	interface Singleton {
				
		/**
		 * 
		 * @param clazz 
		 * @return  
		 */
		new (clazz : any): any;		
		/**
		 * 
		 * @return  
		 */
		new (): /* zebra.Dummy.constraints */ any;
	}

	
	/**
	 * * Interface is a special class that is used to "pitch" a class with a some marker.
	 * * It is not supposed an interface directly rules which method the class has to implement.
	 * 
	 *        // declare "I" interface
	 *        var I = zebra.Interface();
	 * 
	 *        // declare "A" class that implements "I" interface
	 *        var A = zebra.Class(I, [ function m() {} ]);
	 * 
	 *        // instantiate "A" class
	 *        var a = new A();
	 *        zebra.instanceOf(a, I);  // true
	 *        zebra.instanceOf(a, A);  // true
	 * 
	 * 
	 * * @return {Function} an interface
	 * * @method Interface
	 * * @api  zebra.Interface()
	 */
	interface Interface {
				
		/**
		 * 
		 * @return  
		 */
		new (): () => void;
				
		/**
		 * 
		 */
		$clazz : /* zebra.Interface */ any;
				
		/**
		 * 
		 */
		$hash$ : string;
		
		/**
		 * 
		 */
		$parents : {
		}
	}
	
	/**
	 * * Class declaration method. Zebra easy OOP concept supports:
	 * *
	 * *
	 * *  __Single class inheritance.__ Any class can extend an another zebra class
	 * 
	 *        // declare class "A" that with one method "a"
	 *        var A = zebra.Class([
	 *            function a() { ... }
	 *        ]);
	 * 
	 *        // declare class "B" that inherits class "A"
	 *        var B = zebra.Class(A, []);
	 * 
	 *        // instantiate class "B" and call method "a"
	 *        var b = new B();
	 *        b.a();
	 * 
	 *    __Class method overriding.__ Override a parent class method implementation
	 * 
	 *        // declare class "A" that with one method "a"
	 *        var A = zebra.Class([
	 *            function a() { ... }
	 *        ]);
	 * 
	 *        // declare class "B" that inherits class "A"
	 *        // and overrides method a with an own implementation
	 *        var B = zebra.Class(A, [
	 *            function a() { ... }
	 *        ]);
	 * 
	 *    __Class method overloading.__ You can declare methods with the same names but
	 *    different parameter list. The methods are considered as different methods
	 * 
	 *        // declare class "A" that with one method "a"
	 *        var A = zebra.Class([
	 *            function a() { ... }
	 *        ]);
	 * 
	 *        // declare class "B" that inherits class "A"
	 *        // and overloads method "a" with another number of
	 *        // parameters
	 *        var B = zebra.Class(A, [
	 *            function a(param1) { ... }
	 *        ]);
	 * 
	 *        // instantiate class B and call two different
	 *        // methods "a()" and "a(param1)"
	 *        var b = new B();
	 *        b.a();      // call method defined in "A" class
	 *        b.a(100);   // call overloaded method defined in "B" class
	 * 
	 * 
	 *    __Constructors.__ Constructor is a method with empty name
	 * 
	 *        // declare class "A" that with one constructor
	 *        var A = zebra.Class([
	 *            function () { this.variable = 100; }
	 *        ]);
	 * 
	 *        // instantiate "A"
	 *        var a = new A();
	 *        a.variable // variable is 100
	 * 
	 *    __Static methods and variables declaration.__ Static fields and methods can be defined
	 *    by declaring special "$clazz" method whose context is set to declared class
	 * 
	 *        var A = zebra.Class([
	 *            // special method where static stuff has to be declared
	 *            function $clazz() {
	 *                // declare static field
	 *                this.staticVar = 100;
	 *                // declare static method
	 *                this.staticMethod = function() {};
	 *            }
	 *        ]);
	 * 
	 *        // access static field an method
	 *        A.staticVar      // 100
	 *        A.staticMethod() // call static method
	 * 
	 *    __Access to super class context.__ You can call method declared in a parent class
	 * 
	 *        // declare "A" class with one class method "a(p1,p2)"
	 *        var A = zebra.Class([
	 *            function a(p1, p2) { ... }
	 *        ]);
	 * 
	 *        // declare "B" class that inherits "A" class and overrides "a(p1,p2)" method
	 *        var B = zebra.Class(A, [
	 *            function a(p1, p2) {
	 *                // call "a(p1,p2)" method implemented with "A" class
	 *                this.$super(p1,p2);
	 *            }
	 *        ]);
	 * 
	 * *
	 * *  One of the powerful feature of zebra easy OOP concept is possibility to instantiate
	 * *  anonymous classes and interfaces. Anonymous class is an instance of an existing
	 * *  class that can override the original class methods with own implementations, implements
	 * *  own list of interfaces. In other words the class instance customizes class definition
	 * *  for the particular instance of the class;
	 * 
	 *            // declare "A" class
	 *            var A = zebra.Class([
	 *                function a() { return 1; }
	 *            ]);
	 * 
	 *            // instantiate anonymous class that add an own implementation of "a" method
	 *            var a = new A([
	 *                function a() { return 2; }
	 *            ]);
	 *            a.a() // return 2
	 * 
	 * * @param {zebra.Class} [inheritedClass] an optional parent class to be inherited
	 * * @param {zebra.Interface} [inheritedInterfaces*] an optional list of interfaces for
	 * * the declared class to be extended
	 * * @param {Array} methods list of declared class methods. Can be empty array.
	 * * @return {Function} a class definition
	 * * @api zebra.Class()
	 * * @method Class
	 */
	interface Class {
				
		/**
		 * 
		 * @return  
		 */
		new (): () => void;
				
		/**
		 * 
		 */
		$clazz : /* zebra.Class */ any;
				
		/**
		 * 
		 */
		$hash$ : string;
		
		/**
		 * 
		 */
		$parents : {
		}
				
		/**
		 * Get class by the given class name
		 * @param  {String} name a class name
		 * @return {Function} a class. Throws exception if the class cannot be
		 * resolved by the given class name
		 * @method forName
		 * @api  zebra.forName()
		 * @param name 
		 * @return  
		 */
		forName(name : string): Function;
	}
	
	/**
	 * 
	 */
	namespace $cachedO{
	}
		
	/**
	 * 
	 */
	export var $cachedE : Array<string>;
		
	/**
	 * 
	 */
	export var $cacheSize : number;
		
	/**
	 * Get an object by the given key from cache (and cached it if necessary)
	 * @param  {String} key a key to an object. The key is hierarchical reference starting with the global
	 * name space as root. For instance "test.a" key will fetch $global.test.a object.
	 * @return {Object}  an object
	 * @api  zebra.$cache
	 * @param key 
	 * @return  
	 */
	function $cache(key : string): any;
		
	/**
	 * Test if the given object is instance of the specified class or interface. It is preferable
	 * to use this method instead of JavaScript "instanceof" operator whenever you are dealing with
	 * zebra classes and interfaces.
	 * @param  {Object} obj an object to be evaluated
	 * @param  {Function} clazz a class or interface
	 * @return {Boolean} true if a passed object is instance of the given class or interface
	 * @method instanceOf
	 * @api  zebra.instanceOf()
	 * @param obj 
	 * @param clazz 
	 * @return  
	 */
	function instanceOf(obj : any, clazz : any): boolean;
		
	/**
	 * * The method makes sure all variables, structures, elements are loaded
	 * * and ready to be used. The result of the method execution is calling
	 * * passed callback functions when the environment is ready. The goal of
	 * * the method to provide safe place to run your code safely in proper
	 * * place and at proper time.
	 * 
	 *        zebra.ready(function() {
	 *            // run code here safely
	 *            ...
	 *        });
	 * 
	 * * @param {Fucntion|Array} [f] a function or array of functions to be called
	 * * safely. If there no one callback method has been passed it causes busy
	 * * flag will be decremented.
	 * * @method ready
	 * * @api  zebra.ready()
	 */
	function ready(): void;
		
	/**
	 * 
	 * @param name 
	 * @param callback 
	 */
	function package(name : any, callback : any): void;
		
	/**
	 * 
	 */
	function busy(): void;
	
	/**
	 * * Dummy class that implements nothing but can be useful to instantiate
	 * * anonymous classes with some on "the fly" functionality:
	 * 
	 *        // instantiate and use zebra class with method "a()" implemented
	 *        var ac = new zebra.Dummy([
	 *             function a() {
	 *                ...
	 *             }
	 *        ]);
	 * 
	 *        // use it
	 *        ac.a();
	 * *
	 * * @class zebra.Dummy
	 */
	interface Dummy {
				
		/**
		 * 
		 * @return  
		 */
		new (): /* zebra.Dummy.constraints */ any;
				
		/**
		 * add extend later to avoid the method be inherited as a class static field
		 * @param df 
		 */
		extend(df : any): void;
				
		/**
		 * 
		 */
		$super(): void;
				
		/**
		 * 
		 */
		$this(): void;
				
		/**
		 * 
		 * @param path 
		 * @param props 
		 * @return  
		 */
		properties(path : /* zebra.Dummy.findAll.!0 */ any, props : /* zebra.Dummy.findAll.!0 */ any): /* !this */ any;
				
		/**
		 * 
		 */
		bind(): void;
				
		/**
		 * 
		 */
		unbind(): void;
				
		/**
		 * 
		 */
		$clazz : /* zebra.Dummy */ any;
				
		/**
		 * 
		 */
		setViews : /* zebra.$ViewsSetter */ any;
				
		/**
		 * 
		 */
		$hash$ : string;
		
		/**
		 * 
		 */
		$parents : {
		}
		
		/**
		 * prepare fields that caches the class properties
		 */
		$propertyInfo : {
		}
				
		/**
		 * 
		 */
		$isSingleton : boolean;
				
		/**
		 * 
		 */
		isSingleton : boolean;
				
		/**
		 * 
		 */
		cachedHeight : number;
				
		/**
		 * 
		 */
		height : number;
				
		/**
		 * 
		 */
		cachedWidth : number;
				
		/**
		 * 
		 */
		psHeight : number;
				
		/**
		 * 
		 */
		psWidth : number;
				
		/**
		 * 
		 */
		isValid : boolean;
				
		/**
		 * 
		 */
		isLayoutValid : boolean;
		
		/**
		 * Reference to a view that the component visualize
		 * @attribute view
		 * @type {zebra.ui.View}
		 * @default null
		 * @readOnly
		 */
		constraints : {
						
			/**
			 * 
			 */
			$hash$ : string;
						
			/**
			 * 
			 */
			isSortable : boolean;
						
			/**
			 * 
			 */
			parent : /* zebra.Dummy.constraints */ any;
						
			/**
			 * 
			 */
			getView : Function;
		}
				
		/**
		 * 
		 */
		isVisible : boolean;
				
		/**
		 * 
		 * @param root 
		 * @param value 
		 * @param cb 
		 * @return  
		 */
		find(root : number, value : any, cb : zebra.Dummy.Find2): Array<any>;		
		/**
		 * 
		 */
		find();
				
		/**
		 * 
		 * @param path 
		 * @param callback 
		 * @return  
		 */
		findAll(path : zebra.Dummy.FindAll0, callback : zebra.Dummy.FindAll1): zebra.Dummy.FindAllRet;
				
		/**
		 * Set the given id for the component
		 * @chainable
		 * @param {String} id an ID to be set
		 * @method setId
		 * @param id 
		 * @return  
		 */
		setId(id : string): /* !this */ any;
				
		/**
		 * Set the given property to the component or children component
		 * specified by the given selector
		 * @param  {String} [path]  a path to find children components
		 * @param  {String} name a property name
		 * @param  {object} value a property value
		 * @chainable
		 * @method property
		 * @return  
		 */
		property(): /* zebra.$measure.!0 */ any;		
		/**
		 * Set the given property to the component or children component
		 * specified by the given selector
		 * @param  {String} [path]  a path to find children components
		 * @param  {String} name a property name
		 * @param  {object} value a property value
		 * @chainable
		 * @method property
		 * @return  
		 */
		property(): /* zebra.Dummy.constraints */ any;
				
		/**
		 * Validate the component metrics. The method is called as
		 * a one step of the component validation procedure. The
		 * method causes "recalc" method execution if the method
		 * has been implemented and the component is in invalid
		 * state. It is supposed the "recalc" method has to be
		 * implemented by a component as safe place where the
		 * component metrics can be calculated. Component
		 * metrics is individual for the given component
		 * properties that has influence to the component
		 * preferred size value. In many cases the properties
		 * calculation has to be minimized what can be done
		 * by moving the calculation in "recalc" method
		 * @method validateMetric
		 * @protected
		 */
		validateMetric(): void;
				
		/**
		 * Invalidate the component layout. Layout invalidation means the
		 * component children components have to be placed with the component
		 * layout manager. Layout invalidation causes a parent component
		 * layout is also invalidated.
		 * @method invalidateLayout
		 * @protected
		 */
		invalidateLayout(): void;
				
		/**
		 * 
		 */
		invalidate(): void;
				
		/**
		 * Force validation of the component metrics and layout if it is not valid
		 * @method validate
		 */
		validate(): void;
				
		/**
		 * * Get preferred size. The preferred size includes  top, left,
		 * * bottom and right paddings and
		 * * the size the component wants to have
		 * * @method getPreferredSize
		 * * @return {Object} return size object the component wants to
		 * * have as the following structure:
		 * 
		 * {width:{Integer}, height:{Integer}} object
		 * @return  
		 */
		getPreferredSize(): zebra.Dummy.GetPreferredSizeRet;
				
		/**
		 * 
		 * @return  
		 */
		getTop(): /* !this.top */ any;
				
		/**
		 * 
		 * @return  
		 */
		getLeft(): /* !this.left */ any;
				
		/**
		 * 
		 * @return  
		 */
		getBottom(): /* !this.bottom */ any;
				
		/**
		 * 
		 * @return  
		 */
		getRight(): /* !this.right */ any;
				
		/**
		 * Set the parent component.
		 * @protected
		 * @param {zebra.layout.Layoutable} o a parent component
		 * @method setParent
		 * @protected
		 * @param o 
		 */
		setParent(o : any): void;
				
		/**
		 * Set the given layout manager that is used to place
		 * children component. Layout manager is simple class
		 * that defines number of rules concerning the way
		 * children components have to be ordered on its parent
		 * surface.
		 * @method setLayout
		 * @param {zebra.ui.Layout} m a layout manager
		 * @chainable
		 * @param m 
		 * @return  
		 */
		setLayout(m : any): /* !this */ any;
				
		/**
		 * Internal implementation of the component
		 * preferred size calculation.
		 * @param  {zebra.layout.Layoutable} target a component
		 * for that the metric has to be calculated
		 * @return {Object} a preferred size. The method always
		 * returns { width:10, height:10 } as the component preferred
		 * size
		 * @private
		 * @method calcPreferredSize
		 * @param target 
		 * @return  
		 */
		calcPreferredSize(target : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): zebra.Dummy.CalcPreferredSizeRet;
				
		/**
		 * 
		 * @param target 
		 */
		doLayout(target : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
				
		/**
		 * 
		 * @param o 
		 * @return  
		 */
		indexOf(o : any): number;
				
		/**
		 * 
		 * @param i 
		 * @param constr 
		 * @param d 
		 * @return  
		 */
		insert(i : number, constr : any, d : any): any;
				
		/**
		 * Set the layoutable component location. Location is x, y coordinates relatively to
		 * a parent component
		 * @param  {Integer} xx x coordinate relatively to the layoutable component parent
		 * @param  {Integer} yy y coordinate relatively to the layoutable component parent
		 * @method setLocation
		 * @param xx 
		 * @param yy 
		 */
		setLocation(xx : number | (() => /* zebra.Dummy.constraints */ any), yy : any): void;
				
		/**
		 * Set the layoutable component bounds. Bounds defines the component location and size.
		 * @param  {Integer} x x coordinate relatively to the layoutable component parent
		 * @param  {Integer} y y coordinate relatively to the layoutable component parent
		 * @param  {Integer} w a width of the component
		 * @param  {Integer} h a height of the component
		 * @method setBounds
		 * @chainable
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 * @return  
		 */
		setBounds(x : number, y : number, w : number, h : number): /* !this */ any;
				
		/**
		 * Set the layoutable component size.
		 * @param  {Integer} w a width of the component
		 * @param  {Integer} h a height of the component
		 * @method setSize
		 * @param w 
		 * @param h 
		 * @return  
		 */
		setSize(w : number, h : number): /* !this */ any;
				
		/**
		 * Get a children layoutable component by the given constraints.
		 * @param  {zebra.layout.Layoutable} c a constraints
		 * @return {zebra.layout.Layoutable} a children component
		 * @method getByConstraints
		 * @param c 
		 * @return  
		 */
		getByConstraints(c : any): any;
				
		/**
		 * Remove the given children component.
		 * @param {zebra.layout.Layoutable} c a children component to be removed
		 * @method remove
		 * @return {zebra.layout.Layoutable} a removed children component
		 * @param pos 
		 * @param size 
		 * @return  
		 */
		remove(pos : number, size : number): boolean;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		removeAt(i : number): zebra.Dummy.RemoveAtRet;
				
		/**
		 * Remove the component from its parent if it has a parent
		 * @method removeMe
		 */
		removeMe(): void;
				
		/**
		 * Set the specified preferred size the component has to have.
		 * Component preferred size is important thing that is widely
		 * used to layout the component. Usually the preferred
		 * size is calculated by a concrete component basing on
		 * its metrics. For instance, label component calculates its
		 * preferred size basing on text size. But if it is required
		 * the component preferred size can be fixed with the desired
		 * value.
		 * @param  {Integer} w a preferred width. Pass "-1" as the
		 * argument value to not set preferred width
		 * @param  {Integer} h a preferred height. Pass "-1" as the
		 * argument value to not set preferred height
		 * @method setPreferredSize
		 * @param w 
		 * @param h 
		 */
		setPreferredSize(w : number, h : number): void;
				
		/**
		 * Replace a children component at the specified index
		 * with the given new children component
		 * @param  {Integer} i an index of a children component to be replaced
		 * @param  {zebra.layout.Layoutable} d a new children
		 * @return {zebra.layout.Layoutable} a previous component that has
		 * been re-set with the new one
		 * @method setAt
		 * @param i 
		 * @param d 
		 * @return  
		 */
		setAt(i : number, d : any): /* zebra.Dummy.removeAt.!ret */ any;
				
		/**
		 * 
		 * @param constr 
		 * @param d 
		 * @return  
		 */
		add(constr : any, d : any): any;
				
		/**
		 * 
		 * @param ax 
		 * @param gap 
		 */
		(ax : number, gap : number): void;
				
		/**
		 * 
		 */
		vgap : number;
				
		/**
		 * 
		 */
		hgap : number;
				
		/**
		 * 
		 */
		ax : number;
				
		/**
		 * 
		 */
		ay : number;
				
		/**
		 * 
		 */
		direction : number;
				
		/**
		 * 
		 */
		stretchLast : boolean;
				
		/**
		 * 
		 */
		stretch : boolean;
				
		/**
		 * 
		 */
		right : number;
				
		/**
		 * 
		 */
		left : number;
				
		/**
		 * 
		 */
		bottom : number;
				
		/**
		 * 
		 */
		top : number;
				
		/**
		 * 
		 */
		colSpan : number;
				
		/**
		 * 
		 */
		rowSpan : number;
				
		/**
		 * Set top, left, bottom, right paddings
		 * @param  {Integer} t a top padding
		 * @param  {Integer} l a left padding
		 * @param  {Integer} b a bottom padding
		 * @param  {Integer} r a right padding
		 * @method setPadding
		 * @param top 
		 * @param left 
		 * @param bottom 
		 * @param right 
		 * @return  
		 */
		setPadding(top : number, left : number, bottom : number, right : number): /* !this */ any;
				
		/**
		 * Calculate columns metrics
		 * @param  {zebra.layout.Layoutable} c the target container
		 * @return {Array} a columns widths
		 * @method calcCols
		 * @protected
		 * @param c 
		 * @return  
		 */
		calcCols(c : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): zebra.Dummy.CalcColsRet;
				
		/**
		 * Calculate rows metrics
		 * @param  {zebra.layout.Layoutable} c the target container
		 * @return {Array} a rows heights
		 * @method calcRows
		 * @protected
		 * @param c 
		 * @return  
		 */
		calcRows(c : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): zebra.Dummy.CalcRowsRet;
				
		/**
		 * Calculate the given row height
		 * @param  {Integer} row a row
		 * @param  {zebra.layout.Layoutable} c the target container
		 * @return {Integer} a size of the row
		 * @method calcRow
		 * @protected
		 * @param row 
		 * @param c 
		 * @return  
		 */
		calcRow(row : number, c : any): number;
				
		/**
		 * Calculate the given column width
		 * @param  {Integer} col a column
		 * @param  {zebra.layout.Layoutable} c the target container
		 * @return {Integer} a size of the column
		 * @method calcCol
		 * @protected
		 * @param col 
		 * @param c 
		 * @return  
		 */
		calcCol(col : number, c : any): number;
				
		/**
		 * 
		 */
		kids : Array<zebra.Dummy.KidsI>;
				
		/**
		 * 
		 */
		flag : number;
				
		/**
		 * 
		 */
		rows : number;
				
		/**
		 * 
		 */
		cols : number;
				
		/**
		 * 
		 */
		mask : number;
				
		/**
		 * 
		 */
		colSizes : Array<number>;
				
		/**
		 * 
		 */
		rowSizes : Array<number>;
				
		/**
		 * 
		 */
		concatArrays : boolean;
				
		/**
		 * 
		 */
		usePropertySetters : boolean;
				
		/**
		 * 
		 */
		ignoreNonExistentKeys : boolean;
				
		/**
		 * 
		 * @param row 
		 * @param col 
		 * @return  
		 */
		get(row : number, col : number): any;
				
		/**
		 * create, merge to o and return a value by the given
		 * description d that is designed to be assigned to
		 * -- atomic types int string boolean number are returned as is
		 * -- created by the given description array are append to o array
		 * -- structure description (dictionary) are merged to o
		 * @param o 
		 * @param d 
		 * @param callback 
		 * @return  
		 */
		mergeObjWithDesc(o : any, d : any, callback : any): any;
				
		/**
		 * Called every time the given class name has to be transformed into
		 * the class object (constructor) reference.
		 * @param  {String} className a class name
		 * @return {Function}   a class reference
		 * @method resolveClass
		 * @param className 
		 * @return  
		 */
		resolveClass(className : string): /* !this.classAliases.<i> */ any;
				
		/**
		 * 
		 * @param o 
		 * @param pp 
		 */
		inherit(o : Array<any>, pp : any): void;
				
		/**
		 * 
		 * @param s 
		 * @param cb? 
		 * @return  
		 */
		load(s : any, cb? : Function): /* !this */ any;
				
		/**
		 * 
		 * @param name 
		 * @return  
		 */
		resolveVar(name : string): /* !this.variables.<i> */ any;
				
		/**
		 * 
		 * @param e 
		 */
		expr(e : any): void;
				
		/**
		 * 
		 */
		$url : string;
				
		/**
		 * 
		 */
		DOWN : number;
				
		/**
		 * 
		 */
		UP : number;
				
		/**
		 * 
		 */
		BEG : number;
				
		/**
		 * 
		 */
		END : number;
				
		/**
		 * Set the specified virtual cursor offsest
		 * @param {Integer} o an offset, pass null to set position to indefinite state
		 * @return {Integer} an offset that has been set
		 * @method setOffset
		 * @param o 
		 * @return  
		 */
		setOffset(o : number): number;
				
		/**
		 * Seek virtual cursor offset with the given shift
		 * @param {Integer} off a shift
		 * @return {Integer} an offset that has been set
		 * @method seek
		 * @param off 
		 * @return  
		 */
		seek(off : number): number;
				
		/**
		 * 
		 * @param r 
		 * @param c 
		 */
		setRowCol(r : number, c : number): void;
				
		/**
		 * 
		 * @param off 
		 * @param size 
		 */
		inserted(off : any, size : any): void;
				
		/**
		 * 
		 * @param off 
		 * @param size 
		 */
		removed(off : any, size : any): void;
				
		/**
		 * Calculate a line and line column by the given offset.
		 * @param  {Integer} off an offset
		 * @return {Array} an array that contains a line as the first
		 * element and a column in the line as the second element.
		 * @method getPointByOffset
		 * @param off 
		 * @return  
		 */
		getPointByOffset(off : number): zebra.Dummy.GetPointByOffsetRet;
				
		/**
		 * Calculate an offset by the given line and column in the line
		 * @param  {Integer} row a line
		 * @param  {Integer} col a column in the line
		 * @return {Integer} an offset
		 * @method getOffsetByPoint
		 * @param row 
		 * @param col 
		 * @return  
		 */
		getOffsetByPoint(row : number, col : number): number;
				
		/**
		 * 
		 * @param t 
		 * @param num 
		 */
		seekLineTo(t : number, num : number): void;
				
		/**
		 * Set position metric. Metric describes how many lines
		 * and elements in these line the virtual cursor can be navigated
		 * @param {zebra.util.Position.Metric} p a position metric
		 * @method setMetric
		 * @param p 
		 */
		setMetric(p : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
				
		/**
		 * 
		 */
		offset : number;
				
		/**
		 * 
		 */
		currentLine : number;
				
		/**
		 * 
		 */
		currentCol : number;
				
		/**
		 * 
		 */
		_ : zebra.Listeners;
				
		/**
		 * Shortcut to call the specified method of a JSON-RPC service.
		 * @param  {String} url an URL
		 * @param  {String} method a method name
		 * @api zebra.io.JRPC.invoke()
		 * @method invoke
		 * @param clazz 
		 * @param url 
		 * @param method 
		 * @return  
		 */
		invoke(clazz : () => void, url : (() => /* zebra.Dummy.constraints */ any) | string, method : (() => /* zebra.Dummy.constraints */ any) | string): zebra.Dummy.InvokeRet;
				
		/**
		 * Append the given parameters to a query string of the specified URL
		 * @param  {String} url an URL
		 * @param  {Object} obj a dictionary of parameters to be appended to
		 * the URL query string
		 * @return {String} a new URL
		 * @static
		 * @method append
		 * @param url 
		 * @param obj 
		 * @return  
		 */
		append(url : (() => /* zebra.Dummy.constraints */ any) | string, obj : (() => /* zebra.Dummy.constraints */ any) | {}): string;
				
		/**
		 * 
		 * @param startLine 
		 * @param text 
		 * @param lines 
		 * @return  
		 */
		parse(startLine : number, text : any, lines : Array</* zebra.Dummy.lines.<i> */ any>): number;
				
		/**
		 * Convert the given dictionary of parameters to a query string.
		 * @param  {Object} obj a dictionary of parameters
		 * @param  {Boolean} encode say if the parameters values have to be
		 * encoded
		 * @return {String} a query string built from parameters list
		 * @static
		 * @method toQS
		 * @param obj 
		 * @param encode 
		 * @return  
		 */
		toQS(obj : any, encode : boolean): string;
				
		/**
		 * 
		 */
		version : string;
				
		/**
		 * 
		 */
		contentType : string;
				
		/**
		 * 
		 * @param name 
		 * @param args 
		 * @return  
		 */
		encode(name : zebra.Dummy.Encode0, args : zebra.Dummy.Encode1): string;
				
		/**
		 * 
		 * @param v 
		 * @param p 
		 * @param undefined 
		 * @param undefined 
		 */
		encodeValue(v : any, p : zebra.Dummy.EncodeValue1, param3 : Array</* zebra.Dummy.encode.!0 */ any>, param4 : /* string] */ any): void;
				
		/**
		 * 
		 * @param node 
		 * @return  
		 */
		decodeValue(node : any): any;
				
		/**
		 * 
		 * @param r 
		 * @return  
		 */
		decode(r : any): any;
				
		/**
		 * 
		 */
		textLength : number;
				
		/**
		 * 
		 * @param lines 
		 * @param start 
		 * @param startOffset 
		 * @param o 
		 * @return  
		 */
		getLnInfo(lines : Array</* zebra.Dummy.lines.<i> */ any>, start : number, startOffset : number, o : number): zebra.Dummy.GetLnInfoRet;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		$lineTags(i : any): /* !this */ any;
				
		/**
		 * 
		 * @param line 
		 * @return  
		 */
		getLine(line : any): /* !this.buf */ any;
				
		/**
		 * Return a string that is rendered by this class
		 * @return  {String} a string
		 * @method getValue
		 * @return  
		 */
		getValue(): string;
				
		/**
		 * 
		 * @return  
		 */
		getLines(): number;
				
		/**
		 * 
		 * @return  
		 */
		getTextLength(): /* !this.buf.length */ any;
				
		/**
		 * Insert the specified text into the edited text at the given position
		 * @param  {Integer} pos a start position of a removed text
		 * @param  {String} s a text to be inserted
		 * @method write
		 * @param pos 
		 * @param s 
		 * @return  
		 */
		write(pos : number, s : string): boolean;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		setValue(v : any): number;
				
		/**
		 * Set the given maximal length the text can have
		 * @method setMaxLength
		 * @param  {Integer} max a maximal length of text
		 * @param max 
		 */
		setMaxLength(max : number): void;
				
		/**
		 * Remove all elements from the list model
		 * @method removeAll
		 */
		removeAll(): void;
				
		/**
		 * 
		 * @return  
		 */
		count(): /* !this.d.length */ any;
				
		/**
		 * 
		 * @param o 
		 * @param i 
		 * @return  
		 */
		set(o : any, i : number): any;
				
		/**
		 * Check if the element is in the list
		 * @method contains
		 * @param  {Object} o an element to be checked
		 * @return {Boolean} true if the element is in the list
		 * @param o 
		 * @return  
		 */
		contains(o : number | {}): boolean;
				
		/**
		 * 
		 * @param r 
		 * @param p 
		 * @return  
		 */
		create(r : /* zebra.Dummy.constraints */ any, p : /* zebra.Dummy.constraints */ any): any;		
		/**
		 * 
		 */
		create();
				
		/**
		 * 
		 * @param root 
		 * @param value 
		 */
		findOne(root : any, value : any): void;
				
		/**
		 * 
		 * @param f 
		 */
		iterate(f : zebra.Dummy.Iterate0): void;
				
		/**
		 * Remove all children items from the given item of the tree model
		 * @method removeKids
		 * @param  {zebra.data.Item} item an item from that all children items have to be removed
		 * @param item 
		 */
		removeKids(item : any): void;
				
		/**
		 * Set the specified by row and column cell value. If the specified row or column
		 * is greater than the matrix model has the model size will be adjusted to new one.
		 * @method put
		 * @param  {Integer} row a cell row
		 * @param  {Integer} col a cell column
		 * @param  {Object} obj a new cell value
		 * @param row 
		 * @param col 
		 * @param obj 
		 */
		put(row : number, col : number, obj : any): void;
				
		/**
		 * Set the specified by index cell value. The index identifies cell starting from [0,0]
		 * cell till [rows,columns]. If the index is greater than size of model the model size
		 * will be adjusted to new one.
		 * @method puti
		 * @param  {Integer} i a cell row
		 * @param  {Object} obj a new cell value
		 * @param i 
		 * @param obj 
		 */
		puti(i : number, obj : any): void;
				
		/**
		 * Set the given number of rows and columns the model has to have.
		 * @method setRowsCols
		 * @param  {Integer} rows a new number of rows
		 * @param  {Integer} cols a new number of columns
		 * @param rows 
		 * @param cols 
		 */
		setRowsCols(rows : number, cols : number): void;
				
		/**
		 * Set the given number of rows the model has to have.
		 * @method setRows
		 * @param  {Integer} rows a new number of rows
		 * @param rows 
		 */
		setRows(rows : number): void;
				
		/**
		 * Set the given number of columns the model has to have.
		 * @method setCols
		 * @param  {Integer} cols a new number of columns
		 * @param cols 
		 */
		setCols(cols : number): void;
				
		/**
		 * Remove specified number of rows from the model starting
		 * from the given row.
		 * @method removeRows
		 * @param  {Integer} begrow a start row
		 * @param  {Integer} count  a number of rows to be removed
		 * @param begrow 
		 * @param count 
		 */
		removeRows(begrow : number, count : number): void;
				
		/**
		 * Remove specified number of columns from the model starting
		 * from the given column.
		 * @method removeCols
		 * @param  {Integer}  begcol a start column
		 * @param  {Integer} count  a number of columns to be removed
		 * @param begcol 
		 * @param count 
		 */
		removeCols(begcol : number, count : number): void;
				
		/**
		 * Insert the given number of rows at the specified row
		 * @param  {Integer} row   a starting row to insert
		 * @param  {Integer} count a number of rows to be added
		 * @method insertRows
		 * @param row 
		 * @param count 
		 */
		insertRows(row : number, count : number): void;
				
		/**
		 * Insert the given number of columns at the specified column
		 * @param  {Integer} col   a starting column to insert
		 * @param  {Integer} count a number of columns to be added
		 * @method insertCols
		 * @param col 
		 * @param count 
		 */
		insertCols(col : number, count : number): void;
				
		/**
		 * Sort the given column of the matrix model.
		 * @param  {Integer} col a column to be re-ordered
		 * @param  {Function} [f] an optional sort function. The name of the function
		 * is grabbed to indicate type of the sorting the method does. For instance:
		 * "descent", "ascent".
		 * @method sortCol
		 * @param col 
		 * @param f? 
		 */
		sortCol(col : number, f? : ((a : any, b : any) => number) | Function): void;
				
		/**
		 * 
		 */
		lines : Array<zebra.Dummy.LinesI>;
				
		/**
		 * 
		 */
		maxLen : number;
				
		/**
		 * 
		 */
		extra : number;
				
		/**
		 * 
		 */
		d : /* [zebra.Dummy.constraints */ any | () => /* zebra.Dummy.constraints] */ any;
				
		/**
		 * 
		 */
		objs : Array<zebra.Dummy.ObjsI>;
				
		/**
		 * 
		 */
		dyZoom : number;
				
		/**
		 * 
		 */
		dxZoom : number;
				
		/**
		 * 
		 */
		dyNorma : number;
				
		/**
		 * 
		 */
		dxNorma : number;
				
		/**
		 * 
		 */
		naturalDirection : boolean;
				
		/**
		 * Mouse wheel handler
		 * @param  {MouseWheelEvent} e DOM mouse event object
		 * @method wheeled
		 * @param e 
		 */
		wheeled(e : any): void;
				
		/**
		 * 
		 */
		touchCounter : number;
				
		/**
		 * 
		 * @param e 
		 */
		$fixEnd(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		start(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		end(e : any): void;
				
		/**
		 * 
		 */
		interface Q {
						
			/**
			 * 
			 * @return  
			 */
			new (): Q;
		}

		
		/**
		 * 
		 */
		namespace touches{
		}
				
		/**
		 * 
		 */
		export var queue : Array</* zebra.Dummy.touches.<i> */ any>;
				
		/**
		 * 
		 */
		export var dc : number;
				
		/**
		 * 
		 * @param g 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 * @param d 
		 */
		function paint(g : zebra.Dummy.Paint0, x : number | (() => /* zebra.Dummy.constraints */ any), y : number, w : number, h : number, d : any): void;
				
		/**
		 * Set the given target object. The method triggers
		 * "targetWasChanged(oldTarget, newTarget)" execution if
		 * the method is declared. Implement the method if you need
		 * to track a target object updating.
		 * @method setTarget
		 * @param  {Object} o a target object to be visualized
		 * @param o 
		 */
		function setTarget(o : any): void;
				
		/**
		 * 
		 */
		export var middle : string;
				
		/**
		 * 
		 */
		export var darkest : string;
				
		/**
		 * 
		 * @param g 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 * @param d 
		 * @return  
		 */
		function outline(g : zebra.Dummy.Outline0, x : number, y : number, w : number, h : number, d : number): boolean;
				
		/**
		 * 
		 * @param o 
		 * @param n 
		 */
		function targetWasChanged(o : any, n : any): void;
				
		/**
		 * 
		 * @param v 
		 */
		function $recalc(v : any): void;
				
		/**
		 * Called every time the target text metrics has to be recalculated
		 * @method recalc
		 */
		function recalc(): void;
				
		/**
		 * 
		 * @param o 
		 */
		function ownerChanged(o : any): void;
				
		/**
		 * 
		 * @param id 
		 * @return  
		 */
		function activate(id : any): boolean;
				
		/**
		 * 
		 * @param path 
		 * @return  
		 */
		function loadImage(path : string): any;		
		/**
		 * 
		 */
		function loadImage();
				
		/**
		 * 
		 */
		export var MOUSE_UID : number;
				
		/**
		 * 
		 */
		export var KEY_UID : number;
				
		/**
		 * 
		 */
		export var FOCUS_UID : number;
				
		/**
		 * 
		 */
		export var FOCUS_LOST : number;
				
		/**
		 * 
		 */
		export var FOCUS_GAINED : number;
				
		/**
		 * 
		 */
		export var TYPED : number;
				
		/**
		 * 
		 */
		export var RELEASED : number;
				
		/**
		 * 
		 */
		export var PRESSED : number;
				
		/**
		 * 
		 */
		export var M_CTRL : number;
				
		/**
		 * 
		 */
		export var M_SHIFT : number;
				
		/**
		 * 
		 */
		export var M_ALT : number;
				
		/**
		 * 
		 */
		export var M_CMD : number;
				
		/**
		 * 
		 * @param target 
		 * @param id 
		 * @param ax 
		 * @param ay 
		 * @param mask 
		 * @param clicks 
		 */
		function reset(target : () => void, id : number, ax : number, ay : number, mask : number, clicks : number): void;
				
		/**
		 * Test if CTRL key is held
		 * @return {Boolean} true if CTRL key is held
		 * @method isControlPressed
		 * @return  
		 */
		function isControlPressed(): boolean;
				
		/**
		 * Test if SHIFT key is held
		 * @return {Boolean} true if SHIFT key is held
		 * @method isShiftPressed
		 * @return  
		 */
		function isShiftPressed(): boolean;
				
		/**
		 * Test if ALT key is held
		 * @return {Boolean} true if ALT key is held
		 * @method isAltPressed
		 * @return  
		 */
		function isAltPressed(): boolean;
				
		/**
		 * Test if command (windows) key is held
		 * @return {Boolean} true if command key is held
		 * @method isCmdPressed
		 * @return  
		 */
		function isCmdPressed(): boolean;
				
		/**
		 * 
		 */
		export var CLICKED : number;
				
		/**
		 * 
		 */
		export var ENTERED : number;
				
		/**
		 * 
		 */
		export var EXITED : number;
				
		/**
		 * 
		 */
		export var DRAGGED : number;
				
		/**
		 * 
		 */
		export var DRAGSTARTED : number;
				
		/**
		 * 
		 */
		export var DRAGENDED : number;
				
		/**
		 * 
		 */
		export var MOVED : number;
				
		/**
		 * 
		 */
		export var LEFT_BUTTON : number;
				
		/**
		 * 
		 */
		export var RIGHT_BUTTON : number;
				
		/**
		 * 
		 * @return  
		 */
		function isActionMask(): boolean;
		
		/**
		 * 
		 */
		namespace modifiers{
						
			/**
			 * setup modifiers
			 */
			export var altKey : boolean;
						
			/**
			 * 
			 */
			export var ctrlKey : boolean;
						
			/**
			 * 
			 */
			export var metaKey : boolean;
						
			/**
			 * 
			 */
			export var shiftKey : boolean;
		}
				
		/**
		 * 
		 */
		export var ENABLED : number;
				
		/**
		 * 
		 */
		export var SHOWN : number;
				
		/**
		 * 
		 */
		export var SIZED : number;
				
		/**
		 * 
		 */
		export var ADDED : number;
				
		/**
		 * 
		 */
		export var REMOVED : number;
				
		/**
		 * Find a zebra.ui.zCanvas where the given UI component is hosted
		 * @return {zebra.ui.zCanvas} a zebra canvas
		 * @method getCanvas
		 * @return  
		 */
		function getCanvas(): /* !this */ any;
				
		/**
		 * 
		 * @param o 
		 * @param n 
		 */
		function notifyRender(o : any, n : zebra.Dummy): void;
				
		/**
		 * Get a children UI component that embeds the given point.
		 * @param  {Integer} x x coordinate
		 * @param  {Integer} y y coordinate
		 * @return {zebra.ui.Panel} a children UI component
		 * @method getComponentAt
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getComponentAt(x : number, y : number): () => void;		
		/**
		 * Get a children UI component that embeds the given point.
		 * @param  {Integer} x x coordinate
		 * @param  {Integer} y y coordinate
		 * @return {zebra.ui.Panel} a children UI component
		 * @method getComponentAt
		 */
		function getComponentAt();
				
		/**
		 * Shortcut method to invalidating the component
		 * and initiating the component repainting
		 * @method vrp
		 */
		function vrp(): void;
				
		/**
		 * TODO: the method is not used yet
		 * @param c 
		 * @return  
		 */
		function isInvalidatedByChild(c : any): /* !this.isUsePsMetric */ any;
				
		/**
		 * The method is implemented to be aware about a children component
		 * insertion.
		 * @param  {Integer} index an index at that a new children component
		 * has been added
		 * @param  {Object} constr a layout constraints of an inserted component
		 * @param  {zebra.ui.Panel} l a children component that has been inserted
		 * @method kidAdded
		 * @param index 
		 * @param constr 
		 * @param l 
		 */
		function kidAdded(index : number, constr : any, l : {} | string): void;
				
		/**
		 * The method is implemented to be aware about a children component
		 * removal.
		 * @param  {Integer} i an index of a removed component
		 * @param  {zebra.ui.Panel} l a removed children component
		 * @method kidRemoved
		 * @param i 
		 * @param l 
		 */
		function kidRemoved(i : number, l : any): void;
				
		/**
		 * The method is implemented to be aware the
		 * component location updating
		 * @param  {Integer} px a previous x coordinate of the component
		 * @param  {Integer} py a previous y coordinate of the component
		 * @method relocated
		 * @param px 
		 * @param py 
		 */
		function relocated(px : () => void, py : (() => /* zebra.Dummy.constraints */ any) | boolean): void;
				
		/**
		 * The method is implemented to be aware the
		 * component size updating
		 * @param  {Integer} pw a previous width of the component
		 * @param  {Integer} ph a previous height of the component
		 * @method resized
		 * @param pw 
		 * @param ph 
		 */
		function resized(pw : number, ph : number): void;
				
		/**
		 * Checks if the component has a focus
		 * @return {Boolean} true if the component has focus
		 * @method hasFocus
		 * @param c 
		 * @return  
		 */
		function hasFocus(c : any): boolean;
				
		/**
		 * Force the given component to catch focus if the component is focusable.
		 * @method requestFocus
		 * @param c 
		 * @return  
		 */
		function requestFocus(c : any): /* !this.focusOwner */ any;
				
		/**
		 * Force the given component to catch focus in the given timeout.
		 * @param {Integer} [timeout] a timeout in milliseconds. The default value is 50
		 * @method requestFocusIn
		 * @param timeout? 
		 */
		function requestFocusIn(timeout? : number): void;
				
		/**
		 * Set the UI component visibility
		 * @param  {Boolean} b a visibility state
		 * @method setVisible
		 * @chainable
		 * @param b 
		 * @return  
		 */
		function setVisible(b : boolean): /* !this */ any;
				
		/**
		 * Set the UI component enabled state. Using this property
		 * an UI component can be excluded from getting input events
		 * @param  {Boolean} b a enabled state
		 * @method setEnabled
		 * @chainable
		 * @param b 
		 * @return  
		 */
		function setEnabled(b : boolean | (() => /* zebra.Dummy.constraints */ any)): /* !this */ any;
				
		/**
		 * Set the border view
		 * @param  {zebra.ui.View|Function|String} v a border view or border "paint(g,x,y,w,h,c)"
		 * rendering function or border type: "plain", "sunken", "raised", "etched"
		 * @method setBorder
		 * @chainable
		 * @param v 
		 * @return  
		 */
		function setBorder(v : zebra.Dummy): /* !this */ any;
				
		/**
		 * * Set the background. Background can be a color string or a zebra.ui.View class
		 * * instance, or a function(g,x,y,w,h,c) that paints the background:
		 * 
		 *    // set background color
		 *    comp.setBackground("red");
		 * 
		 *    // set a picture as a component background
		 *    comp.setBackground(new zebra.ui.Picture(...));
		 * 
		 *    // set a custom rendered background
		 *    comp.setBackground(function (g,x,y,w,h,target) {
		 *        // paint a component background here
		 *        g.setColor("blue");
		 *        g.fillRect(x,y,w,h);
		 *        g.drawLine(...);
		 *        ...
		 *    });
		 * 
		 * 
		 * * @param  {String|zebra.ui.View|Function} v a background view, color or
		 * * background "paint(g,x,y,w,h,c)" rendering function.
		 * * @method setBackground
		 * * @chainable
		 * @param v 
		 * @return  
		 */
		function setBackground(v : string | Function): /* !this */ any;
				
		/**
		 *      * Add the given children component or number of components to the given panel.
		 *      * @protected
		 *      * @param {zebra.ui.Panel|Array|Object} a children component of number of
		 *      * components to be added. The parameter can be:
		 * 
		 * - Component
		 * - Array of components
		 * - Dictionary object where every element is a component to be added and the key of
		 * the component is stored in the dictionary is considered as the component constraints
		 * 
		 *      * @method setKids
		 * @param a 
		 */
		function setKids(a : {} | Array<any>): void;
				
		/**
		 * Called whenever the UI component gets or looses focus
		 * @method focused
		 */
		function focused(): void;
				
		/**
		 * 
		 * @param c 
		 * @param x? 
		 * @param y? 
		 * @param w? 
		 * @param h? 
		 */
		function repaint(c : () => void, x? : any, y? : any, w? : any, h? : any): void;
				
		/**
		 * Bring the UI component to front
		 * @method toFront
		 */
		function toFront(): void;
				
		/**
		 * Send the UI component to back
		 * @method toBack
		 */
		function toBack(): void;
				
		/**
		 * * Set the UI component size to its preferred size
		 * * @return {Object} a preferred size applied to the component.
		 * * The structure of the returned object is the following:
		 * 
		 *    { width:{Integer}, height:{Integer} }
		 * 
		 * * @method toPreferredSize
		 * @return  
		 */
		function toPreferredSize(): /* zebra.Dummy.getPreferredSize.!ret */ any;
				
		/**
		 * 
		 * @param child 
		 * @return  
		 */
		function getFocusRoot(child : any): /* !this.activeWin */ any;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @param mask 
		 * @return  
		 */
		function layerMousePressed(x : any, y : any, mask : number): boolean;
				
		/**
		 * 
		 * @param keyCode 
		 * @param mask 
		 * @return  
		 */
		function layerKeyPressed(keyCode : number, mask : number): boolean;
				
		/**
		 * Set the target view to be wrapped with the UI component
		 * @param  {zebra.ui.View|Function} v a view or a rendering
		 * view "paint(g,x,y,w,h,c)" function
		 * @method setView
		 * @chainable
		 * @param v 
		 * @return  
		 */
		function setView(v : /* zebra.Dummy.constraints */ any | (() => /* zebra.Dummy.constraints */ any)): /* !this */ any;
				
		/**
		 * 
		 * @param g 
		 * @param c 
		 */
		function paintComponent(g : any, c : any): void;
				
		/**
		 * Component enabled event handler
		 * @param  {zebra.ui.Panel} c a component
		 * @method compEnabled
		 * @param c 
		 */
		function compEnabled(c : any): void;
				
		/**
		 * Component shown event handler
		 * @param  {zebra.ui.Panel} c a component
		 * @method compShown
		 * @param c 
		 */
		function compShown(c : any): void;
				
		/**
		 * Component removed event handler
		 * @param  {zebra.ui.Panel} p a parent
		 * @param  {zebra.ui.Panel} c a component
		 * @method compRemoved
		 * @param p 
		 * @param i 
		 * @param c 
		 */
		function compRemoved(p : any, i : any, c : any): void;
				
		/**
		 * The method is called by a canvas that lost native focus
		 * @param  {zebra.ui.zCanvas} canvas a canvas
		 * @method canvasFocusLost
		 * @protected
		 * @param canvas 
		 */
		function canvasFocusLost(canvas : zebra.Dummy.CanvasFocusLost0): void;
				
		/**
		 * The method is called by a canvas that gained native focus
		 * @param  {zebra.ui.zCanvas} canvas a canvas
		 * @method canvasFocusGained
		 * @protected
		 * @param canvas 
		 */
		function canvasFocusGained(canvas : any): void;
				
		/**
		 * Key pressed event handler.
		 * @param  {zebra.ui.KeyEvent} e a mouse event
		 * @method keyPressed
		 * @param e 
		 */
		function keyPressed(e : any): void;
				
		/**
		 * 
		 * @param c 
		 * @return  
		 */
		function findFocusable(c : any): any;
				
		/**
		 * Test if the given component can catch focus
		 * @param  {zebra.ui.Panel} c an UI component to be tested
		 * @method isFocusable
		 * @return {Boolean} true if the given component can catch a focus
		 * @param c 
		 * @return  
		 */
		function isFocusable(c : any): boolean;
				
		/**
		 * looking recursively a focusable component among children components of
		 * the given target  starting from the specified by index kid with the
		 * given direction (forward or backward lookup)
		 * @param t 
		 * @param index 
		 * @param d 
		 */
		function fd(t : any, index : number, d : number): void;
				
		/**
		 * find next focusable component
		 * c - component starting from that a next focusable component has to be found
		 * d - a direction of next focusable component lookup: 1 (forward) or -1 (backward)
		 * @param c 
		 * @param d 
		 * @return  
		 */
		function ff(c : any, d : number): any;
				
		/**
		 * 
		 * @param e 
		 */
		function mousePressed(e : any): void;
				
		/**
		 * 
		 * @param k 
		 * @return  
		 */
		function parseKey(k : any): zebra.Dummy.ParseKeyRet;
				
		/**
		 * 
		 * @param commands 
		 */
		function setCommands(commands : any): void;
				
		/**
		 * Define mouse moved events handler.
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseMoved
		 * @param e 
		 */
		function mouseMoved(e : any): void;
				
		/**
		 * Define mouse entered events handler.
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseEntered
		 * @param e 
		 */
		function mouseEntered(e : any): void;
				
		/**
		 * Define mouse exited events handler.
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseExited
		 * @param e 
		 */
		function mouseExited(e : any): void;
				
		/**
		 * Define mouse dragged events handler.
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseDragged
		 * @param e 
		 */
		function mouseDragged(e : any): void;
				
		/**
		 * 
		 */
		export var cursorType : string;
				
		/**
		 * 
		 */
		export var $isFunc : boolean;
				
		/**
		 * 
		 * @param l 
		 * @param s 
		 * @param e 
		 * @return  
		 */
		function $hasMethod(l : any, s : number, e : number): boolean;
				
		/**
		 * 
		 * @param id 
		 * @param src 
		 * @param p1 
		 * @param p2 
		 */
		function fireCompEvent(id : any, src : any, p1 : any, p2 : any): void;
				
		/**
		 * destination is component itself or one of his composite parent.
		 * composite component is a component that grab control from his
		 * children component. to make a component composite
		 * it has to implement catchInput field or method. If composite component
		 * has catchInput method it will be called
		 * to detect if the composite component takes control for the given kid.
		 * composite components can be embedded (parent composite can take
		 * control on its child composite component)
		 * @param c 
		 * @return  
		 */
		function getEventDestination(c : any): any;
				
		/**
		 * 
		 * @param e 
		 * @return  
		 */
		function fireInputEvent(e : any): boolean;
				
		/**
		 *  * Register global event listener. The listener will
		 *  * get events according to event methods handlers it
		 *  * implements. For instance to listen key and
		 *  * the passed listener should implements one of
		 *  * key event handler method:
		 * 
		 * 
		 * // implement and register global key and mouse listener
		 * zebra.ui.events.addListener({
		 * 
		 *     // implement necessary events handlers methods
		 *     keyPressed: function(e) {
		 *         ...
		 *     }
		 *     ...
		 * });
		 * 
		 *  * @param  {Object} l
		 *  * @method  addListener
		 * @param l 
		 */
		function addListener(l : any): void;
				
		/**
		 * Un-register the global listener. The method detects which listener interfaces
		 * the passed listener implements and un-registers its.
		 * @param  {Object} l a listener
		 * @return {Boolean} true if the listener has been removed successfully
		 * @method removeListener
		 * @param l 
		 * @return  
		 */
		function removeListener(l : any): boolean;
				
		/**
		 * Register global component listener
		 * @param  {Object} l a component listener
		 * @return {Boolean} true if the listener has been successfully
		 * added
		 * @method addComponentListener
		 * @param l 
		 * @return  
		 */
		function addComponentListener(l : any): boolean;
				
		/**
		 * Un-register global component listener
		 * @param  {Object} l a component listener
		 * @return {Boolean} true if the listener has been removed successfully
		 * @method removeFocusListener
		 * @param l 
		 * @return  
		 */
		function removeComponentListener(l : any): boolean;
				
		/**
		 * Register global mouse listener
		 * @param  {Object} l a mouse listener
		 * @return {Boolean} true if the listener has been successfully
		 * added
		 * @method addMouseListener
		 * @param l 
		 * @return  
		 */
		function addMouseListener(l : any): boolean;
				
		/**
		 * Un-register global mouse listener
		 * @param  {Object} l a mouse listener
		 * @return {Boolean} true if the listener has been removed successfully
		 * @method removeMouseListener
		 * @param l 
		 * @return  
		 */
		function removeMouseListener(l : any): boolean;
				
		/**
		 * Register global focus listener
		 * @param  {Object} l a focus listener
		 * @return {Boolean} true if the listener has been successfully
		 * added
		 * @method addFocusListener
		 * @param l 
		 * @return  
		 */
		function addFocusListener(l : any): boolean;
				
		/**
		 * Un-register global focus listener
		 * @param  {Object} l a focus listener
		 * @return {Boolean} true if the listener has been removed successfully
		 * @method removeFocusListener
		 * @param l 
		 * @return  
		 */
		function removeFocusListener(l : any): boolean;
				
		/**
		 * Register global key listener
		 * @param  {Object} l a key listener
		 * @return {Boolean} true if the listener has been successfully
		 * added
		 * @method addKeyListener
		 * @param l 
		 * @return  
		 */
		function addKeyListener(l : any): boolean;
				
		/**
		 * Un-register global key listener
		 * @param  {Object} l a key listener
		 * @return {Boolean} true if the listener has been removed successfully
		 * @method removeKeyListener
		 * @param l 
		 * @return  
		 */
		function removeKeyListener(l : any): boolean;
				
		/**
		 * 
		 * @param c 
		 * @param l 
		 * @return  
		 */
		function a_(c : any, l : any): boolean;
				
		/**
		 * 
		 * @param c 
		 * @param l 
		 * @return  
		 */
		function r_(c : any, l : any): boolean;
				
		/**
		 * 
		 */
		export var m_l : Array<any>;
				
		/**
		 * 
		 */
		export var k_l : Array<any>;
				
		/**
		 * 
		 */
		export var f_l : Array<any>;
				
		/**
		 * 
		 */
		export var c_l : Array<any>;
				
		/**
		 * 
		 */
		export var $isMasterCanvas : boolean;
				
		/**
		 * 
		 */
		export var $focusGainedCounter : number;
				
		/**
		 * 
		 * @param e 
		 */
		function $keyTyped(e : /* zebra.Dummy.$keyTyped0 */ any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function $keyPressed(e : /* zebra.Dummy.$keyPressed0 */ any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function $keyReleased(e : any): void;
				
		/**
		 * 
		 * @param id 
		 * @param e 
		 */
		function $mouseEntered(id : number, e : /* zebra.Dummy.$mouseEntered1 */ any): void;
				
		/**
		 * 
		 * @param id 
		 * @param e 
		 */
		function $mouseExited(id : number, e : any): void;
				
		/**
		 * Catch native canvas mouse move events
		 * @param {String} id an touch id (for touchable devices)
		 * @param {String} e a mouse event that has been triggered by canvas element
		 * 
		 *         {
		 *             pageX : {Integer},
		 *             pageY : {Integer},
		 *             target: {HTMLElement}
		 *         }
		 * @protected
		 * @method $mouseMoved
		 * @param id 
		 * @param e 
		 */
		function $mouseMoved(id : number | string, e : {} | string): void;
				
		/**
		 * 
		 * @param id 
		 * @param e 
		 */
		function $mouseReleased(id : number, e : /* zebra.Dummy.$mouseEntered.!1 */ any): void;
				
		/**
		 * 
		 * @param id 
		 * @param e 
		 * @param button 
		 */
		function $mousePressed(id : number, e : /* zebra.Dummy.$mousePressed1 */ any, button : number): void;
				
		/**
		 * 
		 */
		function recalcOffset(): void;
				
		/**
		 * Get the canvas layer by the specified layer ID. Layer is a children component
		 * of the canvas UI component. Every layer has an ID assigned to it the method
		 * actually allows developers to get the canvas children component by its ID
		 * @param  {String} id a layer ID
		 * @return {zebra.ui.Panel} a layer (children) component
		 * @method getLayer
		 * @param id 
		 * @return  
		 */
		function getLayer(id : string | number): /* !this.<i> */ any;
				
		/**
		 * Set HTML canvas element hosted by the UI component CSS styles
		 * @protected
		 * @method setStyles
		 * @param {Object} styles styles to be applied to the HTML canvas component
		 * @param styles 
		 */
		function setStyles(styles : any): void;
				
		/**
		 * Set HTML Canvas element hosted by the UI component attribute
		 * @protected
		 * @method setAttribute
		 * @param {String} name an attribute name
		 * @param {String} value an attribute value
		 * @param name 
		 * @param value 
		 */
		function setAttribute(name : string, value : any): void;
				
		/**
		 * 
		 */
		function setFeatures(): void;
		
		/**
		 * TODO:
		 * touch event listeners have to be taking also
		 * in account
		 */
		var $nativeListeners : {
		}
		
		/**
		 * 
		 */
		var $da : {
						
			/**
			 * 
			 */
			x : number;
						
			/**
			 * 
			 */
			y : number;
						
			/**
			 * 
			 */
			width : number;
						
			/**
			 * 
			 */
			height : number;
		}
				
		/**
		 * 
		 */
		export var isFullScreen : boolean;
				
		/**
		 * 
		 */
		export var color : string;
				
		/**
		 * 
		 */
		export var radius : number;
				
		/**
		 * 
		 */
		export var colors : Array<string>;
				
		/**
		 * 
		 */
		export var gx1 : number;
				
		/**
		 * 
		 */
		export var gx2 : number;
				
		/**
		 * 
		 */
		export var gy1 : number;
				
		/**
		 * 
		 */
		export var gy2 : number;
		
		/**
		 * Views set
		 * @attribute views
		 * @type Object
		 * @default {}
		 * @readOnly
		 */
		var views : {
		}
				
		/**
		 * 
		 */
		export var clicks : number;
				
		/**
		 * 
		 */
		export var absX : number;
				
		/**
		 * 
		 */
		export var absY : number;
				
		/**
		 * Layout manager that is used to order children layoutable components
		 * @attribute layout
		 * @default itself
		 * @readOnly
		 * @type {zebra.layout.Layout}
		 */
		export var border : zebra.Dummy;
				
		/**
		 * 
		 */
		export var bg : string;
				
		/**
		 * 
		 */
		export var crossOrigin : string;
				
		/**
		 * 
		 * @param e 
		 */
		function onerror(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function onload(e : any): void;
				
		/**
		 * 
		 */
		export var lineColors : Array<string>;
				
		/**
		 * Set set of colors to be used to paint the line. Number of colors defines the number of
		 * lines to be painted.
		 * @param {String} colors* colors
		 * @method setLineColors
		 */
		function setLineColors(): void;
				
		/**
		 * 
		 */
		export var stringWidth : number;
				
		/**
		 * Get the given line height in pixels
		 * @param {Integer} l a line number
		 * @return {Integer} a line height in pixels
		 * @method getLineHeight
		 * @param l 
		 * @return  
		 */
		function getLineHeight(l : number): /* !this.font.height */ any;
				
		/**
		 * 
		 * @param f 
		 */
		function setFont(f : string | {}): void;
				
		/**
		 * 
		 * @param c 
		 */
		function setColor(c : string): void;
				
		/**
		 * Get a line indent
		 * @default 1
		 * @return {Integer} line indent
		 * @method getLineIndent
		 * @return  
		 */
		function getLineIndent(): number;
				
		/**
		 * 
		 * @param line 
		 * @return  
		 */
		function getLineSize(line : any): number;
				
		/**
		 * 
		 * @return  
		 */
		function getMaxOffset(): number;
				
		/**
		 * Paint the specified text line
		 * @param  {2DContext} g graphical 2D context
		 * @param  {Integer} x x coordinate
		 * @param  {Integer} y y coordinate
		 * @param  {Integer} line a line number
		 * @param  {zebra.ui.Panel} d an UI component on that the line has to be rendered
		 * @method paintLine
		 * @param g 
		 * @param x 
		 * @param y 
		 * @param line 
		 * @param d 
		 */
		function paintLine(g : any, x : number, y : number, line : number, d : any): void;
				
		/**
		 * 
		 * @param src 
		 * @param b 
		 * @param off 
		 * @param size 
		 * @param startLine 
		 * @param lines 
		 */
		function textUpdated(src : any, b : any, off : number, size : any, startLine : any, lines : any): void;
				
		/**
		 * Paint the specified text selection of the given line. The area
		 * where selection has to be rendered is denoted with the given
		 * rectangular area.
		 * @param  {2DContext} g a canvas graphical context
		 * @param  {Integer} x a x coordinate of selection rectangular area
		 * @param  {Integer} y a y coordinate of selection rectangular area
		 * @param  {Integer} w a width of of selection rectangular area
		 * @param  {Integer} h a height of of selection rectangular area
		 * @param  {Integer} line [description]
		 * @param  {zebra.ui.Panel} d a target UI component where the text
		 * has to be rendered
		 * @protected
		 * @method paintSelection
		 * @param g 
		 */
		function paintSelection(g : zebra.Dummy.PaintSelection0): void;
				
		/**
		 * 
		 */
		export var showLast : boolean;
				
		/**
		 * 
		 */
		export var fillColor1 : string;
				
		/**
		 * 
		 * @param m 
		 * @return  
		 */
		function setModel(m : () => void): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function getModel(): /* !this.view.target */ any;
				
		/**
		 * Get the label text color
		 * @return {String} a zebra label color
		 * @method getColor
		 * @return  
		 */
		function getColor(): /* !this.view.color */ any;
				
		/**
		 * Get the label text font
		 * @return {zebra.ui.Font} a zebra label font
		 * @method getFont
		 * @return  
		 */
		function getFont(): /* !this.view.font */ any;
				
		/**
		 * Set the component state
		 * @param {Object} s a state
		 * @method  setState
		 * @param s 
		 */
		function setState(s : any): void;
				
		/**
		 * Called every time the component state has been updated
		 * @param  {Integer} o a previous component state
		 * @param  {Integer} n a new component state
		 * @method stateUpdated
		 * @param o 
		 * @param n 
		 * @return  
		 */
		function stateUpdated(o : any, n : any): string;
				
		/**
		 * Refresh state
		 * @protected
		 * @method syncState
		 */
		function syncState(): void;
				
		/**
		 * Map the specified state into its symbolic name.
		 * @protected
		 * @param  {Integer} state a state
		 * @return {String} a symbolic name of the state
		 * @method toViewId
		 * @param state 
		 * @return  
		 */
		function toViewId(state : number): string;
				
		/**
		 * 
		 * @param e 
		 */
		function _keyPressed(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function _keyReleased(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function _mouseEntered(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function _mousePressed(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function _mouseReleased(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function childInputEvent(e : any): void;
				
		/**
		 * Define key released events handler
		 * @param  {zebra.ui.KeyEvent} e a key event
		 * @method keyReleased
		 * @param e 
		 */
		function keyReleased(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function mouseReleased(e : any): void;
				
		/**
		 * 
		 * @param g 
		 */
		function paintOnTop(g : zebra.Dummy.PaintOnTop0): void;
				
		/**
		 * Set the view that has to be rendered as focus marker
		 * when the component gains focus.
		 * @param  {String|zebra.ui.View|Function} c a view.
		 * The view can be a color or border string code or view
		 * or an implementation of zebra.ui.View "paint(g,x,y,w,h,t)"
		 * method.
		 * @method setFocusMarkerView
		 * @param c 
		 */
		function setFocusMarkerView(c : string | Function): void;
				
		/**
		 * Says if the component can hold focus or not
		 * @param  {Boolean} b true if the component can gain focus
		 * @method setCanHaveFocus
		 * @param b 
		 */
		function setCanHaveFocus(b : boolean): void;
				
		/**
		 * Set the specified children component to be used as
		 * focus marker view anchor component. Anchor component
		 * is a component over that the focus marker view is
		 * painted.
		 * @param  {zebra.ui.Panel} c  an anchor component
		 * @method setFocusAnchorComponent
		 * @param c 
		 */
		function setFocusAnchorComponent(c : any): void;
				
		/**
		 * 
		 */
		export var isFireByPress : boolean;
				
		/**
		 * 
		 */
		export var firePeriod : number;
				
		/**
		 * 
		 */
		export var startIn : number;
				
		/**
		 * 
		 * @param id 
		 * @param win 
		 * @param l 
		 */
		function fire(id : number, win : (() => /* zebra.Dummy.constraints */ any) | {}, l : any): void;
				
		/**
		 * 
		 * @param t 
		 */
		function run(t : any): void;
				
		/**
		 * Set the mode the button has to fire events.
		 * Button can fire event after it has been unpressed
		 * or immediately when it has been pressed. Also button
		 * can start firing events periodically when it has been
		 * pressed and held in the pressed state.
		 * @param  {Boolean} b   true if the button has to fire
		 * event by pressed event
		 * @param  {Integer} time the period of time the button
		 * has to repeat firing events if it has been pressed and
		 * held in pressed state. -1 means event doesn't have
		 * repeated
		 * @method setFireParams
		 * @param b 
		 * @param firePeriod 
		 * @param startIn 
		 */
		function setFireParams(b : boolean, firePeriod : number, startIn : any): void;
				
		/**
		 * 
		 */
		export var hGap : number;
				
		/**
		 * 
		 */
		export var vGap : number;
				
		/**
		 * 
		 */
		export var indent : number;
				
		/**
		 * Get the border panel title info. The information
		 * describes a rectangular area the title occupies, the
		 * title location and alignment
		 * @return {Object} a title info
		 * 
		 *  {
		 *      x: {Integer}, y: {Integer},
		 *      width: {Integer}, height: {Integer},
		 *      orient: {Integer}
		 *  }
		 * 
		 * @method getTitleInfo
		 * @protected
		 * @return  
		 */
		function getTitleInfo(): zebra.Dummy.GetTitleInfoRet;
				
		/**
		 * Set vertical and horizontal paddings between the
		 * border panel border and the content of the border
		 * panel
		 * @param {Integer} vg a top and bottom paddings
		 * @param {Integer} hg a left and right paddings
		 * @method setGaps
		 * @chainable
		 * @param vg 
		 * @param hg 
		 * @return  
		 */
		function setGaps(vg : number, hg : number): /* !this */ any;
				
		/**
		 * Called every time a state has been updated.
		 * @param  {zebra.ui.Checkbox} o an ui component for which the state has been updated
		 * @param  {Boolean} b  a new boolean state of the UI component
		 * @method stateUpdated
		 * @param o 
		 * @param b 
		 */
		function updated(o : any, b : boolean): void;
				
		/**
		 * Call when the manager has been installed for the given UI component
		 * @protected
		 * @param  {zebra.ui.Checkbox} o an UI component the switch manager is designated
		 * @method install
		 * @param o 
		 */
		function install(o : any): void;
				
		/**
		 * Call when the manager has been uninstalled for the given UI component
		 * @protected
		 * @param  {zebra.ui.Checkbox} o an UI component the switch manager is not anymore used
		 * @method uninstall
		 * @param o 
		 */
		function uninstall(o : any): void;
				
		/**
		 * 
		 */
		function clearSelected(): void;
				
		/**
		 * 
		 * @param o 
		 * @param n 
		 * @param id 
		 */
		function parentStateUpdated(o : any, n : any, id : {} | number): void;
				
		/**
		 * Callback method that is called whenever a state of switch
		 * manager has been updated.
		 * @param  {Boolean} b a new state
		 * @method switched
		 * @param b 
		 */
		function switched(b : boolean | string): void;
				
		/**
		 * Define mouse drag started  events handler
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseDragStarted
		 * @param e 
		 */
		function mouseDragStarted(e : any): void;
				
		/**
		 * Define mouse drag ended events handler
		 * @param  {zebra.ui.MouseEvent} e a mouse event
		 * @method mouseDragEnded
		 * @param e 
		 */
		function mouseDragEnded(e : any): void;
				
		/**
		 * 
		 * @param t 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getCursorType(t : any, x : any, y : any): string;
				
		/**
		 * 
		 */
		export var prevLoc : number;
				
		/**
		 * 
		 */
		export var rightMinSize : number;
				
		/**
		 * 
		 */
		export var leftMinSize : number;
				
		/**
		 * 
		 */
		export var isMoveable : boolean;
				
		/**
		 * 
		 * @param xy 
		 * @return  
		 */
		function normalizeBarLoc(xy : any): /* !this.minXY */ any;
				
		/**
		 * 
		 * @param o 
		 */
		function setOrientation(o : any): void;
				
		/**
		 * Set gripper element location
		 * @param  {Integer} l a location of the gripper element
		 * @method setGripperLoc
		 * @param l 
		 */
		function setGripperLoc(l : number): void;
				
		/**
		 * Set gap between gripper element and sizable panels
		 * @param  {Integer} g a gap
		 * @method setGap
		 * @param g 
		 */
		function setGap(g : number): void;
				
		/**
		 * Set the minimal size of the left (or top) sizeable panel
		 * @param  {Integer} m  a minimal possible size
		 * @method setLeftMinSize
		 * @param m 
		 */
		function setLeftMinSize(m : number): void;
				
		/**
		 * Set the minimal size of the right (or bottom) sizeable panel
		 * @param  {Integer} m  a minimal possible size
		 * @method setRightMinSize
		 * @param m 
		 */
		function setRightMinSize(m : number): void;
				
		/**
		 * Set the given gripper movable state
		 * @param  {Boolean} b the gripper movable state.
		 * @method setGripperMovable
		 * @param b 
		 */
		function setGripperMovable(b : boolean): void;
				
		/**
		 * 
		 */
		export var maxXY : number;
				
		/**
		 * 
		 */
		export var minXY : number;
				
		/**
		 * 
		 */
		export var barLocation : number;
				
		/**
		 * 
		 */
		export var bundleHeight : number;
				
		/**
		 * Toogle on or off the extender panel
		 * @method toggle
		 * @param item 
		 */
		function toggle(item : any): void;
				
		/**
		 * 
		 */
		export var isCollapsed : boolean;
				
		/**
		 * 
		 * @return  
		 */
		function getSX(): /* !this.sx */ any;
				
		/**
		 * 
		 * @return  
		 */
		function getSY(): /* !this.sy */ any;
				
		/**
		 * Set a target component scroll x location to the
		 * specified value
		 * @param  {Integer} v a x scroll location
		 * @method scrollXTo
		 * @param v 
		 */
		function scrollXTo(v : number): void;
				
		/**
		 * Set a target component scroll y location to the
		 * specified value
		 * @param  {Integer} v a y scroll location
		 * @method scrollYTo
		 * @param v 
		 */
		function scrollYTo(v : number): void;
				
		/**
		 * Scroll the target component into the specified location
		 * @param  {Integer} x a x location
		 * @param  {Integer} y a y location
		 * @method scrollTo
		 * @param x 
		 * @param y 
		 */
		function scrollTo(x : number, y : number): void;
				
		/**
		 * Make visible the given rectangular area of the
		 * scrolled target component
		 * @param  {Integer} x a x coordinate of top left corner
		 * of the rectangular area
		 * @param  {Integer} y a y coordinate of top left corner
		 * of the rectangular area
		 * @param  {Integer} w a width of the rectangular area
		 * @param  {Integer} h a height of the rectangular area
		 * @method makeVisible
		 * @param item 
		 */
		function makeVisible(item : any): void;
				
		/**
		 * 
		 */
		export var sy : number;
				
		/**
		 * 
		 */
		export var sx : number;
				
		/**
		 * 
		 */
		export var isDragable : boolean;
				
		/**
		 * 
		 */
		export var MIN_BUNDLE_SIZE : number;
				
		/**
		 * 
		 */
		export var max : number;
				
		/**
		 * 
		 */
		export var pageIncrement : number;
				
		/**
		 * 
		 */
		export var unitIncrement : number;
				
		/**
		 * Evaluate if the given point is in scroll bar bundle element
		 * @param  {Integer}  x a x location
		 * @param  {Integer}  y a y location
		 * @return {Boolean}   true if the point is located inside the
		 * scroll bar bundle element
		 * @method isInBundle
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function isInBundle(x : number, y : number): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function amount(): number;
				
		/**
		 * 
		 * @param p 
		 * @return  
		 */
		function pixel2value(p : any): number;
				
		/**
		 * 
		 */
		function value2pixel(): void;
				
		/**
		 * 
		 * @param target 
		 * @param prevOffset 
		 * @param prevLine 
		 * @param prevCol 
		 */
		function posChanged(target : any, prevOffset : any, prevLine : any, prevCol : any): void;
				
		/**
		 * 
		 * @param src 
		 */
		function fired(src : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function mouseClicked(e : any): void;
				
		/**
		 * Set the specified maximum value of the scroll bar component
		 * @param {Integer} m a maximum value
		 * @method setMaximum
		 * @param m 
		 */
		function setMaximum(m : number): void;
				
		/**
		 * 
		 * @param c 
		 */
		function setPosition(c : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function setExtraSize(e : any): void;
				
		/**
		 * 
		 */
		export var bundleLoc : number;
				
		/**
		 * 
		 */
		export var startDragLoc : number;
				
		/**
		 * 
		 * @param sx 
		 * @param sy 
		 * @param psx 
		 * @param psy 
		 */
		function scrollStateUpdated(sx : any, sy : any, psx : any, psy : any): void;
				
		/**
		 * 
		 */
		export var autoHide : boolean;
				
		/**
		 * 
		 */
		export var $interval : number;
				
		/**
		 * Set the given auto hide state.
		 * @param  {Boolean} b an auto hide state.
		 * @method setAutoHide
		 * @param b 
		 */
		function setAutoHide(b : boolean): void;
				
		/**
		 * 
		 * @param dx 
		 * @param dy 
		 * @param source 
		 * @return  
		 */
		function doScroll(dx : any, dy : any, source : any): boolean;
				
		/**
		 * Scroll manager listener method that is called every time
		 * a target component has been scrolled
		 * @param  {Integer} psx previous scroll x location
		 * @param  {Integer} psy previous scroll y location
		 * @method  scrolled
		 */
		function scrolled(): void;
				
		/**
		 * 
		 * @param hUnit 
		 * @param hPage 
		 * @param vUnit 
		 * @param vPage 
		 */
		function setIncrements(hUnit : any, hPage : any, vUnit : any, vPage : any): void;
				
		/**
		 * 
		 */
		export var isPosChangedLocked : boolean;
				
		/**
		 * 
		 * @param page 
		 * @param d 
		 * @return  
		 */
		function next(page : number, d : number): number;
				
		/**
		 * Test if the given tab page is in enabled state
		 * @param  {Integer} index a tab page index
		 * @return {Boolean} a tab page state
		 * @method isTabEnabled
		 * @param index 
		 * @return  
		 */
		function isTabEnabled(index : number): boolean;
				
		/**
		 * Draw currently activate tab page marker.
		 * @param  {2DContext} g a graphical context
		 * @param  {Object} r a tab page title rectangular area
		 * @method drawMarker
		 * @param g 
		 * @param r 
		 */
		function drawMarker(g : any, r : any): void;
				
		/**
		 * Paint the given tab page title
		 * @param  {2DContext} g a graphical context
		 * @param  {Integer} pageIndex a tab page index
		 * @method paintTab
		 * @param g 
		 * @param pageIndex 
		 */
		function paintTab(g : any, pageIndex : number): void;
				
		/**
		 * Get the given tab page title rectangular bounds
		 * @param  {Integer} i a tab page index
		 * @return {Object} a tab page rectangular bounds
		 * 
		 *    {x:{Integer}, y:{Integer}, width:{Integer}, height:{Integer}}
		 * 
		 * @protected
		 * @method getTabBounds
		 * @param i 
		 * @return  
		 */
		function getTabBounds(i : number): /* !this.pages.<i> */ any;
				
		/**
		 * Get tab index located at the given location
		 * @param  {Integer} x a x coordinate
		 * @param  {Integer} y a y coordinate
		 * @return {Integer} an index of the tab that is
		 * detected at the given location. -1 if no any
		 * tab can be found
		 * @method getTabAt
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getTabAt(x : number, y : number): number;
				
		/**
		 * 
		 * @param row 
		 * @param b? 
		 */
		function select(row : number, b? : boolean): void;
				
		/**
		 * Get the given tab. Using the tab you can control tab caption,
		 * icon.
		 * @param {Integer} pageIndex a tab page index
		 * @return  {zebra.ui.Tabs.TabView}
		 * @method getTab
		 * @param pageIndex 
		 * @return  
		 */
		function getTab(pageIndex : number): /* !this.pages.<i> */ any;
				
		/**
		 * Set tab side spaces.
		 * @param {Integer} sideSpace  [description]
		 * @method setSideSpace
		 * @param sideSpace 
		 */
		function setSideSpace(sideSpace : number): void;
				
		/**
		 * 
		 * @param vg 
		 * @param hg 
		 */
		function setPageGaps(vg : any, hg : any): void;
				
		/**
		 * Set the tab page element alignments
		 * @param {Integer|String} o an alignment. The valid value is one of the following:
		 * zebra.layout.LEFT, zebra.layout.RIGHT, zebra.layout.TOP, zebra.layout.BOTTOM or
		 * "left", "right", "top", bottom
		 * @method  setAlignment
		 * @param o 
		 */
		function setAlignment(o : number | string): void;
				
		/**
		 * Set enabled state for the given tab page
		 * @param  {Integer} i a tab page index
		 * @param  {Boolean} b a tab page enabled state
		 * @method enableTab
		 * @param i 
		 * @param b 
		 */
		function enableTab(i : number, b : boolean): void;
				
		/**
		 * 
		 */
		export var tabAreaX : number;
				
		/**
		 * 
		 */
		export var repaintY : number;
				
		/**
		 * 
		 */
		export var repaintX : number;
				
		/**
		 * 
		 */
		export var repaintHeight : number;
				
		/**
		 * 
		 */
		export var repaintWidth : number;
				
		/**
		 * 
		 */
		export var sideSpace : number;
				
		/**
		 * 
		 */
		export var tabAreaHeight : number;
				
		/**
		 * 
		 */
		export var tabAreaWidth : number;
				
		/**
		 * 
		 */
		export var tabAreaY : number;
				
		/**
		 * 
		 */
		export var selectedIndex : number;
				
		/**
		 * 
		 */
		export var overTab : number;
				
		/**
		 * 
		 */
		export var pages : Array<any>;
				
		/**
		 * 
		 */
		export var exactStep : number;
				
		/**
		 * 
		 */
		export var roughStep : number;
				
		/**
		 * 
		 */
		export var min : number;
				
		/**
		 * 
		 */
		export var netSize : number;
				
		/**
		 * 
		 */
		export var psH : number;
				
		/**
		 * 
		 */
		export var psW : number;
				
		/**
		 * 
		 */
		export var scaleStep : number;
				
		/**
		 * 
		 */
		export var correctDt : number;
				
		/**
		 * 
		 * @param g 
		 * @param loc 
		 */
		function paintNums(g : any, loc : any): void;
				
		/**
		 * 
		 * @return  
		 */
		function getScaleSize(): number;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function findNearest(x : any, y : any): /* !this.max */ any;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		function value2loc(v : any): number;
				
		/**
		 * 
		 * @param xy 
		 */
		function loc2value(xy : number): void;
				
		/**
		 * 
		 * @param value 
		 * @param s 
		 * @param d 
		 * @return  
		 */
		function nextValue(value : any, s : any, d : any): /* !this.max */ any;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		function getBundleLoc(v : any): number;
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		function getBundleBounds(v : any): zebra.Dummy.GetBundleBoundsRet;
				
		/**
		 * 
		 * @param v 
		 * @param d 
		 * @return  
		 */
		function getNeighborPoint(v : any, d : any): /* !this.min */ any;
				
		/**
		 * 
		 * @param i 
		 */
		function getPointValue(i : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param row 
		 * @param col 
		 * @param obj 
		 * @return  
		 */
		function getView(target : any, row : number, col : number, obj : any): /* !this.render */ any;
				
		/**
		 * 
		 */
		export var isShowTitle : boolean;
				
		/**
		 * 
		 */
		export var isShowScale : boolean;
				
		/**
		 * 
		 */
		export var isIntervalMode : boolean;
				
		/**
		 * 
		 */
		export var dragged : boolean;
				
		/**
		 * Test if the given component is a decorative element
		 * in the toolbar
		 * @param  {zebra.ui.Panel}  c a component
		 * @return {Boolean} return true if the component is
		 * decorative element of the toolbar
		 * @method isDecorative
		 * @protected
		 * @param i 
		 * @return  
		 */
		function isDecorative(i : (() => /* zebra.Dummy.constraints */ any) | number): boolean;
				
		/**
		 * 
		 */
		function pause(): void;
				
		/**
		 * Start or continue playing video
		 * @method play
		 */
		function play(): void;
				
		/**
		 * 
		 */
		export var isPlaying : boolean;
				
		/**
		 * 
		 */
		export var isReady : boolean;
				
		/**
		 * 
		 */
		export var identifier : number;
				
		/**
		 * 
		 */
		export var invLines : number;
				
		/**
		 * 
		 */
		export var startInvLine : number;
				
		/**
		 * 
		 */
		export var textWidth : number;
				
		/**
		 * 
		 */
		export var textHeight : number;
				
		/**
		 * 
		 */
		export var $dontHide : boolean;
				
		/**
		 * 
		 */
		export var selectionColor : string;
				
		/**
		 * 
		 */
		export var blinkingPeriod : number;
				
		/**
		 * 
		 */
		export var blinkMe : boolean;
				
		/**
		 * 
		 */
		export var blinkMeCounter : number;
				
		/**
		 * 
		 */
		export var isEditable : boolean;
				
		/**
		 * Set the specified blinking period of the text field cursor
		 * @param {Integer} [period] a text field cursor blinking period (in milliseconds),
		 * use -1 to disable cursor blinking. If the argument is not passed the default (500ms)
		 * blinking period will be applied.
		 * @method setBlinking
		 * @param period? 
		 */
		function setBlinking(period? : number): void;
				
		/**
		 * 
		 * @param a 
		 */
		function setTextAlign(a : any): void;
				
		/**
		 * Compute a text column and row by the given location.
		 * @param  {Integer} x  a x coordinate
		 * @param  {Integer} y  a y coordinate
		 * @return {Object} a text row and column as an object { row:, col }.
		 * @method  getTextRowColAt
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getTextRowColAt(x : number, y : number): any;
				
		/**
		 * 
		 * @param t 
		 * @param line 
		 * @param col 
		 * @param d 
		 * @return  
		 */
		function findNextWord(t : any, line : any, col : any, d : any): zebra.Dummy.FindNextWordRet;
				
		/**
		 * accumulate text model lines into string by the given start and end offsets
		 * r     - text view
		 * start - start offset
		 * end   - end offset
		 * @param r 
		 * @param start 
		 * @param end 
		 * @return  
		 */
		function getSubString(r : /* zebra.Dummy.constraints */ any, start : zebra.Dummy.GetSubString1, end : zebra.Dummy.GetSubString2): string;
				
		/**
		 * Remove selected text
		 * @method removeSelected
		 */
		function removeSelected(): void;
				
		/**
		 * 
		 */
		function startSelection(): void;
				
		/**
		 * 
		 * @param e 
		 */
		function keyTyped(e : any): void;
				
		/**
		 * 
		 */
		function selectAll_command(): void;
				
		/**
		 * 
		 * @param b 
		 * @param d 
		 */
		function nextWord_command(b : any, d : any): void;
				
		/**
		 * 
		 * @param b 
		 * @param d 
		 */
		function nextPage_command(b : any, d : any): void;
				
		/**
		 * Test if the given key pressed event has to be processed
		 * @protected
		 * @param  {zebra.ui.KeyEvent} e a key event
		 * @return {Boolean} true if the given key pressed event doesn't
		 * have be processed
		 * @method isFiltered
		 * @param e 
		 * @return  
		 */
		function isFiltered(e : any): boolean;
				
		/**
		 * 
		 * @param psx 
		 * @param psy 
		 */
		function catchScrolled(psx : any, psy : any): void;
				
		/**
		 * Draw the text field cursor
		 * @protected
		 * @param  {2DContext} g a 2D context
		 * @method drawCursor
		 * @param g 
		 */
		function drawCursor(g : any): void;
				
		/**
		 * Test if the text field has a selected text
		 * @return {Boolean} true if the text field has a selected text
		 * @method hasSelection
		 * @return  
		 */
		function hasSelection(): boolean;
				
		/**
		 * Set the specified hint text to be drawn with the given font and color.
		 * The hint is not-editable text that is shown in empty text field to help
		 * a user to understand which input the text field expects.
		 * @param {String|zebra.ui.View|Function} hint a hint text, view or view render method
		 * @return {zebra.ui.View} a hint view
		 * @method setHint
		 * @param hint 
		 * @return  
		 */
		function setHint(hint : string | Function): /* !this.hint */ any;
				
		/**
		 * 
		 */
		function undo_command(): void;
				
		/**
		 * 
		 */
		function redo_command(): void;
				
		/**
		 * Get a starting position (row and column) of a selected text
		 * @return {Array} a position of a selected text. First element
		 * of is a row and second column of selected text. null if
		 * there is no any selected text
		 * @method getStartSelection
		 * @return  
		 */
		function getStartSelection(): zebra.Dummy.GetStartSelectionRet;
				
		/**
		 * Get an ending position (row and column) of a selected text
		 * @return {Array} a position of a selected text. First element
		 * of is a row and second column of selected text. null if
		 * there is no any selected text
		 * @method getEndSelection
		 * @return  
		 */
		function getEndSelection(): zebra.Dummy.GetEndSelectionRet;
				
		/**
		 * Get a selected text
		 * @return {String} a selected text
		 * @method getSelectedText
		 * @return  
		 */
		function getSelectedText(): string;
				
		/**
		 * 
		 * @param e 
		 */
		function focusGained(e : any): void;
				
		/**
		 * 
		 * @param e 
		 */
		function focusLost(e : any): void;
				
		/**
		 * 
		 */
		function repaintCursor(): void;
				
		/**
		 * Clear a text selection.
		 * @method clearSelection
		 */
		function clearSelection(): void;
				
		/**
		 * The method returns the page size that has to be scroll up or down
		 * @param  {Integer} d a scrolling direction. -1 means scroll up, 1 means scroll down
		 * @return {Integer} a number of list items to be scrolled
		 * @method pageSize
		 * @protected
		 * @param d 
		 * @return  
		 */
		function pageSize(d : number): number;
				
		/**
		 * 
		 * @param txt 
		 */
		function clipPaste(txt : any): void;
				
		/**
		 * 
		 * @return  
		 */
		function clipCopy(): string;
				
		/**
		 * 
		 * @return  
		 */
		function cut(): string;
				
		/**
		 * Set the cursor view. The view defines rendering of the text field
		 * cursor.
		 * @param {zebra.ui.View} v a cursor view
		 * @method setCursorView
		 * @param v 
		 */
		function setCursorView(v : any): void;
				
		/**
		 * Adjust the size of the text field component to be enough to place the given
		 * number of rows and columns.
		 * @param {Integer} r a row of the text the height of the text field has to be adjusted
		 * @param {Integer} c a column of the text the width of the text field has to be adjusted
		 * @method setPSByRowsCols
		 * @param r 
		 * @param c 
		 */
		function setPSByRowsCols(r : number, c : number): void;
				
		/**
		 * Control the text field editable state
		 * @param {Boolean} b true to make the text field editable
		 * @method setEditable
		 * @param b 
		 */
		function setEditable(b : boolean): void;
				
		/**
		 * Set selection color
		 * @param {String} c a selection color
		 * @method setSelectionColor
		 * @param c 
		 */
		function setSelectionColor(c : string): void;
				
		/**
		 * 
		 */
		export var curX : number;
				
		/**
		 * 
		 */
		export var endCol : number;
				
		/**
		 * 
		 */
		export var endLine : number;
				
		/**
		 * 
		 */
		export var startCol : number;
				
		/**
		 * 
		 */
		export var startLine : number;
				
		/**
		 * 
		 */
		export var endOff : number;
				
		/**
		 * 
		 */
		export var startOff : number;
				
		/**
		 * 
		 */
		export var history : Array<zebra.Dummy.HistoryI>;
				
		/**
		 * 
		 */
		export var historyPos : number;
				
		/**
		 * 
		 */
		export var curH : number;
				
		/**
		 * 
		 */
		export var curW : number;
				
		/**
		 * 
		 */
		export var curY : number;
				
		/**
		 * 
		 */
		export var undoCounter : number;
				
		/**
		 * 
		 */
		export var redoCounter : number;
				
		/**
		 * Test if the given item is selectable.
		 * @param  {Integer}  i an item index
		 * @return {Boolean}  true if the given item is selectable
		 * @method isItemSelectable
		 * @param i 
		 * @return  
		 */
		function isItemSelectable(i : number): boolean;
				
		/**
		 * Get selected list item
		 * @return {Object} an item
		 * @method getSelected
		 * @return  
		 */
		function getSelected(): any;
				
		/**
		 * 
		 * @param ch 
		 * @return  
		 */
		function lookupItem(ch : any): number;
				
		/**
		 * Test if the given list item is selected
		 * @param  {Integer}  i an item index
		 * @return {Boolean}  true if the item with the given index is selected
		 * @method isSelected
		 * @param row 
		 * @return  
		 */
		function isSelected(row : number): boolean;
				
		/**
		 * Called when a pointer (mouse or finger on touch screen) is moved
		 * to a new location
		 * @param  {Integer} x a pointer x coordinate
		 * @param  {Integer} y a pointer y coordinate
		 * @method pointerMoved
		 * @protected
		 * @param x 
		 * @param y 
		 */
		function pointerMoved(x : number, y : number): void;
				
		/**
		 * * Return the given list item location.
		 * * @param  {Integer} i a list item index
		 * * @return {Object}  a location of the list item. The result is object that
		 * * has the following structure:
		 *        { x:{Integer}, y:{Integer} }
		 * * @method getItemLocation
		 * @param i 
		 * @return  
		 */
		function getItemLocation(i : number): zebra.Dummy.GetItemLocationRet;
				
		/**
		 * * Return the given list item size.
		 * * @param  {Integer} i a list item index
		 * * @return {Object}  a size of the list item. The result is object that
		 * * has the following structure:
		 *        { width:{Integer}, height:{Integer} }
		 * * @method getItemSize
		 * @param i 
		 * @return  
		 */
		function getItemSize(i : number): zebra.Dummy.GetItemSizeRet;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getItemIdxAt(x : number, y : number): /* !this.firstVisible */ any;
				
		/**
		 * Calculate maximal width and maximal height the items in the list have
		 * @protected
		 * @return {Integer} a max items size
		 * @method calcMaxItemSize
		 * @return  
		 */
		function calcMaxItemSize(): zebra.Dummy.CalcMaxItemSizeRet;
				
		/**
		 * Force repainting of the given list items
		 * @protected
		 * @param  {Integer} p an index of the first list item to be repainted
		 * @param  {Integer} n an index of the second list item to be repainted
		 * @method repaintByOffsets
		 * @param p 
		 * @param n 
		 */
		function repaintByOffsets(p : number, n : number): void;
				
		/**
		 * Draw the given list view element identified by the given id
		 * on the given list item.
		 * @param  {2DGraphics} g     a graphical context
		 * @param  {String}     id    a view id
		 * @param  {Integer}    index a list item index
		 * @protected
		 * @method drawViewAt
		 * @param g 
		 * @param id 
		 * @param index 
		 */
		function drawViewAt(g : any, id : string, index : number): void;
				
		/**
		 * Draw the given list view element identified by the given id
		 * at the specified location.
		 * @param  {2DGraphics} g     a graphical context
		 * @param  {String}     id    a view id
		 * @param  {Integer}    x a x coordinate the view has to be drawn
		 * @param  {Integer}    y a y coordinate the view has to be drawn
		 * @param  {Integer}    w a view width
		 * @param  {Integer}    h a view height
		 * @protected
		 * @method drawView
		 * @param g 
		 * @param id 
		 * @param v 
		 * @param x 
		 * @param y 
		 * @param w 
		 * @param h 
		 */
		function drawView(g : any, id : string, v : any, x : number, y : number, w : number, h : number): void;
				
		/**
		 * 
		 * @param g 
		 */
		function update(g : any): void;
				
		/**
		 * Fire selected event
		 * @param  {Integer|null} prev a previous selected item index. null if the
		 * same item has been re-selected
		 * @method fireSelected
		 * @protected
		 * @param prev 
		 */
		function fireSelected(prev : number): void;
				
		/**
		 * Select the given list item. The method is called when an item
		 * selection is triggered by a user interaction: key board, or mouse
		 * @param  {Integer} o an item index
		 * @method $select
		 * @protected
		 * @param o 
		 */
		function $select(o : number): void;
				
		/**
		 * 
		 * @param target 
		 * @param e 
		 * @param index 
		 */
		function elementInserted(target : any, e : any, index : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param e 
		 * @param index 
		 */
		function elementRemoved(target : any, e : any, index : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param e 
		 * @param pe 
		 * @param index 
		 */
		function elementSet(target : any, e : any, pe : any, index : any): void;
				
		/**
		 * Find a next selectable list item starting from the given offset
		 * with the specified direction
		 * @param  {Integer} off a start item index to perform search
		 * @param  {Integer} d   a direction increment. Cam be -1 or 1
		 * @return {Integer} a next selectable item index
		 * @method findSelectable
		 * @protected
		 * @param off 
		 * @param d 
		 * @return  
		 */
		function findSelectable(off : number, d : number): number;
				
		/**
		 * Set the list items view provider. Defining a view provider allows developers
		 * to customize list item rendering.
		 * @param {Object|Function} v a view provider class instance or a function that
		 * says which view has to be used for the given list model data. The function
		 * has to satisfy the following method signature: "function(list, modelItem, index)"
		 * @method setViewProvider
		 * @param p 
		 */
		function setViewProvider(p : /* zebra.Dummy.constraints */ any): void;
				
		/**
		 * 
		 * @param index 
		 */
		function notifyScrollMan(index : number): void;
				
		/**
		 * Set the left, right, top and bottom a list item paddings
		 * @param {Integer} g a left, right, top and bottom a list item paddings
		 * @method setItemGap
		 * @param g 
		 */
		function setItemGap(g : number): void;
				
		/**
		 * 
		 */
		function vVisibility(): void;
				
		/**
		 * 
		 */
		export var firstVisible : number;
				
		/**
		 * 
		 */
		export var psHeight_ : number;
				
		/**
		 * 
		 */
		export var psWidth_ : number;
				
		/**
		 * 
		 */
		export var firstVisibleY : number;
		
		/**
		 * 
		 */
		var vArea : {
						
			/**
			 * 
			 */
			y : number;
						
			/**
			 * 
			 */
			x : number;
						
			/**
			 * 
			 */
			width : number;
						
			/**
			 * 
			 */
			height : number;
		}
				
		/**
		 * 
		 */
		export var widths : Array<any>;
				
		/**
		 * 
		 */
		export var heights : Array<any>;
				
		/**
		 * 
		 */
		export var visValid : boolean;
				
		/**
		 * Called whenever the given combo box value has been updated with the specified
		 * value. Implement the method to synchronize content panel with updated combo
		 * box value
		 * @method comboValueUpdated
		 * @param {zebra.ui.Combo} combo a combo box component that has been updated
		 * @param {Object} value a value with which the combo box has been updated
		 * @param combo 
		 * @param v 
		 */
		function comboValueUpdated(combo : any, v : any): void;
				
		/**
		 * Get a combo box the content panel belongs
		 * @method getCombo
		 * @return {zebra.ui.Combo} a combo the content panel belongs
		 * @return  
		 */
		function getCombo(): /* !this */ any;
				
		/**
		 * 
		 */
		export var $closeTime : number;
				
		/**
		 * 
		 */
		export var dontGenerateUpdateEvent : boolean;
				
		/**
		 * 
		 * @param src 
		 * @param text 
		 */
		function contentUpdated(src : any, text : any): void;
				
		/**
		 * 
		 * @param i 
		 */
		function setSelectedIndex(i : any): void;
				
		/**
		 * 
		 * @return  
		 */
		function isPadShown(): boolean;
				
		/**
		 * Hide combo drop down list
		 * @method hidePad
		 */
		function hidePad(): void;
				
		/**
		 * Show combo drop down list
		 * @method showPad
		 */
		function showPad(): void;
				
		/**
		 * Bind the given list component to the combo box component.
		 * @param {zebra.ui.BaseList} l a list component
		 * @method setList
		 * @param l 
		 */
		function setList(l : () => void): void;
				
		/**
		 * Set the given combo box selection view
		 * @param {zebra.ui.View} c a view
		 * @method setSelectionView
		 * @param c 
		 */
		function setSelectionView(c : any): void;
				
		/**
		 * Set the maximal height of the combo box pad element.
		 * @param {Integer} h a maximal combo box pad size
		 * @method setMaxPadHeight
		 * @param h 
		 */
		function setMaxPadHeight(h : number): void;
				
		/**
		 * 
		 */
		export var maxPadHeight : number;
				
		/**
		 * 
		 */
		export var $lockListSelEvent : boolean;
				
		/**
		 * 
		 */
		export var $triggeredByPointer : boolean;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function isLayerActiveAt(x : number, y : number): boolean;
				
		/**
		 * 
		 * @param w 
		 * @return  
		 */
		function getWinType(w : any): /* !this.winsTypes.<i> */ any;
				
		/**
		 * * Add the given window with the given type and the listener to the layer.
		 * * @param {String} type   a type of the window: "modal",
		 * * "mdi" or "info"
		 * * @param {zebra.ui.Panel} win an UI component to be shown as window
		 * * @param {Object} [listener] an optional the window listener
		 * 
		 * {
		 *     winActivated : function(layer, win, isActive) {
		 * 
		 *     },
		 * 
		 *     winOpened : function(layer, win, isOpened) {
		 * 
		 *     }
		 * }
		 * 
		 * * @method addWin
		 * @param type 
		 * @param win 
		 * @param listener? 
		 */
		function addWin(type : string, win : any, listener? : any): void;
				
		/**
		 * 
		 */
		export var topModalIndex : number;
				
		/**
		 * 
		 */
		export var winsStack : Array<any>;
				
		/**
		 * 
		 */
		export var winsTypes : /*no type*/{};
				
		/**
		 * 
		 */
		export var isPopupEditor : boolean;
				
		/**
		 * 
		 */
		export var minSize : number;
				
		/**
		 * Test if the window is shown as a window and activated
		 * @return {Boolean} true is the window is shown as internal window and
		 * is active.
		 * @method isActive
		 * @return  
		 */
		function isActive(): boolean;
				
		/**
		 * Test if the mouse cursor is inside the window corner component
		 * @protected
		 * @param  {Integer} px a x coordinate of the mouse cursor
		 * @param  {Integer} py a y coordinate of the mouse cursor
		 * @return {Boolean}  true if the mouse cursor is inside window
		 * corner component
		 * @method insideCorner
		 * @param px 
		 * @param py 
		 * @return  
		 */
		function insideCorner(px : number, py : number): boolean;
				
		/**
		 * 
		 * @param winLayer 
		 * @param target 
		 * @param b 
		 */
		function winOpened(winLayer : any, target : any, b : any): void;
				
		/**
		 * 
		 * @param winLayer 
		 * @param target 
		 * @param b 
		 */
		function winActivated(winLayer : any, target : any, b : any): void;
				
		/**
		 * Test if the window has been maximized to occupy the whole
		 * window layer space.
		 * @return {Boolean} true if the window has been maximized
		 * @method isMaximized
		 * @return  
		 */
		function isMaximized(): boolean;
				
		/**
		 * 
		 */
		function createCaptionPan(): void;
				
		/**
		 * 
		 */
		function createContentPan(): void;
				
		/**
		 * 
		 */
		function createTitle(): void;
				
		/**
		 * 
		 * @param i 
		 * @param icon 
		 */
		function setIcon(i : () => void, icon : /* zebra.Dummy.constraints */ any): void;
				
		/**
		 * 
		 */
		export var psw : number;
				
		/**
		 * 
		 */
		export var prevH : number;
				
		/**
		 * 
		 */
		export var dy : number;
				
		/**
		 * 
		 */
		export var dx : number;
				
		/**
		 * 
		 */
		export var py : number;
				
		/**
		 * 
		 */
		export var px : number;
				
		/**
		 * 
		 */
		export var psh : number;
				
		/**
		 * 
		 */
		export var action : number;
				
		/**
		 * Callback method that is called every time the menu item has
		 * been selected.
		 * @method  itemSelected
		 */
		function itemSelected(): void;
				
		/**
		 * Set the menu item caption.
		 * @param {String} caption a caption
		 * @method setCaption
		 * @param caption 
		 */
		function setCaption(caption : boolean | string): void;
				
		/**
		 * Get check state component
		 * @return {zebra.ui.Panel} a check state component
		 * @method getCheck
		 * @protected
		 * @return  
		 */
		function getCheck(): /* !this.kids.0 */ any;
				
		/**
		 * Get content component
		 * @return {zebra.ui.Panel} a content component
		 * @method getContent
		 * @protected
		 * @return  
		 */
		function getContent(): /* !this.kids.1 */ any;
				
		/**
		 * Get menu item child component to render sub item arrow element
		 * @return {zebra.ui.Panel} a sub item arrow component
		 * @method getSub
		 * @protected
		 * @return  
		 */
		function getSub(): /* !this.kids.2 */ any;
				
		/**
		 * Hide sub menu arrow component
		 * @method hideSub
		 */
		function hideSub(): void;
				
		/**
		 * 
		 * @param b 
		 */
		function activateSub(b : boolean): void;
				
		/**
		 * Set the menu item checked state
		 * @param {Boolean} b a checked state
		 * @method setCheckState
		 * @param b 
		 */
		function setCheckState(b : boolean): void;
				
		/**
		 * Get menu item checked state
		 * @return {Boolean} a menu item checked state
		 * @method getCheckState
		 * @return  
		 */
		function getCheckState(): boolean;
				
		/**
		 * Set the menu item checked state manager.
		 * @param {zebra.ui.SwitchManager|zebra.ui.Group} man a switch manager
		 * @method setCheckManager
		 * @param man 
		 */
		function setCheckManager(man : /* zebra.Dummy.constraints */ any): void;
				
		/**
		 * 
		 */
		export var noSubIfEmpty : boolean;
				
		/**
		 * Define component events handler.
		 * @param  {Integer} id  a component event id
		 * @param  {zebra.ui,Panel} src a component that triggers the event
		 * @param  {Object} p1  a first event parameter.
		 * @param  {Object} p2  a second event parameter
		 * @method  childCompEvent
		 * @param id 
		 * @param src 
		 * @param p1 
		 * @param p2 
		 */
		function childCompEvent(id : number, src : any, p1 : any, p2 : any): void;
				
		/**
		 * Get a menu item by the given index
		 * @param  {Integer} i a menu item index
		 * @return {zebra.ui.Panel} a menu item component
		 * @method getMenuItem
		 * @param i 
		 * @return  
		 */
		function getMenuItem(i : number): /* !this.kids.<i> */ any;
				
		/**
		 * Test if the menu has a selectable item
		 * @return {Boolean} true if the menu has at least one selectable item
		 * @method hasSelectableItems
		 * @return  
		 */
		function hasSelectableItems(): boolean;
				
		/**
		 * Get a sub menu for the given menu item
		 * @param  {Integer} index a menu item index
		 * @return {zebra.ui.Menu} a sub menu or null if no sub menu
		 * is defined for the given menu item
		 * @method getMenuAt
		 * @param index 
		 * @return  
		 */
		function getMenuAt(index : number): /* !this.menus.<i> */ any;
				
		/**
		 * Set the given menu as a sub-menu for the specified menu item
		 * @param {Integer} i an index of a menu item for that a sub menu
		 * has to be attached
		 * @param {zebra.ui.Menu} m a sub menu to be attached
		 * @method setMenuAt
		 * @param i 
		 * @param m 
		 */
		function setMenuAt(i : number | (() => /* zebra.Dummy.constraints */ any), m : /* zebra.Dummy.constraints */ any): void;
				
		/**
		 * Get the specified sub-menu index
		 * @param  {zebra.ui.Menu} menu a sub menu
		 * @return {Integer} a sub menu index. -1 if the menu is
		 * not a sub menu of the given menu
		 * @method indexMenuOf
		 * @param menu 
		 * @return  
		 */
		function indexMenuOf(menu : any): number;
				
		/**
		 * Called when the menu or a sub-menu has been canceled (key ESCAPE has been pressed).
		 * @param  {zebra.ui.Menu} m a menu (or sub menu) that has been canceled
		 * @method $canceled
		 * @protected
		 * @param m 
		 */
		function $canceled(m : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
				
		/**
		 * Get the top menu in the given shown popup menu hierarchy
		 * @return {zebra.ui.Menu} a top menu
		 * @method $topMenu
		 * @protected
		 * @return  
		 */
		function $topMenu(): /* !this */ any;
				
		/**
		 * Hide the menu and all visible sub-menus
		 * @param {zebra.ui.Menu} triggeredBy a menu that has triggered the hiding of
		 * menu hierarchy
		 * @method $hideMenu
		 * @protected
		 * @param triggeredBy 
		 */
		function $hideMenu(triggeredBy : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
				
		/**
		 * Get a sub menu that is shown at the given moment.
		 * @return {zebra.ui.Menu} a child sub menu. null if no child sub-menu
		 * has been shown
		 * @method $childMenu
		 * @protected
		 * @return  
		 */
		function $childMenu(): any;
				
		/**
		 * Show the given sub menu
		 * @param  {zebra.ui.Menu} sub a sub menu to be shown
		 * @method $showSubMenu
		 * @protected
		 * @param menu 
		 */
		function $showSubMenu(menu : /* zebra.Dummy.$showSubMenu0 */ any): void;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function triggerSelectionByPos(i : number): boolean;
		
		/**
		 * 
		 */
		namespace decoratives{
		}
				
		/**
		 * 
		 */
		export var $isActive : boolean;
				
		/**
		 * 
		 */
		export var mRight : number;
				
		/**
		 * 
		 */
		export var mBottom : number;
				
		/**
		 * 
		 */
		export var mLeft : number;
				
		/**
		 * 
		 */
		export var mTop : number;
				
		/**
		 * 
		 * @param mb 
		 */
		function setMenubar(mb : any): void;
				
		/**
		 * 
		 */
		export var borderColor : string;
				
		/**
		 * 
		 */
		export var borderWidth : number;
		
		/**
		 * 
		 */
		var $contentPs : {
						
			/**
			 * 
			 */
			height : number;
						
			/**
			 * 
			 */
			width : number;
		}
				
		/**
		 * 
		 */
		export var hideTooltipByPress : boolean;
				
		/**
		 * Hide tooltip if it has been shown
		 * @method hideTooltip
		 */
		function hideTooltip(): void;
				
		/**
		 * 
		 */
		export var $popupMenuY : number;
				
		/**
		 * 
		 */
		export var $popupMenuX : number;
				
		/**
		 * 
		 */
		export var $tooltipY : number;
				
		/**
		 * 
		 */
		export var $tooltipX : number;
				
		/**
		 * 
		 */
		export var showTooltipIn : number;
				
		/**
		 * 
		 */
		export var size : number;
				
		/**
		 * 
		 * @param grid 
		 * @param row 
		 * @param col 
		 * @param data 
		 * @param editor 
		 * @return  
		 */
		function fetchEditedValue(grid : any, row : number, col : number, data : zebra.Dummy.FetchEditedValue3, editor : any): zebra.Dummy.FetchEditedValue3;
				
		/**
		 * 
		 * @param grid 
		 * @param row 
		 * @param col 
		 * @param v 
		 * @return  
		 */
		function getEditor(grid : any, row : number, col : number, v : any): /* !this.boolEditor */ any;
				
		/**
		 * Test if the specified input event has to trigger the given grid cell editing
		 * @param  {zebra.ui.grid.Grid} grid a grid
		 * @param  {Integer} row  a grid cell row
		 * @param  {Integer} col  a grid cell column
		 * @param  {zebra.ui.InputEvent} e  an event to be evaluated
		 * @return {Boolean} true if the given input event triggers the given cell editing
		 * @method shouldStart
		 * @param grid 
		 * @param row 
		 * @param col 
		 * @param e 
		 * @return  
		 */
		function shouldStart(grid : any, row : number, col : number, e : any): boolean;
				
		/**
		 * Test if the specified input event has to canceling the given grid cell editing
		 * @param  {zebra.ui.grid.Grid} grid a grid
		 * @param  {Integer} row  a grid cell row
		 * @param  {Integer} col  a grid cell column
		 * @param  {zebra.ui.InputEvent} e  an event to be evaluated
		 * @return {Boolean} true if the given input event triggers the given cell editing
		 * cancellation
		 * @method shouldCancel
		 * @param grid 
		 * @param row 
		 * @param col 
		 * @param e 
		 * @return  
		 */
		function shouldCancel(grid : any, row : number, col : number, e : any): boolean;
				
		/**
		 * Test if the specified input event has to trigger finishing the given grid cell editing
		 * @param  {zebra.ui.grid.Grid} grid [description]
		 * @param  {Integer} row  a grid cell row
		 * @param  {Integer} col  a grid cell column
		 * @param  {zebra.ui.InputEvent} e  an event to be evaluated
		 * @return {Boolean} true if the given input event triggers finishing the given cell editing
		 * @method shouldFinish
		 * @param grid 
		 * @param row 
		 * @param col 
		 * @param e 
		 * @return  
		 */
		function shouldFinish(grid : any, row : number, col : number, e : any): boolean;
				
		/**
		 * 
		 */
		export var activeAreaSize : number;
				
		/**
		 * 
		 */
		export var lineColor : string;
				
		/**
		 * 
		 */
		export var isResizable : boolean;
				
		/**
		 * 
		 */
		export var isAutoFit : boolean;
				
		/**
		 * Get the given row or column caption preferred size
		 * @param  {Integer} rowcol a row or column of a caption
		 * @return {Integer}  a size of row or column caption
		 * @method getCaptionPS
		 * @param rowcol 
		 * @return  
		 */
		function getCaptionPS(rowcol : number): number;
				
		/**
		 * 
		 * @param src 
		 * @param col 
		 * @param pw 
		 */
		function captionResized(src : any, col : number, pw : any): void;
				
		/**
		 * 
		 * @param x 
		 * @param y 
		 */
		function calcRowColAt(x : number, y : number): void;
				
		/**
		 * Compute a column (for horizontal caption component) or row (for
		 * vertically aligned caption component) at the given location
		 * @param  {Integer} x a x coordinate
		 * @param  {Integer} y an y coordinate
		 * @param  {Function} [f] an optional match function. The method can be passed
		 * if you need to detect a particular area of row or column. The method gets
		 * a grid metrics as the first argument, a x or y location to be detected,
		 * a row or column y or x coordinate, a row or column height or width and
		 * row or column index. The method has to return true if the given location
		 * is in.
		 * @return {Integer}  a row or column
		 * @method calcRowColAt
		 * @param x 
		 * @param y 
		 * @param f? 
		 * @return  
		 */
		function getCaptionAt(x : number, y : number, f? : zebra.Dummy.GetCaptionAt2): number;
				
		/**
		 * 
		 */
		export var selectedColRow : number;
				
		/**
		 * Get a grid caption column or row title view
		 * @param  {Integer} i a row (if the caption is vertical) or
		 * column (if the caption is horizontal) index
		 * @return {zebra.ui.View} a view to be used as the given
		 * row or column title view
		 * @method getTitleView
		 * @param i 
		 * @return  
		 */
		function getTitleView(i : number): /* !this.render */ any;
				
		/**
		 * 
		 * @param rowcol 
		 */
		function getTitle(rowcol : any): void;
				
		/**
		 * Put the given title for the given caption cell.
		 * @param  {Integer} rowcol a grid caption cell index
		 * @param  {String|zebra.ui.View} title a title of the given grid caption cell.
		 * Can be a string or zebra.ui.View class instance
		 * @method putTitle
		 * @param rowcol 
		 * @param t 
		 */
		function putTitle(rowcol : number, t : {} | (() => any)): void;
				
		/**
		 * 
		 * @param rowcol 
		 * @param xa 
		 * @param ya 
		 */
		function setTitleAlignments(rowcol : any, xa : any, ya : any): void;
				
		/**
		 * 
		 * @param i 
		 * @param v 
		 */
		function setTitleBackground(i : any, v : any): void;
				
		/**
		 * 
		 */
		export var titles : Array<any>;
				
		/**
		 * 
		 */
		export var sortState : number;
				
		/**
		 * 
		 */
		export var isSortable : boolean;
				
		/**
		 * Set the given column sortable state
		 * @param {Integer} col a column
		 * @param {Boolean} b true if the column has to be sortable
		 * @method setSortable
		 * @param col 
		 * @param b 
		 */
		function setSortable(col : number, b : boolean): void;
				
		/**
		 * 
		 * @param target 
		 * @param info 
		 */
		function matrixSorted(target : any, info : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param prevRows 
		 * @param prevCols 
		 */
		function matrixResized(target : any, prevRows : any, prevCols : any): void;
				
		/**
		 * 
		 */
		export var DEF_COLWIDTH : number;
				
		/**
		 * 
		 */
		export var DEF_ROWHEIGHT : number;
				
		/**
		 * 
		 */
		export var cellInsetsBottom : number;
				
		/**
		 * 
		 */
		export var cellInsetsTop : number;
				
		/**
		 * 
		 */
		export var lineSize : number;
				
		/**
		 * 
		 */
		export var cellInsetsRight : number;
				
		/**
		 * 
		 */
		export var cellInsetsLeft : number;
				
		/**
		 * 
		 */
		export var drawHorLines : boolean;
				
		/**
		 * 
		 */
		export var drawVerLines : boolean;
				
		/**
		 * 
		 */
		export var isUsePsMetric : boolean;
				
		/**
		 * 
		 */
		function $topY(): void;
				
		/**
		 * 
		 */
		function $leftX(): void;
				
		/**
		 * 
		 * @param col 
		 * @param x 
		 * @param d 
		 * @param b 
		 * @return  
		 */
		function colVisibility(col : number, x : number, d : number, b : boolean): zebra.Dummy.ColVisibilityRet;
				
		/**
		 * 
		 * @param row 
		 * @param y 
		 * @param d 
		 * @param b 
		 * @return  
		 */
		function rowVisibility(row : number, y : number, d : number, b : boolean): zebra.Dummy.RowVisibilityRet;
				
		/**
		 * 
		 * @param row 
		 * @param col 
		 * @param e 
		 * @return  
		 */
		function $se(row : any, col : any, e : any): boolean;
				
		/**
		 * 
		 */
		function getXOrigin(): void;
				
		/**
		 * 
		 */
		function getYOrigin(): void;
				
		/**
		 * Get a preferred width the given column wants to have
		 * @param  {Integer} col a column
		 * @return {Integer} a preferred width of the given column
		 * @method getColPSWidth
		 * @param col 
		 * @return  
		 */
		function getColPSWidth(col : number): number;
				
		/**
		 * Get a preferred height the given row wants to have
		 * @param  {Integer} col a row
		 * @return {Integer} a preferred height of the given row
		 * @method getRowPSHeight
		 * @param row 
		 * @return  
		 */
		function getRowPSHeight(row : any): number;
				
		/**
		 * Get number of rows in the given grid
		 * @return {Integer} a number of rows
		 * @method getGridRows
		 * @return  
		 */
		function getGridRows(): /* !this.model.rows */ any;
				
		/**
		 * Get number of columns in the given grid
		 * @return {Integer} a number of columns
		 * @method getGridColumns
		 * @return  
		 */
		function getGridCols(): /* !this.model.cols */ any;
				
		/**
		 * Get the  given grid row height
		 * @param  {Integer} row a grid row
		 * @return {Integer} a height of the given row
		 * @method getRowHeight
		 * @param row 
		 * @return  
		 */
		function getRowHeight(row : number): /* !this.rowHeights.<i> */ any;
				
		/**
		 * Get the given grid column width
		 * @param  {Integer} col a grid column
		 * @return {Integer} a width of the given column
		 * @method getColWidth
		 * @param col 
		 * @return  
		 */
		function getColWidth(col : number): /* !this.colWidths.<i> */ any;
				
		/**
		 * 
		 * @return  
		 */
		function getCellsVisibility(): /* !this.visibility */ any;
				
		/**
		 * Get the given column top-left corner x coordinate
		 * @param  {Integer} col a column
		 * @return {Integer} a top-left corner x coordinate of the given column
		 * @method getColX
		 * @param col 
		 * @return  
		 */
		function getColX(col : number): number;
				
		/**
		 * Get the given row top-left corner y coordinate
		 * @param  {Integer} row a row
		 * @return {Integer} a top-left corner y coordinate
		 * of the given column
		 * @method getColX
		 * @param row 
		 * @return  
		 */
		function getRowY(row : number): number;
				
		/**
		 * 
		 * @param off 
		 */
		function iColVisibility(off : number): void;
				
		/**
		 * 
		 * @param off 
		 */
		function iRowVisibility(off : number): void;
				
		/**
		 * Get top grid caption height. Return zero if no top caption element has been defined
		 * @return {Integer} a top caption height
		 * @protected
		 * @method  getTopCaptionHeight
		 * @return  
		 */
		function getTopCaptionHeight(): /* !this.topCaption.height */ any;
				
		/**
		 * Get left grid caption width. Return zero if no left caption element has been defined
		 * @return {Integer} a left caption width
		 * @protected
		 * @method  getLeftCaptionWidth
		 * @return  
		 */
		function getLeftCaptionWidth(): /* !this.leftCaption.width */ any;
				
		/**
		 * Stop editing a grid cell.
		 * @param  {Boolean} applyData true if the edited data has to be applied as a new
		 * grid cell content
		 * @protected
		 * @method stopEditing
		 * @param applyData 
		 */
		function stopEditing(applyData : boolean): void;
				
		/**
		 * Set if horizontal and vertical lines have to be painted
		 * @param {Boolean} hor true if horizontal lines have to be painted
		 * @param {Boolean} ver true if vertical lines have to be painted
		 * @method setDrawLines
		 * @param hor 
		 * @param ver 
		 */
		function setDrawLines(hor : boolean, ver : boolean): void;
				
		/**
		 * 
		 * @param mode 
		 */
		function setPosMarkerMode(mode : any): void;
				
		/**
		 * Repaint range of grid rows
		 * @param  {Integer} r1 the first row to be repainted
		 * @param  {Integer} r2 the last row to be repainted
		 * @method repaintRows
		 * @param r1 
		 * @param r2 
		 */
		function repaintRows(r1 : number, r2 : number): void;
				
		/**
		 * Detect a cell by the given location
		 * @param  {Integer} x a x coordinate relatively the grid component
		 * @param  {Integer} y a y coordinate relatively the grid component
		 * @return {Array} an array that contains detected grid cell row as
		 * the first element and a grid column as the second element. The
		 * row and column values are set to -1 if no grid cell can be found
		 * at the given location
		 * @method cellByLocation
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function cellByLocation(x : number, y : number): zebra.Dummy.CellByLocationRet;
				
		/**
		 * Clear grid row or rows selection
		 * @method clearSelect
		 */
		function clearSelect(): void;
				
		/**
		 * 
		 */
		function laidout(): void;
				
		/**
		 * Paint vertical and horizontal grid component lines
		 * @param  {2DContext} g a HTML5 canvas 2d context
		 * @method paintNet
		 * @protected
		 * @param g 
		 */
		function paintNet(g : zebra.Dummy.PaintNet0): void;
				
		/**
		 * Paint grid data
		 * @param  {2DContext} g a HTML5 canvas 2d context
		 * @method paintData
		 * @protected
		 * @param g 
		 */
		function paintData(g : any): void;
				
		/**
		 * 
		 * @param g 
		 */
		function paintPosMarker(g : any): void;
				
		/**
		 * 
		 */
		function rPsMetric(): void;
				
		/**
		 * 
		 * @param rowcol 
		 * @param b 
		 */
		function getPSSize(rowcol : number, b : boolean): void;
				
		/**
		 * 
		 */
		function rCustomMetric(): void;
				
		/**
		 * Set the given height for the specified grid row. The method has no effect
		 * if the grid component is forced to use preferred size metric.
		 * @param {Integer} row a grid row
		 * @param {Integer} h   a height of the grid row
		 * @method setRowHeight
		 * @param row 
		 * @param h 
		 */
		function setRowHeight(row : number, h : number): void;
				
		/**
		 * Set the given height for all or the specified range of rows
		 * @param {Integer} [row] start row
		 * @param {Integer} [len] number of rows whose height has to be set
		 * @param {Integer} h  a height
		 * @method setRowsHeight
		 * @param row? 
		 * @param len? 
		 * @param h 
		 */
		function setRowsHeight(row? : number, len? : number, h : number): void;
				
		/**
		 * Set the given width for the specified grid column. The method has no effect
		 * if the grid component is forced to use preferred size metric.
		 * @param {Integer} column a grid column
		 * @param {Integer} w   a width of the grid column
		 * @method setColWidth
		 * @param col 
		 * @param w 
		 */
		function setColWidth(col : any, w : number): void;
				
		/**
		 * Set the given width for all or the specified range of columns
		 * @param {Integer} [col] start column
		 * @param {Integer} [len] number of columns whose height has to be set
		 * @param {Integer} w  a width
		 * @method setColsHeight
		 * @param col? 
		 * @param len? 
		 * @param w 
		 */
		function setColsWidth(col? : number, len? : number, w : number): void;
				
		/**
		 * 
		 * @param target 
		 * @param row 
		 * @param col 
		 * @param prevValue 
		 */
		function cellModified(target : any, row : any, col : any, prevValue : any): void;
				
		/**
		 * Set the given editor provider. Editor provider is a way to customize
		 * cell editing.
		 * @param {Object} p an editor provider
		 * @method setEditorProvider
		 * @param p 
		 */
		function setEditorProvider(p : any): void;
				
		/**
		 * Force to size grid columns and rows according to its preferred size
		 * @param {Boolean} b use true to use preferred size
		 * @method setUsePsMetric
		 * @param b 
		 */
		function setUsePsMetric(b : boolean): void;
				
		/**
		 * Set the given top, left, right, bottom cell paddings
		 * @param {Integer} p a top, left, right and bottom cell paddings
		 * @method setCellPadding
		 * @param p 
		 */
		function setCellPadding(p : number): void;
				
		/**
		 * Set the given top, left, right, bottom cell paddings
		 * @param {Integer} t a top cell padding
		 * @param {Integer} l a left cell padding
		 * @param {Integer} b a bottom cell padding
		 * @param {Integer} r a rightcell padding
		 * @method setCellPaddings
		 * @param t 
		 * @param l 
		 * @param b 
		 * @param r 
		 */
		function setCellPaddings(t : number, l : number, b : number, r : number): void;
				
		/**
		 * Set the given color to render the grid vertical and horizontal lines
		 * @param {String} c a color
		 * @method setLineColor
		 * @param c 
		 */
		function setLineColor(c : string): void;
				
		/**
		 * Set the given grid lines size
		 * @param {Integer} s a size
		 * @method setLineSize
		 * @param s 
		 */
		function setLineSize(s : number): void;
				
		/**
		 * 
		 * @param row 
		 * @param col 
		 * @return  
		 */
		function startEditing(row : number, col : number): boolean;
				
		/**
		 * Fetch a data from matrix model that has to be edited
		 * @param  {Integer} row a row
		 * @param  {Integer} col a column
		 * @return {Object} a matrix model data to be edited
		 * @method getDataToEdit
		 * @protected
		 * @param row 
		 * @param col 
		 * @return  
		 */
		function getDataToEdit(row : number, col : number): any;
				
		/**
		 * Apply the given edited data to grid matrix model
		 * @param  {Integer} row a row
		 * @param  {Integer} col a column
		 * @param  {Object}  an edited matrix model data to be applied
		 * @method setEditedData
		 * @protected
		 * @param row 
		 * @param col 
		 * @param value 
		 */
		function setEditedData(row : number, col : number, value : any): void;
				
		/**
		 * 
		 */
		export var colOffset : number;
				
		/**
		 * 
		 */
		export var pressedCol : number;
				
		/**
		 * 
		 */
		export var rowOffset : number;
		
		/**
		 * 
		 */
		var visibleArea : {
						
			/**
			 * 
			 */
			y : number;
						
			/**
			 * 
			 */
			x : number;
						
			/**
			 * 
			 */
			width : number;
						
			/**
			 * 
			 */
			height : number;
		}
				
		/**
		 * 
		 */
		export var pressedRow : number;
				
		/**
		 * 
		 */
		export var editingCol : number;
				
		/**
		 * 
		 */
		export var editingRow : number;
				
		/**
		 * 
		 */
		export var colWidths : Array<any>;
				
		/**
		 * 
		 */
		export var rowHeights : Array<any>;
		
		/**
		 * force metrics to be calculated automatically
		 */
		namespace visibility{
						
			/**
			 * 
			 * @return  
			 */
			function hasVisibleCells(): boolean;
		}
				
		/**
		 * 
		 * @return  
		 */
		function getMinWidth(): number;
				
		/**
		 * 
		 * @param targetAreaW 
		 */
		function calcColWidths(targetAreaW : number): void;
				
		/**
		 * 
		 */
		function recalcPS(): void;
				
		/**
		 * 
		 */
		export var $widths : Array<any>;
		
		/**
		 * 
		 */
		var $strPs : {
						
			/**
			 * 
			 */
			width : number;
		}
				
		/**
		 * 
		 */
		export var $props : Array<any>;
				
		/**
		 * 
		 */
		export var $prevWidth : number;
				
		/**
		 * 
		 */
		export var $propW : number;
				
		/**
		 * 
		 */
		export var $propsW : number;
				
		/**
		 * 
		 */
		export var gapy : number;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function isOpen(i : any): boolean;
				
		/**
		 * Get calculated for the given tree model item metrics
		 * @param  {zebra.data.Item} i a tree item
		 * @return {Object}   an tree model item metrics. Th
		 * @method getItemMetrics
		 * @param i 
		 * @return  
		 */
		function getItemMetrics(i : zebra.Dummy.GetItemMetrics0): any;
				
		/**
		 * 
		 * @param root 
		 */
		function togglePressed(root : any): void;
				
		/**
		 * 
		 * @param root 
		 * @param e 
		 */
		function itemPressed(root : any, e : any): void;
				
		/**
		 * * Get tree model item  metrical bounds (location and size).
		 * * @param  {zebra.data.Item} root an tree model item
		 * * @return {Object} a structure that keeps an item view location
		 * * and size:
		 * 
		 *        {
		 *            x: {Integer},
		 *            y: {Integer},
		 *            width: {Integer},
		 *            height: {Integer}
		 *        }
		 * 
		 * * @method getItemBounds
		 * * @protected
		 * @param root 
		 * @return  
		 */
		function getItemBounds(root : any): any;
				
		/**
		 * * Get toggle element bounds for the given tree model item.
		 * * @param  {zebra.data.Item} root an tree model item
		 * * @return {Object} a structure that keeps an item toggle location
		 * * and size:
		 * 
		 *        {
		 *            x: {Integer},
		 *            y: {Integer},
		 *            width: {Integer},
		 *            height: {Integer}
		 *        }
		 * 
		 * * @method getToggleBounds
		 * * @protected
		 * @param root 
		 * @return  
		 */
		function getToggleBounds(root : any): zebra.Dummy.GetToggleBoundsRet;
				
		/**
		 * Get current toggle element view. The view depends on the state of tree item.
		 * @param  {zebra.data.Item} i a tree model item
		 * @protected
		 * @return {zebra.ui.View}  a toggle element view
		 * @method getToogleView
		 * @param i 
		 * @return  
		 */
		function getToggleView(i : any): /* !this.views.on */ any;
				
		/**
		 * 
		 * @param root 
		 * @return  
		 */
		function getItemPreferredSize(root : any): zebra.Dummy.GetItemPreferredSizeRet;
				
		/**
		 * An abstract method that a concrete tree component implementations should
		 * override. The method has to render the given tree node of the specified
		 * tree model item at the given location
		 * @param  {2DContext} g a graphical context
		 * @param  {zebra.data.Item} root a tree model item to be rendered
		 * @param  {zebra.ui.tree.$IM} node a tree node metrics
		 * @param  {Ineteger} x a x location where the tree node has to be rendered
		 * @param  {Ineteger} y a y location where the tree node has to be rendered
		 * @method paintItem
		 * @protected
		 * @param x 
		 * @param y 
		 * @param parent 
		 * @param root 
		 * @param isVis 
		 * @return  
		 */
		function recalc_(x : any, y : boolean, parent : any, root : any, isVis : boolean): boolean;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function isOpen_(i : any): boolean;
				
		/**
		 * Get a tree node metrics by the given tree model item.
		 * @param  {zebra.data.Item} i a tree model item
		 * @return {zebra.ui.tree.$IM} a tree node metrics
		 * @protected
		 * @method getIM
		 * @param i 
		 * @return  
		 */
		function getIM(i : any): /* zebra.Dummy.$IM */ any;
				
		/**
		 * Get a tree item that is located at the given location.
		 * @param  {zebra.data.Item} [root] a starting tree node
		 * @param  {Integer} x a x coordinate
		 * @param  {Integer} y a y coordinate
		 * @return {zebra.data.Item} a tree model item
		 * @method getItemAt
		 * @param root? 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getItemAt(root? : any, x : number, y : number): any;
				
		/**
		 * 
		 * @param root 
		 * @param x 
		 * @param y 
		 * @return  
		 */
		function getItemAtInBranch(root : any, x : number, y : number): any;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function getIconView(i : any): /* !this.views.open */ any;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function getIconSize(i : any): zebra.Dummy.GetIconSizeRet;
				
		/**
		 * * Get icon element bounds for the given tree model item.
		 * * @param  {zebra.data.Item} root an tree model item
		 * * @return {Object} a structure that keeps an item icon location
		 * * and size:
		 * 
		 *        {
		 *            x: {Integer},
		 *            y: {Integer},
		 *            width: {Integer},
		 *            height: {Integer}
		 *        }
		 * 
		 * * @method getToggleBounds
		 * * @protected
		 * @param root 
		 * @return  
		 */
		function getIconBounds(root : any): any;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function getToggleSize(i : any): /* !this.viewSizes.on */ any;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function isOverVisibleArea(i : any): boolean;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function findOpened(item : any): any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function findNext(item : any):  /* error */ any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function findPrev(item : any):  /* error */ any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function findLast(item : any): any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function prevVisible(item : any): any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function isVerVisible(item : any): boolean;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function nextVisible(item : any): any;
				
		/**
		 * 
		 * @param item 
		 * @return  
		 */
		function nextVisibleInBranch(item : any): any;
				
		/**
		 * 
		 * @param g 
		 * @param root 
		 * @param node 
		 * @param x 
		 * @param y 
		 */
		function paintSelectedItem(g : any, root : any, node : any, x : any, y : any): void;
				
		/**
		 * 
		 * @param g 
		 * @param item 
		 */
		function paintTree(g : any, item : any): void;
				
		/**
		 * 
		 * @param g 
		 * @param root 
		 * @return  
		 */
		function paintBranch(g : any, root : any): boolean;
				
		/**
		 * 
		 * @param item 
		 * @param isStart 
		 * @return  
		 */
		function y_(item : any, isStart : boolean): number;
				
		/**
		 * Paint children items of the given root tree item.
		 * @param  {2DContext} g a graphical context
		 * @param  {zebra.data.Item} root a root tree item
		 * @param  {Integer} index an index
		 * @return {Boolean}
		 * @protected
		 * @method paintChild
		 * @param g 
		 * @param root 
		 * @param index 
		 * @return  
		 */
		function paintChild(g : any, root : any, index : number): boolean;
				
		/**
		 * 
		 * @param item 
		 * @param dir 
		 * @return  
		 */
		function nextPage(item : any, dir : number): any;
				
		/**
		 * Toggle off or on recursively all items of the given item
		 * @param  {zebra.data.Item} root a starting item to toggle
		 * @param  {Boolean} b  true if all items have to be in opened
		 * state and false otherwise
		 * @method toggleAll
		 * @param root 
		 * @param b 
		 */
		function toggleAll(root : any, b : boolean): void;
				
		/**
		 * 
		 * @param target 
		 * @param item 
		 */
		function itemInserted(target : any, item : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param item 
		 */
		function itemRemoved(target : any, item : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param item 
		 */
		function itemModified(target : any, item : any): void;
				
		/**
		 * 
		 */
		export var maxh : number;
				
		/**
		 * 
		 */
		export var maxw : number;
				
		/**
		 * 
		 */
		export var viewSizes : /*no type*/{};
				
		/**
		 * 
		 */
		export var _isVal : boolean;
				
		/**
		 * The method is called to ask if the given input event should trigger an tree component item
		 * @param  {zebra.ui.tree.Tree} src a tree UI component
		 * @param  {zebra.ui.MouseEvent|zebra.ui.KeyEvent} e   an input event: mouse or key event
		 * @return {Boolean} true if the event should trigger edition of a tree component item
		 * @method @shouldStartEdit
		 * @param src 
		 * @param e 
		 * @return  
		 */
		function shouldStartEdit(src : any, e : any): boolean;
				
		/**
		 * 
		 */
		export var itemGapY : number;
				
		/**
		 * 
		 */
		export var itemGapX : number;
				
		/**
		 * 
		 * @param g 
		 * @param root 
		 * @param node 
		 * @param x 
		 * @param y 
		 */
		function paintItem(g : any, root : any, node : any, x : any, y : any): void;
				
		/**
		 * Initiate the given item editing if the specified event matches condition
		 * @param  {zebra.data.Item} item an item to be edited
		 * @param  {zebra.ui.InputEvent} e an even that may trigger the item editing
		 * @return {Boolean}  return true if an item editing process has been started,
		 * false otherwise
		 * @method  se
		 * @private
		 * @param item 
		 * @param e 
		 * @return  
		 */
		function se(item : () => void, e : any): boolean;
				
		/**
		 * 
		 */
		export var plus : boolean;
				
		/**
		 * 
		 */
		export var isLocAdjusted : boolean;
				
		/**
		 * 
		 */
		export var ePsH : number;
				
		/**
		 * 
		 */
		export var ePsW : number;
				
		/**
		 * 
		 */
		function adjustLocation(): void;
				
		/**
		 * Set the inner content of the wrapped HTML element
		 * @param {String} an inner content
		 * @method setContent
		 * @param content 
		 */
		function setContent(content : any): void;
				
		/**
		 * Apply the given CSS style to the wrapped HTML element
		 * @param {String} a name of the CSS style
		 * @param {String} a value the CSS style has to be set
		 * @method setStyle
		 * @param name 
		 * @param value 
		 */
		function setStyle(name : string, value : string): void;
				
		/**
		 * 
		 * @return  
		 */
		function isInInvisibleState(): boolean;
				
		/**
		 * 
		 * @param ee 
		 */
		function onmousemove(ee : zebra.Dummy.Onmousemove0): void;
				
		/**
		 * 
		 * @param ee 
		 */
		function onmousedown(ee : any): void;
				
		/**
		 * 
		 * @param ee 
		 */
		function onmouseup(ee : any): void;
				
		/**
		 * 
		 * @param ee 
		 */
		function onkeydown(ee : any): void;
				
		/**
		 * 
		 * @param ee 
		 */
		function onkeyup(ee : any): void;
				
		/**
		 * 
		 * @param ee 
		 */
		function onkeypress(ee : any): void;
		
		/**
		 * TODO:
		 * It is not a very good idea to register global component listener per
		 * HTML component. Has to be re-designed, but at this moment this is the
		 * only way to understand when the HTML component parent hierarchy has got
		 * visibility updates
		 */
		namespace globalCompListener{
						
			/**
			 * 
			 * @param c 
			 */
			function compShown(c : any): void;
						
			/**
			 * 
			 * @param c 
			 * @param px 
			 * @param py 
			 */
			function compMoved(c : any, px : any, py : any): void;
						
			/**
			 * 
			 * @param p 
			 * @param i 
			 * @param c 
			 */
			function compRemoved(p : any, i : any, c : any): void;
						
			/**
			 * 
			 * @param c 
			 * @param pw 
			 * @param ph 
			 */
			function compSized(c : any, pw : any, ph : any): void;
		}
		
		/**
		 * 
		 */
		namespace globalWinListener{
						
			/**
			 * 
			 * @param layer 
			 * @param win 
			 * @param isActive 
			 */
			function winActivated(layer : any, win : any, isActive : any): void;
		}
				
		/**
		 * 
		 */
		export var disabled : boolean;
				
		/**
		 * 
		 * @param target 
		 * @param x 
		 * @param y 
		 */
		function detectAt(target : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), x : any, y : any): void;
				
		/**
		 * 
		 */
		export var minWidth : number;
				
		/**
		 * 
		 */
		export var minHeight : number;
				
		/**
		 * 
		 */
		export var isMoveEnabled : boolean;
				
		/**
		 * 
		 */
		export var isResizeEnabled : boolean;
				
		/**
		 * 
		 * @param comp 
		 * @param root 
		 * @return  
		 */
		function buildModel(comp : () => void, root : zebra.Dummy.BuildModel1): zebra.Dummy.BuildModel1;
				
		/**
		 * 
		 * @param c 
		 * @param r 
		 * @return  
		 */
		function itemByComponent(c : any, r : any): any;
				
		/**
		 * 
		 * @param comp 
		 * @return  
		 */
		function createItem(comp : () => void): /* zebra.Dummy.buildModel.!1 */ any;
				
		/**
		 * 
		 */
		export var $extended : boolean;
				
		/**
		 * 
		 */
		export var y : number;
				
		/**
		 * 
		 */
		export var x : number;
				
		/**
		 * 
		 */
		export var gap : number;
				
		/**
		 * 
		 */
		export var ID : string;
				
		/**
		 * 
		 */
		export var state : string;
	}
		
	/**
	 * 
	 */
	export var isInBrowser : boolean;
		
	/**
	 * 
	 */
	export var isIE : boolean;
		
	/**
	 * 
	 */
	export var isFF : boolean;
		
	/**
	 * 
	 */
	export var isTouchable : boolean;
		
	/**
	 * 
	 */
	export var isMacOS : boolean;
		
	/**
	 * TODO:
	 * !!! this code resolve names of classes  defined in a package
	 *     should be re-worked to use more generic and trust-able mechanism
	 */
	function $resolveClassNames(): void;
	
	/**
	 * URL class
	 * @param {String} url an url
	 * @constructor
	 * @class zebra.URL
	 */
	interface URL {
				
		/**
		 * 
		 * @param url 
		 */
		new (url : string | (() => /* zebra.Dummy.constraints */ any));
				
		/**
		 * Get a parent URL of the URL
		 * @return  {zebra.URL} a parent URL
		 * @method getParentURL
		 * @return  
		 */
		getParentURL(): zebra.URL;
				
		/**
		 * Join the given relative path to the URL.
		 * If the passed path starts from "/" character
		 * it will be joined without taking in account
		 * the URL path
		 * @param  {String} p a relative path
		 * @return {String} an absolute URL
		 * @method join
		 * @param p 
		 * @return  
		 */
		join(p : string): string;
				
		/**
		 * Test if the given url is absolute
		 * @param  {u}  u an URL
		 * @return {Boolean} true if the URL is absolute
		 * @method isAbsolute
		 * @param u 
		 * @return  
		 */
		isAbsolute(u : string): boolean;
				
		/**
		 * URL path
		 * @attribute path
		 * @type {String}
		 * @readOnly
		 */
		path : string;
				
		/**
		 * 
		 */
		href : string;
				
		/**
		 * URL protocol
		 * @attribute protocol
		 * @type {String}
		 * @readOnly
		 */
		protocol : string;
				
		/**
		 * Host
		 * @attribute host
		 * @type {String}
		 * @readOnly
		 */
		host : string;
				
		/**
		 * Query string
		 * @attribute qs
		 * @type {String}
		 * @readOnly
		 */
		qs : string;
	}
		
	/**
	 * 
	 */
	export var NONE : number;
		
	/**
	 * 
	 */
	export var LEFT : number;
		
	/**
	 * 
	 */
	export var RIGHT : number;
		
	/**
	 * 
	 */
	export var TOP : number;
		
	/**
	 * 
	 */
	export var BOTTOM : number;
		
	/**
	 * 
	 */
	export var CENTER : number;
		
	/**
	 * 
	 */
	export var HORIZONTAL : number;
		
	/**
	 * 
	 */
	export var VERTICAL : number;
		
	/**
	 * 
	 */
	export var TEMPORARY : number;
		
	/**
	 * 
	 */
	export var USE_PS_SIZE : number;
		
	/**
	 * 
	 */
	export var UsePsSize : number;
		
	/**
	 * 
	 */
	export var STRETCH : number;
		
	/**
	 * 
	 */
	export var TopLeft : number;
		
	/**
	 * 
	 */
	export var TopRight : number;
		
	/**
	 * 
	 */
	export var BottomLeft : number;
		
	/**
	 * 
	 */
	export var BottomRight : number;
		
	/**
	 * 
	 * @param v 
	 * @return  
	 */
	function $constraints(v : number): number;
		
	/**
	 * Find a direct children element for the given children component
	 * and the specified parent component
	 * @param  {zebra.layout.Layoutable} parent  a parent component
	 * @param  {zebra.layout.Layoutable} child  a children component
	 * @return {zebra.layout.Layoutable}  a direct children component
	 * @method getDirectChild
	 * @for zebra.layout
	 * @param parent 
	 * @param child 
	 * @return  
	 */
	function getDirectChild(parent : any, child : any):  /* error */ any;
	
	/**
	 * Layout children components of the specified layoutable target component
	 * @param {zebra.layout.Layoutable} t a target layoutable component
	 * @method doLayout
	 */
	interface Layout {
				
		/**
		 * 
		 * @return  
		 */
		new (): /* zebra.Dummy.constraints */ any;
				
		/**
		 * 
		 */
		$clazz : /* zebra.Layout */ any;
				
		/**
		 * 
		 */
		$hash$ : string;
		
		/**
		 * 
		 */
		$parents : {
		}
	}
		
	/**
	 * Find a direct component located at the given location of the specified
	 * parent component and the specified parent component
	 * @param  {Integer} x a x coordinate relatively to the parent component
	 * @param  {Integer} y a y coordinate relatively to the parent component
	 * @param  {zebra.layout.Layoutable} parent  a parent component
	 * @return {zebra.layout.Layoutable} an index of direct children component
	 * or -1 if no a children component can be found
	 * @method getDirectAt
	 * @api zebra.layout.getDirectAt()
	 * @param x 
	 * @param y 
	 * @param p 
	 * @return  
	 */
	function getDirectAt(x : number, y : number, p : any): number;
		
	/**
	 * Get a top (the highest in component hierarchy) parent component
	 * of the given component
	 * @param  {zebra.layout.Layoutable} c a component
	 * @return {zebra.layout.Layoutable}  a top parent component
	 * @method getTopParent
	 * @api zebra.layout.getTopParent()
	 * @param c 
	 * @return  
	 */
	function getTopParent(c : any):  /* error */ any;
		
	/**
	 * * Translate the given relative location into the parent relative location.
	 * * @param  {Integer} [x] a x coordinate relatively  to the given component
	 * * @param  {Integer} [y] a y coordinate relatively  to the given component
	 * * @param  {zebra.layout.Layoutable} c a component
	 * * @param  {zebra.layout.Layoutable} [p] a parent component
	 * * @return {Object} a relative to the given parent UI component location:
	 * 
	 *        { x:{Integer}, y:{Integer} }
	 * 
	 * * @method toParentOrigin
	 * * @api zebra.layout.toParentOrigin()
	 * @param x? 
	 * @param y? 
	 * @param c 
	 * @param p? 
	 * @return  
	 */
	function toParentOrigin(x? : number, y? : number, c : number, p? : any): any;
		
	/**
	 * Convert the given component location into relative
	 * location of the specified children component successor.
	 * @param  {Integer} x a x coordinate relatively to the given
	 * component
	 * @param  {Integer} y a y coordinate relatively to the given
	 * component
	 * @param  {zebra.layout.Layoutable} p a component
	 * @param  {zebra.layout.Layoutable} c a children successor component
	 * @return {Object} a relative location
	 * 
	 *      { x:{Integer}, y:{Integer} }
	 * 
	 * @method toChildOrigin
	 * @api zebra.layout.toChildOrigin()
	 * @param x 
	 * @param y 
	 * @param p 
	 * @param c 
	 * @return  
	 */
	function toChildOrigin(x : number, y : number, p : any, c : any): any;
		
	/**
	 * * Calculate maximal preferred width and height of
	 * * children component of the given target component.
	 * * @param  {zebra.layout.Layoutable} target a target component
	 * * @return {Object} a maximal preferred width and height
	 * 
	 *        { width:{Integer}, height:{Integer} }
	 * 
	 * * @method getMaxPreferredSize
	 * * @api zebra.layout.getMaxPreferredSize()
	 * @param target 
	 * @return  
	 */
	function getMaxPreferredSize(target : any): any;
		
	/**
	 * 
	 * @param p 
	 * @param c 
	 * @return  
	 */
	function isAncestorOf(p : any, c : any): boolean;
		
	/**
	 * Instantiate a new class instance by the given class name with the specified constructor
	 * arguments.
	 * @param  {String} clazz a class name
	 * @param  {Array} [args] an arguments list
	 * @return {Object}  a new instance of the given class initialized with the specified arguments
	 * @api  zebra.util.newInstance()
	 * @method newInstance
	 * @param clazz 
	 * @param args? 
	 * @return  
	 */
	function newInstance(clazz : string, args? : zebra.NewInstance1): zebra.NewInstanceRet;
		
	/**
	 * * Sequential tasks runner. Allows developers to execute number of tasks (async and sync) in the
	 * * the order they have been called by runner:
	 * 
	 *        var r = new zebra.util.Runner();
	 * 
	 *        r.run(function() {
	 *            // call three asynchronous HTTP GET requests to read three files
	 *            zebra.io.GET("http://test.com/a.txt", this.join());
	 *            zebra.io.GET("http://test.com/b.txt", this.join());
	 *            zebra.io.GET("http://test.com/c.txt", this.join());
	 *        })
	 *        .
	 *        run(function(r1, r2, r3) {
	 *            // handle completely read on previous step files
	 *            r1.responseText  // "a.txt" file content
	 *            r2.responseText  // "b.txt" file content
	 *            r3.responseText  // "c.txt" file content
	 *        })
	 *        .
	 *        error(function(e) {
	 *            // called when an exception has occurred
	 *            ...
	 *        });
	 * 
	 * 
	 * * @class zebra.ui.Runner
	 */
	interface Runner {
				
		/**
		 * 
		 * @return  
		 */
		new (): Runner;
	}

		
	/**
	 * 
	 * @param root 
	 * @param path 
	 * @param eq 
	 * @param cb 
	 */
	function findInTree(root : any, path : any, eq : any, cb : any): void;
	
	/**
	 * * RGB color class. This class represents rgb(a) color as JavaScript structure:
	 * 
	 *       // rgb color
	 *       var rgb1 = new zebra.util.rgb(100,200,100);
	 * 
	 *       // rgb with transparency
	 *       var rgb2 = new zebra.util.rgb(100,200,100, 0.6);
	 * 
	 *       // encoded as a string rgb color
	 *       var rgb3 = new zebra.util.rgb("rgb(100,100,200)");
	 * 
	 *       // hex rgb color
	 *       var rgb3 = new zebra.util.rgb("#CCDDFF");
	 * 
	 * * @param  {Integer|String} r  red color intensity or if this is the only constructor parameter it denotes
	 * * encoded in string rgb color
	 * * @param  {Integer} [g]  green color intensity
	 * * @param  {Integer} [b] blue color intensity
	 * * @param  {Float}   [a] alpha color intensity
	 * * @constructor
	 * * @class zebra.util.rgb
	 */
	interface rgb {
				
		/**
		 * 
		 * @param r 
		 * @param g? 
		 * @param b? 
		 * @param a? 
		 */
		new (r : number | string, g? : number, b? : number, a? : number);
				
		/**
		 * 
		 */
		black : zebra.rgb;
				
		/**
		 * Indicates if the color is opaque
		 * @attribute isTransparent
		 * @readOnly
		 * @type {Boolean}
		 */
		isOpaque : boolean;
				
		/**
		 * 
		 */
		g : number;
				
		/**
		 * 
		 */
		b : number;
				
		/**
		 * 
		 */
		a : number;
	}
		
	/**
	 * Compute intersection of the two given rectangular areas
	 * @param  {Integer} x1 a x coordinate of the first rectangular area
	 * @param  {Integer} y1 a y coordinate of the first rectangular area
	 * @param  {Integer} w1 a width of the first rectangular area
	 * @param  {Integer} h1 a height of the first rectangular area
	 * @param  {Integer} x2 a x coordinate of the first rectangular area
	 * @param  {Integer} y2 a y coordinate of the first rectangular area
	 * @param  {Integer} w2 a width of the first rectangular area
	 * @param  {Integer} h2 a height of the first rectangular area
	 * @param  {Object}  r  an object to store result
	 * 
	 *      { x: {Integer}, y:{Integer}, width:{Integer}, height:{Integer} }
	 * 
	 * @method intersection
	 * @api zebra.util.intersection();
	 * @param x1 
	 * @param y1 
	 * @param w1 
	 * @param h1 
	 * @param x2 
	 * @param y2 
	 * @param w2 
	 * @param h2 
	 * @param r 
	 */
	function intersection(x1 : number, y1 : number, w1 : number, h1 : number, x2 : number, y2 : number, w2 : number, h2 : number, r : zebra.Intersection8): void;
		
	/**
	 * 
	 * @param x1 
	 * @param y1 
	 * @param w1 
	 * @param h1 
	 * @param x2 
	 * @param y2 
	 * @param w2 
	 * @param h2 
	 * @return  
	 */
	function isIntersect(x1 : any, y1 : any, w1 : any, h1 : any, x2 : any, y2 : any, w2 : any, h2 : any): boolean;
		
	/**
	 * 
	 * @param x1 
	 * @param y1 
	 * @param w1 
	 * @param h1 
	 * @param x2 
	 * @param y2 
	 * @param w2 
	 * @param h2 
	 * @param r 
	 */
	function unite(x1 : any, y1 : any, w1 : any, h1 : any, x2 : any, y2 : any, w2 : any, h2 : any, r : zebra.Unite8): void;
		
	/**
	 * 
	 * @param ch 
	 * @return  
	 */
	function isLetter(ch : any): boolean;
	
	/**
	 * * Fire when a virtual cursor position has been updated
	 * 
	 *        position.bind(function(src, prevOffset, prevLine, prevCol) {
	 *            ...
	 *        });
	 * 
	 * * @event posChanged
	 * * @param {zebra.util.Position} src an object that triggers the event
	 * * @param {Integer} prevOffest a previous virtual cursor offset
	 * * @param {Integer} prevLine a previous virtual cursor line
	 * * @param {Integer} prevCol a previous virtual cursor column in the previous line
	 */
	interface Listeners {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param l 
		 * @return  
		 */
		add(l : any): any;
				
		/**
		 * 
		 * @param l 
		 */
		remove(l : any): void;
				
		/**
		 * 
		 */
		v : Array<zebra.Listeners>;
		
		/**
		 * 
		 */
		methods : {
		}
	}
		
	/**
	 * * This this META class is handy container to keep different types of listeners and
	 * * fire events to the listeners:
	 * 
	 *        // create listener container to keep three different events
	 *        // handlers
	 *        var MyListenerContainerClass = zebra.util.ListenersClass("event1",
	 *                                                                  "event2",
	 *                                                                  "event3");
	 * 
	 *        // instantiate listener class container
	 *        var listeners = new MyListenerContainerClass();
	 * 
	 *        // add "event1" listener
	 *        listeners.add(function event1() {
	 *            ...
	 *        });
	 * 
	 *        // add "event2" listener
	 *        listeners.add(function event2() {
	 *           ...
	 *        });
	 * 
	 *        // and firing event1 to registered handlers
	 *        listeners.event1(...);
	 * 
	 *        // and firing event2 to registered handlers
	 *        listeners.event2(...);
	 * 
	 * * @class zebra.util.Listeners
	 * * @constructor
	 * * @param {String} [events]* events types the container has to support
	 */
	interface ListenersClass {
				
		/**
		 * 
		 * @return  
		 */
		new (): () => void;
	}

	
	/**
	 * * Task is keeps a context of and allows developers
	 * * to run, shutdown, pause a required method as a task
	 * * Developer cannot instantiate the class directly.
	 * * Use "zebra.util.task(...)" method to do it:
	 * 
	 *    var t = zebra.util.task(function(context) {
	 *        // task body
	 *        ...
	 *    });
	 * 
	 *    // run task in 1 second and repeat the task execution
	 *    // every half second
	 *    t.run(1000, 500);
	 *    ...
	 * 
	 *    t.shutdown(); // stop the task
	 * 
	 * * @class zebra.util.TaskCotext
	 */
	interface TaskCotext {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * Shutdown the given task.
		 * @method shutdown
		 */
		shutdown(): void;
				
		/**
		 * Run the task
		 * @param {Integer} [startIn] a time (in milliseconds) in which the task has to be started
		 * @param {Integer} [repeatIn] a period (in milliseconds) the task has to be executed
		 * @method run
		 * @param startIn? 
		 * @param repeatIn? 
		 * @return  
		 */
		run(startIn? : number, repeatIn? : number): /* !this */ any;
				
		/**
		 * Pause video
		 * @method pause
		 * @param t 
		 */
		pause(t : any): void;
				
		/**
		 * 
		 */
		task : Function;
				
		/**
		 * 
		 */
		si : number;
				
		/**
		 * 
		 */
		ri : number;
				
		/**
		 * Indicates if the task is executed (active)
		 * @type {Boolean}
		 * @attribute isStarted
		 * @readOnly
		 */
		isStarted : boolean;
	}
		
	/**
	 * * Take a free task from pool and run it with the specified
	 * * body and the given context.
	 * 
	 *    // allocate task
	 *    var task = zebra.util.task(function (ctx) {
	 *        // do something
	 * 
	 *        // complete task if necessary
	 *        ctx.shutdown();
	 *    });
	 * 
	 *    // run task in second and re-run it every 2 seconds
	 *    task.run(1000, 2000);
	 * 
	 *    ...
	 * 
	 *    // pause the task
	 *    task.pause();
	 * 
	 *    ...
	 *    // run it again
	 *    task.run();
	 * 
	 * * @param  {Function|Object} f a function that has to be executed
	 * * @param  {Object} [ctx]  a context the task has to be executed
	 * * @return {zebra.util.Task} an allocated task
	 * * @method task
	 * * @api zebra.util.task
	 * @param f 
	 * @param ctx? 
	 * @return  
	 */
	function task(f : Function, ctx? : Function): /* zebra.TaskCotext */ any;
		
	/**
	 * Shut down all active at the given moment tasks
	 * body and the given context.
	 * @method shutdownAll
	 * @api zebra.util.shutdownAll
	 */
	function shutdownAll(): void;
		
	/**
	 * Generate UUID of the given length
	 * @param {Integer} [size] the generated UUID length. The default size is 16 characters.
	 * @return {String} an UUID
	 * @method  ID
	 * @api  zebra.io.ID()
	 */
	interface ID {
				
		/**
		 * 
		 * @param size? 
		 * @return  
		 */
		new (size? : number): string;
	}

		
	/**
	 * 
	 */
	function $sleep(): void;
		
	/**
	 * Encode the given string into base64
	 * @param  {String} input a string to be encoded
	 * @method  b64encode
	 * @api  zebra.io.b64encode()
	 * @param input 
	 * @return  
	 */
	function b64encode(input : {} | string): string;
		
	/**
	 * Decode the base64 encoded string
	 * @param {String} input base64 encoded string
	 * @return {String} a string
	 * @api zebra.io.b64decode()
	 * @method b64decode
	 * @param input 
	 * @return  
	 */
	function b64decode(input : string): string;
		
	/**
	 * 
	 * @param d 
	 * @return  
	 */
	function dateToISO8601(d : any): string;
		
	/**
	 * 
	 */
	interface ISO8601toDate {
				
		/**
		 * 
		 * @param v 
		 * @return  
		 */
		new (v : any): Date;
	}

		
	/**
	 * 
	 * @param s 
	 * @return  
	 */
	function parseXML(s : any): zebra.ParseXMLRet;
	
	/**
	 * 
	 */
	interface $Request {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param method 
		 * @param url 
		 * @param async 
		 * @param user 
		 * @param password 
		 */
		open(method : any, url : any, async : any, user : any, password : any): void;
				
		/**
		 * 
		 * @param data 
		 */
		send(data : any): void;
				
		/**
		 * 
		 * @param data 
		 */
		abort(data : any): void;
				
		/**
		 * 
		 * @param name 
		 * @param value 
		 */
		setRequestHeader(name : any, value : any): void;
				
		/**
		 * 
		 * @param name 
		 */
		getResponseHeader(name : any): void;
				
		/**
		 * 
		 */
		getAllResponseHeaders(): void;
	}
		
	/**
	 * 
	 * @return  
	 */
	function getRequest(): zebra.GetRequestRet;
		
	/**
	 * * Shortcut method to perform asynchronous or synchronous HTTP GET requests.
	 * 
	 *        // synchronous HTTP GET call
	 *        var res = zebra.io.GET("http://test.com");
	 * 
	 *        // asynchronous HTTP GET call
	 *        zebra.io.GET("http://test.com", function(request) {
	 *            // handle result
	 *            if (request.status == 200) {
	 *                request.responseText
	 *            }
	 *            else {
	 *                // handle error
	 *            }
	 *            ...
	 *        });
	 * 
	 *        // synchronous HTTP GET call with query parameters
	 *        var res = zebra.io.GET("http://test.com", {
	 *            param1 : "var1",
	 *            param1 : "var2",
	 *            param1 : "var3"
	 *        });
	 * 
	 * * @param {String} url an URL
	 * * @param {Object} [parameters] a dictionary of query parameters
	 * * @param {Funcion} [callback] a callback function that is called
	 * * when the GET request is completed. Pass it  to perform request
	 * * asynchronously
	 * * @api  zebra.io.GET()
	 * * @method GET
	 */
	interface GET {
				
		/**
		 * 
		 * @param url 
		 * @return  
		 */
		new (url : string): GET;
	}

		
	/**
	 * * Shortcut method to perform asynchronous or synchronous HTTP POST requests.
	 * 
	 *        // synchronous HTTP POST call
	 *        var res = zebra.io.POST("http://test.com");
	 * 
	 *        // asynchronous HTTP POST call
	 *        zebra.io.POST("http://test.com", function(request) {
	 *            // handle result
	 *            if (request.status == 200) {
	 * 
	 *            }
	 *            else {
	 *                // handle error
	 *                ...
	 *            }
	 *            ...
	 *        });
	 * 
	 *        // synchronous HTTP POST call with query parameters
	 *        var res = zebra.io.POST("http://test.com", {
	 *            param1 : "var1",
	 *            param1 : "var2",
	 *            param1 : "var3"
	 *        });
	 * 
	 *        // synchronous HTTP POST call with data
	 *        var res = zebra.io.POST("http://test.com", "data");
	 * 
	 *        // asynchronous HTTP POST call with data
	 *        zebra.io.POST("http://test.com", "request", function(request) {
	 *            // handle result
	 *            if (request.status == 200) {
	 * 
	 *            }
	 *            else {
	 *                // handle error
	 *                ...
	 *            }
	 *        });
	 * 
	 * * @param {String} url an URL
	 * * @param {Object} [parameters] a dictionary of query parameters
	 * * @param {Function} [callback] a callback function that is called
	 * * when the GET request is completed. Pass it if to perform request
	 * * asynchronously
	 * * @method  POST
	 * * @api  zebra.io.POST()
	 */
	interface POST {
				
		/**
		 * 
		 * @param url 
		 * @return  
		 */
		new (url : string): POST;
	}

	
	/**
	 * 
	 */
	interface Base64 {
				
		/**
		 * 
		 * @param s 
		 */
		new (s : any);
				
		/**
		 * 
		 * @return  
		 */
		decode(): string;
	}
		
	/**
	 * 
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function descent(a : any, b : any): number;
		
	/**
	 * 
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function ascent(a : any, b : any): number;
		
	/**
	 * 
	 */
	export var $canvases : /* [zebra.$measure.!0 */ any | () => /* zebra.Dummy.constraints] */ any;
		
	/**
	 * 
	 */
	export var $deviceRatio : number;
		
	/**
	 * 
	 */
	export var $applyRenderExploit : boolean;
		
	/**
	 * canvases location has to be corrected if document layout is invalid
	 */
	function $elBoundsUpdated(): void;
		
	/**
	 * 
	 * @return  
	 */
	function $windowSize(): /* zebra.$windowSizeRet */ any;
		
	/**
	 * 
	 * @param e 
	 * @param cssprop 
	 * @return  
	 */
	function $measure(e : /* zebra.$measure0 */ any, cssprop : string): number;
		
	/**
	 * 
	 * @param element 
	 * @return  
	 */
	function $contains(element : /* zebra.$measure.!0 */ any): boolean;
	
	/**
	 * 
	 */
	namespace $canvas{
				
		/**
		 * 
		 * @param c 
		 * @param w 
		 * @param h 
		 * @return  
		 */
		function size(c : /* zebra.$measure.!0 */ any, w : number | (() => /* zebra.Dummy.constraints */ any), h : number): zebra.$canvas.SizeRet;
				
		/**
		 * 
		 * @param c 
		 * @return  
		 */
		function context(c : {} | /* zebra.$measure.!0 */ any): /* zebra.$canvas.size.!ret */ any;
				
		/**
		 * 
		 * @param w 
		 * @param h 
		 */
		function create(w : number, h : number): void;
				
		/**
		 * 
		 * @param ctx 
		 * @return  
		 */
		function ratio(ctx : /* zebra.$canvas.size.!ret */ any):  /* error */ any;
	}
		
	/**
	 * 
	 */
	export var clipboardTriggerKey : number;
		
	/**
	 * 
	 * @param v 
	 * @return  
	 */
	function $view(v : any): any;
		
	/**
	 * Look up 2D canvas in the list of existent
	 * @param  {2DCanvas|String} canvas a canvas
	 * @return {zebra.ui.zCanvas} a zebra canvas
	 * @param canvas 
	 * @return  
	 */
	function $detectZCanvas(canvas : /* zebra.$measure.!0 */ any): /* zebra.$measure.!0 */ any;	
	/**
	 * Look up 2D canvas in the list of existent
	 * @param  {2DCanvas|String} canvas a canvas
	 * @return {zebra.ui.zCanvas} a zebra canvas
	 * @return  
	 */
	function $detectZCanvas(): /* zebra.Dummy.constraints */ any;
		
	/**
	 * 
	 * @param l 
	 * @return  
	 */
	function $getPS(l : any): /* zebra.$getPSRet */ any;
		
	/**
	 * 
	 * @param c 
	 * @param r 
	 * @return  
	 */
	function $cvp(c : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), r : /* zebra.$cvp1 */ any): /* zebra.$cvp1 */ any;
	
	/**
	 * * This class represents a font and provides basic font metrics like
	 * * height, ascent. Using the class developers can compute string width.
	 * 
	 *      // plain font
	 *      var f = new zebra.ui.Font("Arial", 14);
	 * 
	 *      // bold font
	 *      var f = new zebra.ui.Font("Arial", "bold", 14);
	 * 
	 *      // defining font with CSS font name
	 *      var f = new zebra.ui.Font("100px Futura, Helvetica, sans-serif");
	 * 
	 * * @constructor
	 * * @param {String} name a name of the font. If size and style parameters
	 * * has not been passed the name is considered as CSS font name that
	 * * includes size and style
	 * * @param {String} [style] a style of the font: "bold", "italic", etc
	 * * @param {Integer} [size] a size of the font
	 * * @class zebra.ui.Font
	 */
	interface Font {
				
		/**
		 * 
		 * @param name 
		 * @param style? 
		 * @param size? 
		 */
		new (name : zebra.Font, style? : string, size? : string | number);
				
		/**
		 * Calculate the given string width in pixels
		 * @param  {String} s a string whose width has to be computed
		 * @return {Integer} a string size in pixels
		 * @method stringWidth
		 * @for zebra.ui.Font
		 * @param s 
		 * @return  
		 */
		stringWidth(s : string): number;
				
		/**
		 * Calculate the specified substring width
		 * @param  {String} s a string
		 * @param  {Integer} off fist character index
		 * @param  {Integer} len length of substring
		 * @return {Integer} a substring size in pixels
		 * @method charsWidth
		 * @for zebra.ui.Font
		 * @param s 
		 * @param off 
		 * @param len 
		 * @return  
		 */
		charsWidth(s : string, off : number, len : number): number;
				
		/**
		 * 
		 */
		s : string;
				
		/**
		 * 
		 */
		name : zebra.Font;
				
		/**
		 * Height of the font
		 * @attribute height
		 * @readOnly
		 * @type {Integer}
		 */
		height : number;
				
		/**
		 * Ascent of the font
		 * @attribute ascent
		 * @readOnly
		 * @type {Integer}
		 */
		ascent : number;
	}
	
	/**
	 * 
	 */
	var Cursor : {
				
		/**
		 * 
		 */
		DEFAULT : string;
				
		/**
		 * 
		 */
		MOVE : string;
				
		/**
		 * 
		 */
		WAIT : string;
				
		/**
		 * 
		 */
		TEXT : string;
				
		/**
		 * 
		 */
		HAND : string;
				
		/**
		 * 
		 */
		NE_RESIZE : string;
				
		/**
		 * 
		 */
		SW_RESIZE : string;
				
		/**
		 * 
		 */
		SE_RESIZE : string;
				
		/**
		 * 
		 */
		NW_RESIZE : string;
				
		/**
		 * 
		 */
		S_RESIZE : string;
				
		/**
		 * 
		 */
		W_RESIZE : string;
				
		/**
		 * 
		 */
		N_RESIZE : string;
				
		/**
		 * 
		 */
		E_RESIZE : string;
				
		/**
		 * 
		 */
		COL_RESIZE : string;
				
		/**
		 * 
		 */
		HELP : string;
	}
		
	/**
	 * 
	 * @param d 
	 * @param c 
	 */
	function makeFullyVisible(d : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), c : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
		
	/**
	 * 
	 * @param x 
	 * @param y 
	 * @param w 
	 * @param h 
	 * @param px 
	 * @param py 
	 * @param t 
	 * @param tt 
	 * @param ll 
	 * @param bb 
	 * @param rr 
	 * @return  
	 */
	function calcOrigin(x : number, y : number, w : number, h : number, px : number, py : number, t : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), tt : any, ll : number | (() => /* zebra.Dummy.constraints */ any), bb : number | (() => /* zebra.Dummy.constraints */ any), rr : number | (() => /* zebra.Dummy.constraints */ any)): zebra.CalcOriginRet;
		
	/**
	 * * Load an image by the given URL.
	 * * @param  {String|Image} img an image URL or image object
	 * * @param  {Function} ready a call back method to be notified when the
	 * * image has been completely loaded or failed. The method gets three parameters
	 * 
	 *    - an URL to the image
	 *    - boolean loading result. true means success
	 *    - an image that has been loaded
	 * 
	 *            // load image
	 *            zebra.ui.loadImage("test.png", function(path, result, image) {
	 *                if (result === false) {
	 *                    // handle error
	 *                    ...
	 *                }
	 *            });
	 * 
	 * * @return {Image}  an image
	 * * @api  zebra.ui.loadImage()
	 * * @method  loadImage
	 * @param img 
	 * @param ready 
	 * @return  
	 */
	function loadImage(img : string | (() => /* zebra.Dummy.constraints */ any), ready : Function): zebra.LoadImageRet;
		
	/**
	 * 
	 * @param v 
	 */
	function $ViewsSetter(v : any): void;
		
	/**
	 * * Show the given UI component as a modal window
	 * * @param  {zebra.ui.Panel} context  an UI component of zebra hierarchy
	 * * @param  {zebra.ui.Panel} win a component to be shown as the modal window
	 * * @param  {Object} [listener] a window listener
	 * 
	 *        {
	 *            winActivated : function(layer, win, isActive) {
	 * 
	 *            },
	 * 
	 *            winOpened : function(layer, win, isOpened) {
	 * 
	 *            }
	 *        }
	 * 
	 * * @api  zebra.ui.showModalWindow()
	 * * @method showWindow
	 * @param context 
	 * @param win 
	 * @param listener? 
	 */
	function showModalWindow(context : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), win : any, listener? : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
		
	/**
	 * * Show the given UI component as a window
	 * * @param  {zebra.ui.Panel} context  an UI component of zebra hierarchy
	 * * @param  {String} [type] a type of the window: "modal", "mdi", "info". The default
	 * * value is "info"
	 * * @param  {zebra.ui.Panel} win a component to be shown as the window
	 * * @param  {Object} [listener] a window listener
	 * 
	 *        {
	 *            winActivated : function(layer, win, isActive) {
	 *               ...
	 *            },
	 * 
	 *            winOpened : function(layer, win, isOpened) {
	 *              ...
	 *            }
	 *        }
	 * 
	 * * @api  zebra.ui.showWindow()
	 * * @method showWindow
	 * @param context 
	 * @param type? 
	 * @param win 
	 * @param listener? 
	 */
	function showWindow(context : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any), type? : string, win : string, listener? : /* zebra.$measure.!0 */ any | (() => /* zebra.Dummy.constraints */ any)): void;
		
	/**
	 * 
	 * @param context 
	 * @param menu 
	 */
	function showPopupMenu(context : any, menu : any): void;
		
	/**
	 * Activate the given window or a window the specified component belongs
	 * @param  {zebra.ui.Panel} win [description]
	 * @api zebra.ui.activateWindow()
	 * @method activateWindow
	 * @param win 
	 */
	function activateWindow(win : any): void;
		
	/**
	 * Simple private structure to keep a tree model item metrical characteristics
	 * @constructor
	 * @param {Boolean} b a state of an appropriate tree component node of the given
	 * tree model item. The state is sensible for item that has children items and
	 * the state indicates if the given tree node is collapsed (false) or expanded
	 * (true)
	 * @private
	 * @class zebra.ui.tree.$IM
	 * @param b 
	 */
	function $IM(b : any): void;
	
	/**
	 * 
	 */
	namespace $IM{
				
		/**
		 * 
		 */
		export var viewHeight : number;
				
		/**
		 * 
		 */
		export var y : number;
				
		/**
		 * 
		 */
		export var x : number;
				
		/**
		 * 
		 */
		export var height : number;
				
		/**
		 * Indicates whether a node is in expanded or collapsed state
		 * @attribute isOpen
		 * @type {Boolean}
		 * @readOnly
		 */
		export var width : boolean;
				
		/**
		 * 
		 */
		export var viewWidth : number;
	}
}

/**
 * 
 */
export declare var dl : number;

/**
 * 
 */
export declare var step : number;

/**
 * 
 */
export declare var zebkit : /* zebra */ any;

/**
 * 
 */
declare namespace zebra.js{
	
	/**
	 * 
	 */
	interface Function {
				
		/**
		 * 
		 */
		methodName : string;
	}
}
