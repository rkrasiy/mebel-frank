import ProfileForm from "../../../components/adminer/user/profile-form"
export default function Profile(){

  async function changePasswordHandler (passwordData){
    fetch('/api/user/change-password',{
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-type': 'application/json'
      }
    }).then( response => response.json()).then(data=>{
      console.log(data)
    })
    // const data = await response.json()

    // console.log(data)
  }
  
  return <section>
    <h1>Change PAssword</h1>
    <ProfileForm onChangePassword={changePasswordHandler}/>
  </section>
}