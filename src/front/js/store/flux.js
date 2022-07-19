const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isActive: "",
      token: "",
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      user: [
        {
          currentEmail: "",
          currentPassword: "",
          //token:"",
        },
      ],
      usuarioActual: {
        email: "",
        password: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        direccion: "",
      },
    },
    actions: {
      // Use getActions to call a function within a fuction

      getLogin: (email, password) => {
        console.log("este es el email y password", email, password);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.Token) {
              sessionStorage.setItem("Token", result.Token);

              sessionStorage.setItem("email", result.email);

              window.location.href = "/perfil";
            } else {
              alert("inicio de sesion fallido");
            }
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      },

      perfilUsuario: () => {
        const store = getStore();
        fetch(
          process.env.BACKEND_URL +
            `/private=${sessionStorage.getItem("email")}`
        )
          .then((response) => response.json())
          .then((result) => {
            let user = {
              id: result.id,
              email: result.email,
              nombre: result.nombre,
              apellido: result.apellido,
              direccion: result.direccion,
              telefono: result.telefono,
            };
            setStore({ usuarioActual: user });
          })
          .then(console.log(store))
          .catch((error) => console.log("error", error));
      },

      // getSeccion: () => {
      //   const store = getStore();
      //   var myHeaders = new Headers();
      //   myHeaders.append("Authorization", `Bearer ${store.token}`);

      //   var requestOptions = {
      //     method: "GET",
      //     headers: myHeaders,
      //     redirect: "follow",
      //   };

      //   fetch(process.env.BACKEND_URL + "/private", requestOptions)
      //     .then((response) => response.json())
      //     .then((result) => {
      //       setStore({ isActive: result.usuario.isActive });
      //     })
      //     .catch((error) => console.log("error", error));
      // },

      getRegistro: (
        nombre,
        apellidos,
        email,
        password,
        telefono,
        direccion
      ) => {
        console.log(
          "Datos recibidos",
          nombre,
          apellidos,
          email,
          password,
          telefono,
          direccion
        );

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          email: email,
          password: password,
          telefono: telefono,
          direccion: direccion,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/registro", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));
        return true;
      },

      resetUsuario: () => {
        setStore({
          email: "",
          password: "",
          nombre: "",
          apellido: "",
          telefono: "",
          direccion: "",
        });
      },

      //cerrar sección
      cerrarSeccion: () => {
        setStore({ token: "" });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
