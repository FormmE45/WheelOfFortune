import { Participant } from "./ParticipantClass"
import { Prize } from "./PrizeClass"

export const participants: Participant[]=[]
export const participantsForSpecialCase: Participant[]=[]
export const prizes: Prize[]=[]
export const prizeButtons: HTMLButtonElement[]=[]
//Participants
const participant1=new Participant(1,"NGUYỄN THỊ THÙY NGA",3,14,"HIGH",true)
const participant2=new Participant(2,"LÊ VĂN HẬN",3,14,"HIGH",true)
const participant3=new Participant(3,"PHẠM THỊ NHÂN HÒA",3,13,"HIGH",true)
const participant4=new Participant(4,"NGUYỄN PHÚC SƠN",3,13,"HIGH",true)
const participant5=new Participant(5,"NGUYỄN VĂN CHÍNH TRỰC",3,10,"HIGH",true)
const participant6=new Participant(6,"TÔN NỮ HUYỀN PHƯƠNG",2,8,"MID",true)
const participant7=new Participant(7,"VŨ THỊ TUYẾT MAI",2,8,"MID",true)
const participant8=new Participant(8,"NGUYỄN HOÀNG THẢO NGUYÊN",2,7,"MID",true)
const participant9=new Participant(9,"NGÔ ANH HÙNG",2,7,"MID",true)
const participant10=new Participant(10,"HUỲNH VIỆT KHƯƠNG",2,7,"MID",true)
const participant11=new Participant(11,"HOÀNG THỊ THU YẾN",2,7,"MID",true)
const participant12=new Participant(12,"NGUYỄN KHẮC CƯỜNG",2,7,"MID",true)
const participant13=new Participant(13,"PHAN THỊ NGỌC CHÂU",2,7,"MID",true)
const participant14=new Participant(14,"PHAN NỮ DANH PHƯƠNG",2,7,"MID",true)
const participant15=new Participant(15,"LÊ HỒNG SƠN",2,6,"MID",true)
const participant16=new Participant(16,"NGUYỄN THỊ THẢO NGUYÊN",2,5,"MID",true)
const participant17=new Participant(17,"BÙI THỊ HƯƠNG",2,5,"MID",true)
const participant18=new Participant(18,"BÙI THỊ THANH HÒA",2,5,"MID",true)
const participant19=new Participant(19,"NGUYỄN HOÀNG PHƯƠNG",2,5,"MID",true)
const participant20=new Participant(20,"NGUYỄN ĐÌNH SƠN",2,5,"MID",true)
const participant21=new Participant(21,"LÊ THỊ HỒNG PHÚ",2,5,"MID",true)
const participant22=new Participant(22,"BÙI THỊ HỒNG",2,5,"MID",true)
const participant23=new Participant(23,"PHAN THỊ NGỌC HUỆ",2,5,"MID",true)
const participant24=new Participant(24,"PHẠM LÂM THANH NHÃ",2,5,"MID",true)
const participant25=new Participant(25,"LÊ QUANG MINH",2,5,"MID",true)
const participant26=new Participant(26,"NGUYỄN THÀNH ĐẠT",2,5,"MID",true)
const participant27=new Participant(27,"BÙI THỊ NHƯ THẢO",2,5,"MID",true)
const participant28=new Participant(28,"NGUYỄN THỊ NGỌC TÚ",1,4,"LOW",true)
const participant29=new Participant(29,"HUỲNH NGUYỄN THỦY THƯƠNG",1,4,"LOW",true)
const participant30=new Participant(30,"PHẠM NGỌC TRẬN",1,3,"LOW",true)
const participant31=new Participant(31,"NGUYỄN THỊ ÁNH HỒNG",1,3,"LOW",true)
const participant32=new Participant(32,"NGUYỄN NHỰT MINH TUYỀN",1,3,"LOW",true)
const participant33=new Participant(33,"NGÔ VĂN HIỆN",1,3,"LOW",true)
const participant34=new Participant(34,"LÊ TIẾN DŨNG",1,3,"LOW",true)
const participant35=new Participant(35,"PHAN MINH KHÁNH",1,3,"LOW",true)
const participant36=new Participant(36,"NGUYỄN THANH TÙNG",1,3,"LOW",true)
const participant37=new Participant(37,"NGUYỄN THANH LONG",1,2,"LOW",true)
const participant38=new Participant(38,"NGUYỄN VŨ HOÀI MỸ",1,2,"LOW",true)
const participant39=new Participant(39,"VŨ VIẾT HƯNG",1,2,"LOW",true)
const participant40=new Participant(40,"LÊ THỊ HIỀN THỤC",1,2,"LOW",true)
const participant41=new Participant(41,"NGUYỄN VĂN NĂM",1,2,"LOW",true)
const participant42=new Participant(42,"HUỲNH VĂN CHÂU",1,2,"LOW",true)
const participant43=new Participant(43,"HUỲNH LÊ KIỀU NGÂN",1,2,"LOW",true)
const participant44=new Participant(44,"NGUYỄN HỮU TRUNG KIÊN",1,2,"LOW",true)
const participant45=new Participant(45,"TRƯƠNG THỊ ÁNH THU",1,2,"LOW",true)
const participant46=new Participant(46,"LÊ NGỌC PHỈ",1,2,"LOW",true)
const participant47=new Participant(47,"PHẠM TRÌNH THIÊN Ý",1,2,"LOW",true)
const participant48=new Participant(48,"TRẦN HỮU PHƯỚC",1,2,"LOW",true)
const participant49=new Participant(49,"TRẦN NGUYỄN ANH THƯ",1,2,"LOW",true)
const participant50=new Participant(50,"NGUYỄN NHỰT MINH TIẾN",1,2,"LOW",true)
const participant51=new Participant(51,"TRẦN NGỌC THANH",1,1,"LOW",true)
const participant52=new Participant(52,"NGUYỄN ÁNH HUYỀN",1,1,"LOW",true)
const participant53=new Participant(53,"CHÂU HUỲNH NGỌC ÁNH",1,1,"LOW",true)
const participant54=new Participant(54,"TRẦN VĂN LÂM",1,1,"LOW",true)
const participant55=new Participant(55,"PHẠM VĂN DƯƠNG",1,1,"LOW",true)
const participant56=new Participant(56,"PHẠM THỊ KIM PHỤNG",1,1,"LOW",true)
const participant57=new Participant(57,"HỨA THỊ VŨ PHƯƠNG",1,1,"LOW",true)
const participant58=new Participant(58,"NGUYỄN GIANG HÀ",1,1,"LOW",true)
const participant59=new Participant(59,"TRẦN KIM NGÂN",1,1,"LOW",true)
const participant60=new Participant(60,"NGUYỄN VĂN TÁM",1,1,"LOW",true)
const participant61=new Participant(61,"NGUYỄN HOÀNG LỆ KHA",1,1,"LOW",true)
const participant62=new Participant(62,"NGUYỄN CHÍ KHANG",1,1,"LOW",true)
const participant63=new Participant(63,"HOÀNG THỊ THÁI AN",1,1,"LOW",true)
const participant64=new Participant(64,"NGUYỄN HẢI VÂN",1,0,"LOW",true)
const participant65=new Participant(65,"TRƯƠNG THỊ HỒNG HÀ",1,0,"LOW",true)
const participant66=new Participant(66,"PHẠM PHÙNG HẢI VY",1,0,"LOW",true)
const participant67=new Participant(67,"PHAN NGÔ PHƯƠNG MAI",1,0,"LOW",true)
//Prizes
export const prizeKK=new Prize('KK',"Khuyến Khích",'active',false,35)
export const prize4=new Prize('4',"Giải 4",'active',false,30)
export const prize3=new Prize('3',"Giải 3",'active',false,10)
export const prize2=new Prize('2',"Giải 2",'active',false,5)
export const prize1=new Prize('1',"Giải 1",'active',false,2)
export const prizeDB=new Prize('ĐB',"Giải Đặc Biệt",'active',false,1)   

participants.push(participant1,participant2,participant3,participant4,participant5,participant6,participant7,participant8,participant9,participant10,participant11,participant12,participant13,participant14,participant15,
    participant16,participant17,participant18,participant19,participant20,participant21,participant22,participant23,participant24,participant25,participant26,participant27,participant28,participant29,participant30,
    participant31,participant32,participant33,participant34,participant35,participant36,participant37,participant38,participant39,participant40,participant41,participant42,participant43,participant44,participant45,
    participant46,participant47,participant48,participant49,participant50,participant51,participant52,participant53,participant54,participant55,participant56,participant57,participant58,
    participant59,participant60,participant61,participant62,participant63,participant64,participant65,participant66,participant67)

  
participantsForSpecialCase.push(participant1,participant2,participant3,participant4,participant5,participant6,participant7,participant8,participant9,participant10,participant11,participant12,participant13,participant14,participant15,
    participant16,participant17,participant18,participant19,participant20,participant21,participant22,participant23,participant24,participant25,participant26,participant27)




prizes.push(prizeKK,prize4,prize3,prize2,prize1,prizeDB)

 