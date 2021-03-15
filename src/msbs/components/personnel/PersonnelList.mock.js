const personnelList = [
  {
    id: '96a8142f-a8ad-466d-bc9d-1390fc17a25c',
    name: 'A',
    position: 'Supervisor',
  },
  {
    id: 'b741909a-11c8-40a8-8d83-1b35cb385902',
    name: 'A',
    position: 'Supervisor',
  },
  {
    id: 'cc729df2-d7f8-41e0-8506-1e38804c8951',
    name: 'Ko Supervisor',
    position: 'Supervisor',
  },
  {
    id: '7d888d75-3560-45fa-b524-23d3e4987ad3',
    name: 'U Khin Win',
    position: 'Supervisor',
  },
  {
    id: '79526e7d-e5ce-4372-ac68-1e916b8d53a6',
    name: 'Daw Phyu Phyu Win',
    position: 'Supervisor',
  },
  {
    id: '74640eb2-62ca-449a-86d9-6576b171cc48',
    name: 'Ko Super',
    position: 'Supervisor',
  },
  {
    id: 'bf368b8b-2615-4ed9-a59d-65a1e6cc898a',
    name: 'Staff 11',
    position: 'Supervisor',
  },
  {
    id: 'f6e9721f-29e3-4e64-865d-8cef11be361d',
    name: 'U Min Nyo Thein',
    position: 'Supervisor',
  },
  {
    id: '4c4f4344-ddd8-48e4-baf4-ac4eae7bb045',
    name: 'ဦးလှသောင်း',
    position: 'Supervisor',
  },
  {
    id: 'a110d7a7-5a94-4a27-8fcc-b365c21b5455',
    name: 'ဦးလှိုင်မျိုးဇော်',
    position: 'Supervisor',
  },
  {
    id: 'c4264514-9711-4505-90f8-d633d61c5084',
    name: 'U Hlaing Myo Zaw',
    position: 'Supervisor',
  },
  {
    id: '035328f5-67bf-4133-bb0c-dc264848ca87',
    name: 'Pwa Gyi',
    position: 'Supervisor',
  },
  {
    id: '37759ef9-e074-4c4a-8fae-eefa277c0692',
    name: 'Ko Super',
    position: 'Supervisor',
  },
  {
    id: 'ae7f5265-87e3-414c-8fc2-f51be8c93486',
    name: 'Lynn Lae',
    position: 'Supervisor',
  },
  {
    id: '36ae6926-c2c7-482b-b841-fb01b427b653',
    name: 'ဦးမင်းကိုကိုကျော်',
    position: 'Supervisor',
  },
  {
    id: '17af8f4f-7ca9-48ee-bd17-fd40b2320338',
    name: 'Staff 5',
    position: 'Supervisor',
  },
  {
    id: 'a0a58916-dc24-4564-9283-fec482786745',
    name: 'U Aung Soe Moe',
    position: 'Supervisor',
  },
  {
    id: '5ca4d8df-bdae-44a2-bbcb-a219caaa57a9',
    name: 'Mg Mg',
    position: 'Sales',
  },
  {
    id: 'f93f32da-bebb-4419-8fc8-bce2845dc080',
    name: 'ဒေါ်အိရူပခိုင်',
    position: 'Sales',
  },
  {
    id: 'eb65167b-1541-4500-8add-de0057bd8729',
    name: 'ဒေါ်အိရူပခိုင်',
    position: 'Sales',
  },
  {
    id: 'd44e9a45-1d37-4cc6-aca7-e3df6d80a6cc',
    name: 'Daw Than Than Soe',
    position: 'Sales',
  },
  {
    id: 'ff4e4c93-0be6-463f-821c-825a700b61c5',
    name: 'ဦးခင်ဝင်း',
    position: 'Sales',
  },
  {
    id: 'ad9d8ef6-5cb2-40d6-8dbf-5da3b37c015f',
    name: 'Staff 4',
    position: 'Sales',
  },
  {
    id: '42de5e48-087b-46bd-a9fc-6edab1e02138',
    name: 'Lin Lat',
    position: 'Sales',
  },
  {
    id: '86e30610-c1f8-4b18-af8b-692abed98280',
    name: 'Ma Ei Yupar',
    position: 'Sales',
  },
  {
    id: '529cff23-7c0f-496d-bb2b-3897755f52f2',
    name: 'Ma Ei Yupar',
    position: 'Sales',
  },
  {
    id: 'd93bd0e8-9230-47ef-b8b4-307658b4ab49',
    name: 'Staff 8',
    position: 'Sales',
  },
  {
    id: 'd66f1d46-cfda-4ebe-b7b0-25b1fa1a1dbb',
    name: 'ဦးခင်ဝင်း',
    position: 'Sales',
  },
  {
    id: '727a83ab-f851-4a66-953f-1e8a795c4352',
    name: 'ဦးမြတ်ဇေယျာလင်း',
    position: 'Warehouse Staff',
  },
  {
    id: 'a054dd40-f430-4fe0-a6ad-3a2c3b7e6652',
    name: 'ဦးဇင်မင်းအောင်',
    position: 'Warehouse Staff',
  },
  {
    id: '119b369e-71cf-4aee-9e77-b4d9775e8e9f',
    name: 'ပြည့်စုံအောင်',
    position: 'Field Staff',
  },
  {
    id: '04f240fb-4e93-471b-9fd7-bb62d27c4720',
    name: 'U Win Myint Hlaing',
    position: 'General',
  },
  {
    id: '061182ad-4242-4d7b-9d10-633b7417df42',
    name: 'Ma Mar',
    position: 'General',
  },
  {
    id: 'b3df76a4-ec46-4443-9855-761355189324',
    name: 'Ma Ni Ni Phone',
    position: 'General',
  },
  {
    id: '73baad03-13a9-46c0-9c83-8d68f454d8d4',
    name: 'Staff 1',
    position: 'General',
  },
  {
    id: '2dc3c7ea-ceab-41ab-aacb-90d15f811aef',
    name: 'Staff 6',
    position: 'General',
  },
  {
    id: 'dae57242-de3f-4b5a-998d-39a0fbc08173',
    name: 'Staff 19',
    position: 'General',
  },
  {
    id: 'd43984b8-6a4e-4384-8c1a-39fe9f8549ce',
    name: 'Staff 18',
    position: 'General',
  },
  {
    id: '7d76d591-9fdb-45bd-a89e-6c095eb19e75',
    name: 'Staff 10',
    position: 'General',
  },
  {
    id: '9d1ac6ae-d6a7-454e-ab61-6e091d88f66c',
    name: 'test002',
    position: 'General',
  },
  {
    id: '532738c8-4ce2-455f-8352-1e0e9344af01',
    name: 'Staff 12',
    position: 'General',
  },
  {
    id: '66e8b138-44d8-4cd4-8ec3-1f8d9eee17b3',
    name: 'Zan',
    position: 'General',
  },
  {
    id: 'f9ddf4fe-2ce0-4b76-98dc-ee70a63afe7b',
    name: 'U Win Myint Hlaing',
    position: 'General',
  },
  {
    id: 'a15ef0ac-9213-4dea-b1c5-f65c4d1349b0',
    name: 'Staff 9',
    position: 'General',
  },
  {
    id: '3cc5251a-4c19-4369-badf-f70ab3486c44',
    name: 'U Myo Myint',
    position: 'NA',
  },
  {
    id: 'abb5b612-4429-43b0-bec5-ef256842f02a',
    name: 'ဦးစိုးလေး',
    position: 'NA',
  },
  {
    id: 'f2afe050-b83e-48c3-857b-e94919d335c4',
    name: 'U Wai Phyo Aung',
    position: 'NA',
  },
  {
    id: 'a4951b3b-0d38-4978-b9cf-dcbee58e3f72',
    name: 'ဦးမင်းမင်းဦး',
    position: 'NA',
  },
  {
    id: 'b295b40e-5a10-4941-89d2-32a94af4e463',
    name: 'Staff 13',
    position: 'NA',
  },
  {
    id: 'd64e01ee-e1af-4496-b20b-29be0c87885c',
    name: 'Daw Aye Mar',
    position: 'NA',
  },
  {
    id: '3994f343-a57a-46a0-a9f5-2e3e70da4bcd',
    name: 'Staff 3',
    position: 'NA',
  },
  {
    id: 'c48ee1c2-4360-416d-bab9-1dcd435a0f5b',
    name: 'U Min Min',
    position: 'NA',
  },
  {
    id: 'f00ea442-6a6d-4015-8ca1-564d646d68c1',
    name: 'U Sai Tun Aung',
    position: 'NA',
  },
  {
    id: 'a0f3390c-9290-4b87-ade6-41eb5020e222',
    name: 'U Than Hlaing Soe',
    position: 'NA',
  },
  {
    id: '9042d04b-afdb-45c4-b1a9-4c9ca9960f61',
    name: 'ဦးဌေးဝင်း',
    position: 'NA',
  },
  {
    id: 'a29bce80-df19-484e-9038-764a2ce1dc94',
    name: 'Staff 17',
    position: 'NA',
  },
  {
    id: 'b58c24d1-2eb2-44ab-81c2-721634cb5f14',
    name: 'ဦးကျော်ဝေဦး',
    position: 'NA',
  },
  {
    id: '01df9d26-0076-405a-acee-60f4c3659ecb',
    name: 'Staff 15',
    position: 'NA',
  },
  {
    id: 'abf1a26e-9e4a-469f-b48c-ae728d2d6573',
    name: 'U Thet Naing Soe',
    position: 'NA',
  },
  {
    id: '6be5fbc1-89f3-4564-99f8-aec2cdaaf010',
    name: 'ဒေါ်အိအိသိန်း',
    position: 'NA',
  },
  {
    id: '0285b529-fbff-4f54-971c-b0380059184b',
    name: 'ဦးအောင်ကျော်သူ',
    position: 'NA',
  },
  {
    id: '35106c04-dccf-41b0-ac86-ca133a510ae7',
    name: 'ဦးချစ်ရအောင်',
    position: 'NA',
  },
  {
    id: 'facd53a3-5bd9-4c32-bad1-cab60b97d5fd',
    name: 'Staff 7',
    position: 'NA',
  },
  {
    id: '50349034-bcc6-4a21-b25b-cf4920d91067',
    name: 'Daw Wai Wai Khaing',
    position: 'NA',
  },
  {
    id: 'b55bc1c7-c0ef-4dda-bbe4-bba840ea0fbb',
    name: 'TEST USER PYI',
    position: 'NA',
  },
  {
    id: 'd06c8898-4ce8-4cf5-8aef-b8a1b8f8e4d2',
    name: 'U Than Mg',
    position: 'NA',
  },
  {
    id: '00053ca4-12f8-4cf1-addd-b1177506e9a5',
    name: 'Yuriko Sarsaki',
    position: 'Manager',
  },
  {
    id: 'e3b3ffbe-4e3e-4dba-b0e3-ac075737bc63',
    name: 'Pyi Htun',
    position: 'Manager',
  },
  {
    id: 'ff115489-3919-47ed-a4e1-7be4aef4bbe8',
    name: 'Ma Mar',
    position: 'Manager',
  },
  {
    id: '82c649dc-236e-4dc5-84bc-764937e11e00',
    name: 'ဦးစောမိုက်ကယ်',
    position: 'Manager',
  },
  {
    id: '36f2b486-ef1b-4691-8dd2-5177cc858589',
    name: 'Hla Myint',
    position: 'Manager',
  },
  {
    id: 'dbcbcc4a-ea96-4ccf-a869-517d2f7cf60c',
    name: 'U Htay Shein',
    position: 'Manager',
  },
  {
    id: '526bdacb-e110-4376-8416-04ba79c7d164',
    name: 'Ma Ni Ni Phone',
    position: 'Manager',
  },
  {
    id: '458b83d4-9fda-44a3-aa4e-104d9aff9fc5',
    name: 'Staff 20',
    position: 'Manager',
  },
  {
    id: 'a9a6edda-ba40-48ff-a3ca-36734d3f2f6a',
    name: 'U Kyaw Moe Khaing',
    position: 'Manager',
  },
  {
    id: 'bdde5a3c-b4ef-4f90-a51d-f9058f1e0a70',
    name: 'ဦးသောင်းထွန်း',
    position: 'Manager',
  },
  {
    id: '808ec447-4a11-44e1-8c87-ffebd20ac069',
    name: 'Staff 2',
    position: 'Manager',
  },
  {
    id: '144be848-de2c-4b4f-84d5-dd61507bc2d2',
    name: 'Staff 16',
    position: 'Manager',
  },
  {
    id: 'e89f6a10-6833-4d94-8283-bd53014837e3',
    name: 'Sa Yar Gyi',
    position: 'Manager',
  },
  {
    id: '5bb0bcd0-6a0f-49e3-bc97-f1ac23f20daa',
    name: 'Staff 14',
    position: 'Manager',
  },
  {
    id: 'a9b1bdd7-9bb2-4d1b-973a-0df7d9673eda',
    name: 'U Hla Thaung',
    position: 'Warehouse Operative',
  },
  {
    id: '0788e70b-8d6e-4aa9-b57d-622ce4cebf28',
    name: 'Pho Htaung',
    position: 'Warehouse Operative',
  },
  {
    id: '7a784a73-2e9a-40fa-b299-7dace3587d9b',
    name: 'U San Nyunt',
    position: 'Warehouse Operative',
  },
];

export default personnelList;
