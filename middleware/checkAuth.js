export default function(context) {
    console.log("check Auth")
    if(process.client) {
        context.store.dispatch('initAuth')
    }
}