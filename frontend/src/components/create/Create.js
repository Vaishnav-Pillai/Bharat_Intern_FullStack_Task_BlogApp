import React,{useState} from "react"
import "./create.css"
import { useNavigate } from "react-router-dom";

export default function Create(props) {

  const navigate = useNavigate();

  let [title,setTitle] = useState('');
  let [desc,setDesc] = useState('');
  let [category,setCategory] = useState('');
  let [cover,setCover] = useState('');
  let [date,setDate] = useState('');
  var id = props.id;

  const uploadUrl = "http://localhost:3000/api/blogs";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,desc,category,cover,date,id);
    console.log(id);
    const formData = new FormData();

    formData.append("title",title);
    formData.append("desc",desc);
    formData.append("category",category);
    formData.append("cover",cover);
    formData.append("date",date);
    formData.append("id",id);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.response);
        navigate("/");
      }
    }
    
    xhr.open("POST", uploadUrl);
    xhr.send(formData);
  }


  const imgUrl = "https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src={imgUrl} alt='' class='image-preview' />
          </div>
          <form encType='multipart/form-data'>
            <div className='inputfile flexCenter'>
              <input type='file' alt='img' filename="cover" onChange={(e) => setCover(e.target.files[0])}/>
            </div>

            <input type='text' name="title" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>

            <select className="form-select py-2" aria-label="Default select example" style={{border: '1px solid black', marginBottom: '30px'}} name='category' onChange={(e)=>{setCategory(e.target.value)}}>
                <option>Categories</option>
                <option value="Life">Life</option>
                <option value="Fashion">Fashion</option>
                <option value="Travel">Travel</option>
                <option value="Sport">Sport</option>
                <option value="Fun">Fun</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
            </select>

            <input type='text' name="date" placeholder='Date' onChange={(e)=>{setDate(e.target.value)}}/>

            <textarea className="py-2" name='desc' id='' cols='30' rows='10' placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}></textarea>

            <button className='btn btn-outline-dark' style={{fontSize: '20px'}} onClick={handleSubmit}>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
