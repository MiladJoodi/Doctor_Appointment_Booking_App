import CategoryList from "./_components/CategoryList";

const layout = ({children}) => {
    return (
        <div className="grid grid-cols-6">
            <div className="col-span-2 hidden md:block">
                <CategoryList />
            </div>
            <div className="col-span-4">
            {children}
            </div>
        </div>
    );
}

export default layout;