export default function Container(props) {
    return (
        <div className="max-w-[1370px] w-full mx-auto px-6">
            {props.children}
        </div>
    )
}