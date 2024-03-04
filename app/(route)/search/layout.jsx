import CategoryList from "./_components/CategoryList";

const layout = ({children}) => {
    return (
        <div className="grid grid-cols-6">
            <div className="hidden lg:col-span-2  lg:block">
                <CategoryList />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-4">
            {children}
            </div>
        </div>
    );
}

export default layout;