import { useState, React } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaAlignLeft } from 'react-icons/fa';
import ReviewAnnouncement from './ReviewAnnouncement';
// import ReviewAnnouncement from './ReviewAnnouncement';

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   margin-top: 10px;
   display: flex;
   flex-direction: column;
`;
const InputContainer = styled.div`
   display: flex;
   width: 100%;
   margin-top: 10px;
`;
const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px 0px 0px 32px;
   width: 75%;
`;
const StyledField = styled(Form.Control)`
   width: 100%;
   margin-top: 10px;
   border: none;
   border-bottom: 2px solid #c0c0c0;
   font-size: 30px;
`;
const StyledField2 = styled(Form.Control)`
   width: 100%;
   margin: 10px 0px 0px 20px;
   border: 2px solid #c4c4c4;
   border-radius: 5px;
`;
const ButtonContainer = styled.div`
   text-align: right;
   margin: 15px 32px 0px 0px;
`;
const StyledButton = styled(Button)`
   background-color: rgba(174, 76, 51, 1);
`;

export default () => {
   const [title, setTitle] = useState('');
   const [hyperlink, setHyperlink] = useState('');
   const [content, setContent] = useState('');
   const [editing, setEditing] = useState(true);
   const date = new Date();

   const setAnnouncementData = () => {
      const data = {
         title: `${title}`,
         author: 'John Doe',
         text: `${content}`,
         createdAt: `${date}`,
         link: `${hyperlink}`,
      };
      return data;
   };

   return (
      <div>
         {editing ? (
            <div>
               <ButtonContainer>
                  <StyledButton onClick={() => setEditing(false)}>
                     Review
                  </StyledButton>
               </ButtonContainer>
               <Form>
                  <Form.Row>
                     <FormContainer>
                        <StyledField
                           class="text-center"
                           required
                           type="text"
                           defaultValue={title}
                           onChange={(e) => {
                              setTitle(e.target.value);
                           }}
                           size="lg"
                           placeholder="Announcement Title"
                        />
                        <InputContainer>
                           <Header2>
                              Link <FaExternalLinkAlt />
                           </Header2>
                           <StyledField2
                              class="text-center"
                              required
                              type="text"
                              defaultValue={hyperlink}
                              onChange={(e) => {
                                 setHyperlink(e.target.value);
                              }}
                              size="lg"
                              placeholder="Hyperlink (optional)"
                           />
                        </InputContainer>
                        <InputContainer>
                           <Header2>
                              Body <FaAlignLeft />
                           </Header2>
                           <StyledField2
                              class="text-center"
                              required
                              type="text-area"
                              defaultValue={content}
                              onChange={(e) => {
                                 setContent(e.target.value);
                              }}
                              as="textarea"
                              rows={9}
                              placeholder="Write the announcement here..."
                           />
                        </InputContainer>
                     </FormContainer>
                  </Form.Row>
               </Form>
            </div>
         ) : (
            <ReviewAnnouncement AnnouncementData={setAnnouncementData()} />
         )}
      </div>
   );
};
