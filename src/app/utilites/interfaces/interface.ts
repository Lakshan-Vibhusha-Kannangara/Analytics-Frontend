// Interface for a chat message
export interface ChatMessage {
  id?: number;
  timestamp: string;
  senderId: number;
  recipientId: number;
  text: string;
  attachment?:string
}

export interface User {
  name: string;
  avatar: string;
}
export interface ChatUser {
  id: number;

  messages: ChatMessage[];
}

// Interface for the chat data
export interface ChatData {
  conversations: ChatUser[];

}
export interface Student {
  studentID: number;
  firstName: string;
  lastName: string;
  yearLevel: number;
}

export interface ClassInfo {
  classID: number;
  className: string;
}

export interface SchoolData {
  schoolName:string,
  students: Student[];
  classInfos: ClassInfo[];
  studentInfos:Student[],
  studentCount: number;
}
export interface AssessmentData {
  distinctCount: number;
  averageScore: number;
  highDistinctCount: number;
  participantCount: number;
  correctAnswerPercentagePerClass: {
    className: string;
    correctAnswerPercentage: number;
  }[];
  sydneyAverageScore: number;
  sydneyParticipants: number;
}

export interface LoginUser {
  userId?: number;
  name?: string;
  email?: string;
  password?: string;
   avatar?: string;
  createdDate?: string;
  token?: string;
}
export interface SendUser {

  name: string;
  email: string;
  password: string;
   avatar?: string;

}
export interface LoginResponse{
  token:string;
  user:LoginUser;
}
export interface User {
  id?: number;
  fullName?: string;
  email: string;
  password: string;
  designation?: string;
  createdDate?: string;
  token?: string;
}
export interface Login{
  email:string,
  password:string;
}
export interface Search{
  userId:number;
  query:string;
}