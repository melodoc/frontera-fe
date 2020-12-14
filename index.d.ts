declare module '*.css' {
    interface Style {
        [key: string]: string;
    }

    const style: Style;

    export default style;
}

declare module '*.svg'{
    const value: any;

    export default value;
}


declare module '*.jpg'{
    const value: any;

    export default value;
}

declare module '*.png'{
    const value: any;

    export default value;
}
