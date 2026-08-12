// Local Storage Database Fallback for Static Hosts (like GitHub Pages)
const DB_KEY = 'visamedicals_pro_local_db';

const initialLocalData = {
  hcare_info: {
    id: 1,
    name: "AL SHIFA VISA & MARITIME MEDICAL CENTER",
    address: "Suite 405, Healthcare Towers, Medical District",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zip_code: "400001",
    phone: "+91 22 5555 0199",
    mobile: "+91 98200 12345",
    fax: "+91 22 5555 0190",
    email: "info@alshifamedicals.com",
    gcc: "GCC-MED-88910",
    reg_no: "MH-MED-2024-9981",
    logo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=150&h=150&fit=crop&crop=faces"
  },
  countries: [
    { id: 1, country: "Saudi Arabia", reg_fee: 9500, gcc_status: 1 },
    { id: 2, country: "Qatar", reg_fee: 7500, gcc_status: 1 },
    { id: 3, country: "UAE", reg_fee: 9500, gcc_status: 1 },
    { id: 4, country: "Oman", reg_fee: 9500, gcc_status: 1 },
    { id: 5, country: "Kuwait", reg_fee: 9500, gcc_status: 1 },
    { id: 6, country: "Bahrain", reg_fee: 9500, gcc_status: 1 },
    { id: 7, country: "UK", reg_fee: 12000, gcc_status: 0 },
    { id: 8, country: "Canada", reg_fee: 14000, gcc_status: 0 },
    { id: 9, country: "Australia", reg_fee: 15000, gcc_status: 0 },
    { id: 10, country: "Malaysia", reg_fee: 4500, gcc_status: 0 },
    { id: 11, country: "Maldives", reg_fee: 5000, gcc_status: 0 },
    { id: 12, country: "Maritime Seafarer (DG Shipping)", reg_fee: 8500, gcc_status: 0 }
  ],
  users: [
    { id: 1, employee: "ADMINISTRATOR", user_name: "admin", role: "ADMIN", status: 0 },
    { id: 2, employee: "DR. SERGIO AYALA", user_name: "drsergio", role: "DOCTOR", status: 0 },
    { id: 3, employee: "DR. FATIMA KHAN", user_name: "drfatima", role: "DOCTOR", status: 0 },
    { id: 4, employee: "RECEPTION DESK 1", user_name: "reception", role: "RECEPTION", status: 0 },
    { id: 5, employee: "CHIEF LAB TECH", user_name: "labtech", role: "LAB", status: 0 },
    { id: 6, employee: "X-RAY TECHNICIAN", user_name: "xraytech", role: "X-RAY", status: 0 },
    { id: 7, employee: "PHARMACY MANAGER", user_name: "pharma", role: "PHARMA ADMIN", status: 0 }
  ],
  inventory_items: [
    { id: 1, item: "Meningococcal Vaccine (M)", manufacturer: "Sanofi Pasteur", description: "Quadrivalent ACYW Meningitis Vaccine", status: 0 },
    { id: 2, item: "MMR Vaccine", manufacturer: "GlaxoSmithKline", description: "Measles, Mumps & Rubella Combined", status: 0 },
    { id: 3, item: "Yellow Fever Vaccine", manufacturer: "Bio-Manguinhos", description: "Yellow Fever Live Attenuated", status: 0 },
    { id: 4, item: "Typhoid Conjugate Vaccine", manufacturer: "Bharat Biotech", description: "Typhoid Vi Conjugate", status: 0 }
  ],
  inventory_batches: [
    { id: 101, purchase_id: 1, item_id: 1, batch: "MEN-2026-B88", expiry: "2027-11-30", quantity: 500, stock: 342, update_history: "Initial stock load", status: 0 },
    { id: 102, purchase_id: 1, item_id: 2, batch: "MMR-9021-X4", expiry: "2026-09-15", quantity: 300, stock: 45, update_history: "Nearing expiry warning", status: 0 }
  ],
  suppliers: [
    { id: 1, name: "Global Pharma Distributors Ltd", address: "Plot 42, Pharma Zone", contact: "9821099887", email: "orders@globalpharma.com", status: 0 }
  ],
  registrations: [
    {
      id: 1001,
      token: 1,
      first_name: "MOHAMMED",
      middle_name: "TARIQ",
      last_name: "AL-MANSOORI",
      dob: "1994-06-15",
      age: "32",
      gender: "MALE",
      marital_status: "MARRIED",
      nationality: "INDIAN",
      place: "MUMBAI",
      passport_no: "Z9810472",
      date_issued: "2022-03-10",
      height: "175 cm",
      weight: 74,
      travelling_to: "Saudi Arabia",
      visa_no: "KSA-901844",
      visa_date: "2026-07-20",
      profession: "CIVIL ENGINEER",
      recruting_agency: "AL SHAMS OVERSEAS CONSULTANTS",
      embassy: "SAUDI CONSULATE MUMBAI",
      gamca_no: "GAMCA-SA-2026-88192",
      mofa_no: "MOFA-88102495",
      visit_date: "2026-08-12",
      time: "09:30:00",
      reg_type: "GCC_VISA",
      reg_fee: 9500,
      payment_mode: "CASH",
      phone_no: "9820199881",
      medical_status: "FIT",
      blood_taken: "YES",
      xray_taken: "YES",
      vaccination_taken: "Meningococcal, MMR",
      fingure_status: 1,
      status_stage: "COMPLETED",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    }
  ],
  mofa_entries: [
    { id: 1, visit_id: "1001", pass_no: "Z9810472", mofa_no: "MOFA-88102495", status: "VERIFIED", date: "2026-08-12" }
  ],
  logs: [
    { id: 1, user: "admin", action: "System Initialized", timestamp: new Date().toISOString() }
  ]
};

function getLocalDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    localStorage.setItem(DB_KEY, JSON.stringify(initialLocalData));
    return initialLocalData;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.setItem(DB_KEY, JSON.stringify(initialLocalData));
    return initialLocalData;
  }
}

function saveLocalDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

// API client with smart fallback for GitHub Pages
const BASE_URL = '/api';

export const fetchClinicInfo = async () => {
  try {
    const res = await fetch(`${BASE_URL}/info`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    return getLocalDB().hcare_info;
  }
};

export const updateClinicInfo = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/info`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    dbData.hcare_info = { ...dbData.hcare_info, ...data };
    saveLocalDB(dbData);
    return dbData.hcare_info;
  }
};

export const fetchCountries = async () => {
  try {
    const res = await fetch(`${BASE_URL}/countries`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    return getLocalDB().countries;
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    return getLocalDB().users;
  }
};

export const fetchRegistrations = async (search = '', stage = '') => {
  try {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (stage) params.append('status_stage', stage);
    const res = await fetch(`${BASE_URL}/registrations?${params.toString()}`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    let regs = getLocalDB().registrations || [];
    if (search) {
      const q = search.toLowerCase();
      regs = regs.filter(r => 
        (r.first_name && r.first_name.toLowerCase().includes(q)) ||
        (r.last_name && r.last_name.toLowerCase().includes(q)) ||
        (r.passport_no && r.passport_no.toLowerCase().includes(q))
      );
    }
    if (stage) {
      regs = regs.filter(r => r.status_stage === stage);
    }
    return regs;
  }
};

export const createRegistration = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const token = (dbData.registrations || []).length + 1;
    const newReg = {
      ...data,
      id: Date.now(),
      token,
      reg_fee: parseFloat(data.reg_fee) || 0,
      visit_date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      medical_status: 'IN_PROCESS',
      blood_taken: data.blood_taken || 'YES',
      xray_taken: data.xray_taken || 'PENDING',
      status_stage: 'LAB_TEST',
      fingure_status: 1
    };
    dbData.registrations.unshift(newReg);
    saveLocalDB(dbData);
    return newReg;
  }
};

export const fetchQueue = async () => {
  try {
    const res = await fetch(`${BASE_URL}/queue`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const regs = getLocalDB().registrations || [];
    return {
      reception: regs.filter(r => r.status_stage === 'RECEPTION'),
      lab: regs.filter(r => r.status_stage === 'LAB_TEST'),
      xray: regs.filter(r => r.status_stage === 'XRAY_TEST'),
      physical: regs.filter(r => r.status_stage === 'PHYSICAL_EXAM'),
      doctor: regs.filter(r => r.status_stage === 'DOCTOR_SIGNOFF'),
      completed: regs.filter(r => r.status_stage === 'COMPLETED')
    };
  }
};

export const updatePatientStage = async (id, stage, medicalStatus = null) => {
  try {
    const res = await fetch(`${BASE_URL}/registrations/${id}/stage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stage, medical_status: medicalStatus })
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const idx = dbData.registrations.findIndex(r => String(r.id) === String(id));
    if (idx !== -1) {
      dbData.registrations[idx].status_stage = stage;
      if (medicalStatus) dbData.registrations[idx].medical_status = medicalStatus;
      saveLocalDB(dbData);
      return dbData.registrations[idx];
    }
    return null;
  }
};

export const submitLabResult = async (id, labData) => {
  try {
    const res = await fetch(`${BASE_URL}/lab/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(labData)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const idx = dbData.registrations.findIndex(r => String(r.id) === String(id));
    if (idx !== -1) {
      dbData.registrations[idx].lab_result = { ...labData, status: 'PASSED' };
      dbData.registrations[idx].blood_taken = 'YES';
      dbData.registrations[idx].status_stage = 'PHYSICAL_EXAM';
      saveLocalDB(dbData);
      return dbData.registrations[idx];
    }
    return null;
  }
};

export const submitMedicalResult = async (id, medicalData) => {
  try {
    const res = await fetch(`${BASE_URL}/medical/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(medicalData)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const idx = dbData.registrations.findIndex(r => String(r.id) === String(id));
    if (idx !== -1) {
      const status = medicalData.status || 'FIT';
      dbData.registrations[idx].medical_result = medicalData;
      dbData.registrations[idx].medical_status = status;
      dbData.registrations[idx].status_stage = 'COMPLETED';
      saveLocalDB(dbData);
      return dbData.registrations[idx];
    }
    return null;
  }
};

export const fetchInventory = async () => {
  try {
    const res = await fetch(`${BASE_URL}/inventory`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const items = dbData.inventory_items || [];
    const batches = dbData.inventory_batches || [];
    const suppliers = dbData.suppliers || [];
    
    const mergedItems = items.map(item => {
      const itemBatches = batches.filter(b => String(b.item_id) === String(item.id));
      const totalStock = itemBatches.reduce((acc, b) => acc + (b.stock || 0), 0);
      return { ...item, batches: itemBatches, totalStock };
    });

    return { items: mergedItems, batches, suppliers };
  }
};

export const addInventoryBatch = async (batchData) => {
  try {
    const res = await fetch(`${BASE_URL}/inventory/batch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(batchData)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const batch = { ...batchData, id: Date.now() };
    dbData.inventory_batches.unshift(batch);
    saveLocalDB(dbData);
    return batch;
  }
};

export const fetchMofaEntries = async () => {
  try {
    const res = await fetch(`${BASE_URL}/mofa`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    return getLocalDB().mofa_entries || [];
  }
};

export const addMofaEntry = async (mofaData) => {
  try {
    const res = await fetch(`${BASE_URL}/mofa`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mofaData)
    });
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const dbData = getLocalDB();
    const entry = {
      ...mofaData,
      id: Date.now(),
      status: 'VERIFIED',
      date: new Date().toISOString().split('T')[0]
    };
    dbData.mofa_entries.unshift(entry);
    saveLocalDB(dbData);
    return entry;
  }
};

export const fetchAnalytics = async () => {
  try {
    const res = await fetch(`${BASE_URL}/analytics`);
    if (!res.ok) throw new Error('Static Mode');
    return await res.json();
  } catch (e) {
    const regs = getLocalDB().registrations || [];
    const totalRegistrations = regs.length;
    const fitCount = regs.filter(r => r.medical_status === 'FIT').length;
    const unfitCount = regs.filter(r => r.medical_status === 'UNFIT').length;
    const inProcessCount = regs.filter(r => r.medical_status === 'IN_PROCESS').length;
    
    const revenue = regs.reduce((sum, r) => sum + (parseFloat(r.reg_fee) || 0), 0);
    
    const countryMap = {};
    regs.forEach(r => {
      const c = r.travelling_to || 'Other';
      countryMap[c] = (countryMap[c] || 0) + 1;
    });

    const batches = getLocalDB().inventory_batches || [];
    const items = getLocalDB().inventory_items || [];
    const lowStockAlerts = batches.filter(b => b.stock < 50).map(b => {
      const item = items.find(i => String(i.id) === String(b.item_id));
      return {
        batch: b.batch,
        stock: b.stock,
        expiry: b.expiry,
        itemName: item ? item.item : 'Vaccine Item'
      };
    });

    return {
      totalRegistrations,
      fitCount,
      unfitCount,
      inProcessCount,
      revenue,
      countryMap,
      lowStockAlerts,
      recentLogs: getLocalDB().logs || []
    };
  }
};
