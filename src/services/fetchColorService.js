import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  axiosWithAuth()
    .get("/colors")
    .then((res) => {
      this.setState({
        ...this.state,
        colors: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export default fetchColorService;
