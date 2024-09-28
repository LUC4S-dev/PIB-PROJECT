export default function Button({ href, submit, red, green, children }) {
    const classes = `bg-[#6369E7] text-white font-normal text-xl px-6 py-2 inline-flex gap-2 items-center justify-center text-center ${red ? "!bg-[#D36868]" : ""} ${green ? "!bg-[#68D373]" : ""}`
    if(href) {
        return (
            <a className={classes} href={href}>{children}</a>
        )        
    } else {
        return (
            <button className={classes} type={submit ? "submit" : "button"}>{children}</button>
        )
    }
}