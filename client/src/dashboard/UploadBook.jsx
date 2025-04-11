import { Textarea, Label, TextInput, Button, } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
  const bookcategory = [
    "fiction",
    "non-fiction",
    "mistory",
    "programming",
    "science fiction",
    "fantasy",
    "sequential art",
    "horror",
    "biography",
    "autobiography",
    "history",
    "self-help",
    "momoir",
    "business",
    "children books",
    "travel",
    "religion",
    "art and desgin"
  ]
  const [selectedbookcategory, setselectedbookcategory] = useState(bookcategory[0]);

  const handleChangeselected = (event) => {
    console.log(event.target.value);

    setselectedbookcategory(event.target.value);
  };
  // handle book submission
  const handlebookSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryname.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    const bookobj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price
    }
    // console.log(bookobj);

    // send data to db
    fetch(`${import.meta.env.VITE_API_BASE_URL}/upload-book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookobj)
    })    
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("Book uploaded successfully");
        form.reset();
      })


  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handlebookSumbit} className="flex lg:w-[800px] flex-col flex-wrap gap-8">
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="bookTitle" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>
        {/* second row */}
        {/* imageURL */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book imges UR" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book imges URL" required />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="InputState" value="Book Category" />
            </div>
            <select name="categoryname" id="InputState" className="w-full rounded" value={selectedbookcategory} onChange={handleChangeselected}>
              {
                bookcategory.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
        </div>
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" className="w-full " placeholder="Write a Book Description..." required rows={6} />
        </div>
        {/* boook pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" name="bookPDFURL" placeholder="Book PDF URL" required />
        </div>
        {/* price */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="price" />
          </div>
          <TextInput id="price" type="number" name="price" placeholder="$price" required />
        </div>
        <Button type="submit" color="blue" className="mt-8">
          Upload Book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook
