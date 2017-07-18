// Type definitions for zebra.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//用来做全局参数配置
declare function zebra(): any[];

declare namespace zebra
{
    //初始化zebra
    function ready(callback: () => void);

    namespace ui
    {

        class Panel extends layout.Layoutable
        {
            readonly bg: zebra.ui.View;
            readonly border: zebra.ui.View;
            readonly isEnabled: boolean;
            readonly canHaveFocus: boolean;
        }
        class View
        {
            getBottom(): number;
            getBottom(): number;
            getPreferredSize(): any;
            getRight(): number;
            getTop(): number;
            paint(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, c: ui.Panel);
        }
        class zCanvas extends Panel
        {
            constructor(width: number, height: number);
            root: Panel;
            fullScreen();
            getLayer(id: string): zebra.ui.Panel;
            readonly isFullScreen: boolean;
        }
        class TextArea extends Panel
        {
            constructor(text: string);
        }
        class Button extends Panel
        {
            constructor(text: string);
        }
    }
    namespace layout
    {
        class Layout
        {
            calcPreferredSize(t: Layoutable);
            doLayout(t: Layoutable);

        }
        class Layoutable extends Layout
        {
            constraints: any;
            readonly height: number;
            readonly isValid: boolean;
            readonly isVisible: boolean;
            readonly kids: layout.Layoutable[];
            readonly layout: zebra.layout.Layout;
            readonly parent: zebra.layout.Layoutable;
            readonly width: number;
            readonly x: number;
            readonly y: number;

            add(constr: any, control: layout.Layoutable);
            find(path: string): zebra.layout.Layoutable;
            findAll(path: string, callback: (o: any) => void): zebra.layout.Layoutable[];
            getBottom(): number;
            getByConstraints(c: layout.Layoutable): layout.Layoutable;
            getLeft(): number;
            getPreferredSize(): any;
            getRight(): number;
            getTop(): number;
            indexOf(c: layout.Layoutable): number;
            insert(i: number, constr: any, c: layout.Layoutable): layout.Layoutable;
            invalidate();
            kidAdded(i: number, constr: any, c: layout.Layoutable);
            kidRemoved(i: number, c: layout.Layoutable);
            ///The method can be implemented to be informed every time the component has completed to layout its children components
            laidout();
            properties(path?: string): Layoutable;
            relocated(px: number, py: number);
            remove(control: layout.Layoutable);
            removeAt(index: number);
            ///Remove the component from its parent if it has a parent
            removeMe();
            resized(w: number, h: number);
            setAt(i: number, d: layout.Layoutable): layout.Layoutable;
            setBounds(x: number, y: number, w: number, h: number): layout.Layoutable;
            setId(id: string): layout.Layoutable;
            setLayout(layout: layout.Layout): layout.Layoutable;
            setLocation(xx: number, yy: number);
            setPreferredSize(w: number, h: number);
            setSize(x: number, y: number);
            validate();
        }
        class BorderLayout extends Layout
        {
            constructor(hgap?: number, vgap?: number);
            readonly hgap: number;
            readonly vgap: number;
        }
        var CENTER: any;
        var BOTTOM: any;
        var TOP: any;
    }
}

