import { useState, React } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaAlignLeft } from 'react-icons/fa';

const Header = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 30px;
   line-height: 41px;
   margin: 30px 32px 0px 32px;
`;
const Header2 = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   margin-top: 10px;
   display: flex;
   flex-direction: column;
`;
const Header3 = styled.h3`
   font-family: Arial;
   font-size: 14px;
   line-height: 19px;
   margin: 5px 32px 0px 32px;
`;
const Header4 = styled.h2`
   font-family: Arial;
   font-size: 14px;
   line-height: 19px;
   margin: 5px 32px 0px 32px;
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
const EditButtonContainer = styled.div`
   width: 100%;
   margin-left: 32px;
`;
const LinkButtonContainer = styled.div`
   width: 75%;
   border-bottom: 2px solid #c0c0c0;
   margin: 5px 32px 10px 32px;
`;

export default () => {
   const [title, setTitle] = useState('');
   const [hyperlink, setHyperlink] = useState('');
   const [content, setContent] = useState('');
   const [editing, setEditing] = useState(true);
   const date = new Date();
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   // const setAnnouncementData = () => {
   //    const data = {
   //       title: `${title}`,
   //       author: 'John Doe',
   //       text: `${content}`,
   //       createdAt: `${date}`,
   //       link: `${hyperlink}`,
   //    };
   //    return data;
   // };

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
            <div>
               <EditButtonContainer>
                  <Button variant="light" onClick={() => setEditing(true)}>
                     Edit
                  </Button>
               </EditButtonContainer>
               <Header>{title}</Header>
               {console.log(date)}
               <Header4>
                  Posted by author on {months[date.getMonth()]}
                  {date.getDate()}, {date.getFullYear()}
               </Header4>
               <LinkButtonContainer>
                  <Button variant="link" href={hyperlink}>
                     <FaExternalLinkAlt />
                     {hyperlink}
                  </Button>
               </LinkButtonContainer>
               <Header3>{content}</Header3>
            </div>
         )}
      </div>
   );
};
