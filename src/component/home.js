import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { deleteNote, getAllNotes } from "../_helper/apiCall/noteService";
import { setSession } from "../_helper/apiConfig/api_auth";

function Home() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    console.log("hello");
    (async () => {
      let data = await getAllNotes();
      if (data) {
        console.log(data?.data);
        setNotes(data?.data);
      }
    })();
  }, []);
  const onDelete = async (id) => {
   
    await deleteNote(id);
    (async () => {
     
      let data = await getAllNotes();
      if (data) {
        console.log(data?.data);
        setNotes(data?.data);
      } else {
        setNotes([]);
      }
    })();
  };
  const signOut = async (e) => {
    e.preventDefault();
    setSession();
    window.location.reload();
  };
  return (
    <div className="home-page" data-aos="zoom-in">
    <h1 className="text-center">All Notes</h1>
      <div className="d-flex justify-content-between">
        <Link to="/add" data-aos="zoom-in">
          <Button color="primary">Add Note</Button>
        </Link>
        <Button onClick={signOut} color="primary">
          Log Out
        </Button>
      </div>

      {notes && notes.length > 0 ? (
        <>
          <Table data-aos="zoom-in">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Title</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>

            {notes.map((i, index) => (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{i.name}</td>
                  <td>{i.note}</td>
                  <td>
                    <Link to={"/edit/" + i.id}>
                      <Button className="action-btn" color="success">
                        <AiTwotoneEdit style={{ fontSize: "25px" }} />
                      </Button>
                    </Link>
                    <Button
                      className="action-btn"
                      onClick={async (e) => {
                        e.preventDefault();
                        await onDelete(i.id);
                      }}
                      color="danger"
                    >
                      <AiFillDelete style={{ fontSize: "25px" }} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </>
      ) : (
        <>No record found</>
      )}
    </div>
  );
}

export default Home;
