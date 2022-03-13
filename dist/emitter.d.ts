declare const emitter: {
    events: {};
    publish: (event: any, data: any) => void;
    subscribe: (event: any, listener: any) => {
        unsubscribe: any;
    };
};
export default emitter;
