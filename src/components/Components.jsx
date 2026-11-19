
function FeedbackComponent() {
    const [formData, setFormData] = useState({
     name: "",
     email: "",
    feedback: ""
    });
    
    const handleChange = (e) => {
     const { name, value } = e.target; 
     console.log(`Updating ${name}:`, value);
     setFormData((formData) => ({
      ...formData,
      [name]: value,
     }));
    };
    
    return (
    <>
    <form>
<div>
    <label htmlFor="name">Name:</label>
    <input type="name" id="name" value={formData.name} onChange={handleChange} name="name"/>
</div>
<div>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" required/>
</div>
<div>
    <label htmlFor="feedback">Feedback:</label>
    <textarea type="text" id="feedback" value={formData.feedback} onChange={handleChange} name="feedback" rows="5" comlumns="5"> </textarea> 
</div>
    </form>
    <p>Name:{formData.name} Email:{formData.email} Feedback:{formData.feedback}</p>
    </>
)
} 

export default FeedbackComponent