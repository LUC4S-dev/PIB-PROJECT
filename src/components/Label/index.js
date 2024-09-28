export default function Label({ id, children }) {
    return (
        <label className="font-light text-2xl sm:text-xl mb-4 block" for={id}>{children}</label>
    );
}