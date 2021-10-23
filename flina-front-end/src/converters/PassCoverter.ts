
const saltSerect = "fli"

export const getDESCtypt = (password: any) => {
    return saltSerect + window.btoa(password);
}


