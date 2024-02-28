
const DrinkLayout = ({ children }) => {
    return (
        <div className="max-w-xl">
            <div className="mockup-code mb-8">
                <pre data-prefix="$">
                    <code>npx install xxxx</code>
                </pre>
            </div>
            {children}
        </div>
    );
}

export default DrinkLayout;