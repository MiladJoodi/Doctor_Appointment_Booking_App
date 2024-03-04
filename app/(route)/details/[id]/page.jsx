
const Details = ({params}) => {

    const [doctor, setDoctorList] = useState();

    useEffect(() => {
      getDoctors();
    }, []);
  
    const getDoctors = () => {
      axios.get("https://realtendency.backendless.app/api/data/DoctorsCat").then((response) => {
          setDoctorsList(response.data);
        });
    };


    return (
        <div>
            Details
        </div>
    );
}

export default Details;