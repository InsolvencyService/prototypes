$(document).ready(function() {
   
var creditors =   [
{ icon: 'glyphicon-star', address: '274 Lesborne Road, Reigate, Surrey, RH2 7JP', value: 'Goods Abundant Ltd' },
{ icon: 'glyphicon-star', address: 'Walton House 56-58, Richmond Hill, Bournemouth, BH2 6EX', value: 'ABC Company' },

{ icon: '', address: 'The Omnibus Building, Lesborne Road, Reigate, Surrey, RH2 7JP', value: '1st  Credit' },
{ icon: '', address: 'c/o KPMG, FAO Lynn Taylor, National Client Service Centre, One Snowhill, Snow Hill Queensway, Birmingham, B4 6GH', value: 'Abbey National Plc' },
{ icon: '', address: 'c/o KPMG, FAO Lynn Taylor, National Client Service Centre, One Snowhill, Snow Hill Queensway, Birmingham, B4 6GH', value: 'Abbey National Plc' },
{ icon: '', address: 'Express House, Clayton Business Park, Petre Road, Accrington, Lancashire, BB5 5JY', value: 'Ace Cards and Gifts' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Additions Direct' },
{ icon: '', address: 'Minton Hollins Building, Shelton Old Road, Stoke-on-Trent, ST4 7RY', value: 'Advantis Credit' },
{ icon: '', address: 'Debt Collection Department, Bishops Rise, Hatfield, Herts, AL10 9HL', value: 'Affinity Water' },
{ icon: '', address: 'PO Box 444, Bromley, BR1 1ZB', value: 'Aktiv Kapital' },
{ icon: '', address: 'Essex & Suffolk Water Customer Care, FAO Warren Pitts, PO Box 292, Durhan, DH1 9TX', value: 'Alexander James & Co Ltd' },
{ icon: '', address: 'c/o KPMG, FAO Lynn Taylor, National Client Service Centre, One Snowhill, Snow Hill Queensway, Birmingham, B4 6GH', value: 'Alliance & Leicester Plc' },
{ icon: '', address: 'c/o KPMG, FAO Lynn Taylor, National Client Service Centre, One Snowhill, Snow Hill Queensway, Birmingham, B4 6GH', value: 'Alliance & Leicester Plc' },
{ icon: '', address: 'Registered Office: Adamson House, Towers Business Park, Didsbury, Manchester, M20 2YY.', value: 'Allied International Credit (UK) Ltd' },
{ icon: '', address: 'FAO Graham Wallis, American Express Insolvencies, PO Box 1028, Maidstone, Kent, ME19 8WW', value: 'American Express' },
{ icon: '', address: 'Walton House 56-58, Richmond Hill, Bournemouth, BH2 6EX', value: 'Amigo Loans' },
{ icon: '', address: 'Customer Services, PO Box 10642, Harlow, Essex, CM20 9HA', value: 'Anglian Water Services Ltd' },
{ icon: '', address: 'Apex House, 27 Arden Street, Stratford-Upon-Avon, Warwickshire, CV37 6NW', value: 'Apex Credit Management' },
{ icon: '', address: 'First Data, Janus House, JPT/G, Endeavour Drive, Basildon, Essex, SS14 3WF', value: 'Aqua' },
{ icon: '', address: 'Kent House, Churchfield Road, Walton on Thames, Surrey, KT12 2TU', value: 'ARC (Europe) Ltd' },
{ icon: '', address: 'Home Retail Group (Admin Dept.), Unit 1-12 Futura Park, Aspinall Way, Horwich, Bolton, Lancashire, BL6 6PG', value: 'Argos' },
{ icon: '', address: 'Barclaycard, Specialist Support Unit, PO Box 5402, Northampton, Northamptonshire, NN4 1ZR', value: 'Argos Mastercard' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Arrears Collection Department (Shop Direct)' },
{ icon: '', address: '3rd Floor, 15 Old Bailey, London, EC4M 7EF', value: 'Arrow Global LLC' },
{ icon: '', address: '2-3 Triton Square, Regents Place, London, NW1 3AN', value: 'ASDA Card Services' },
{ icon: '', address: 'Civic Centre, Tannery Lane, Ashford, Kent, TN23 1PL', value: 'Ashford Borough Council' },
{ icon: '', address: 'PO Box 30095, London, SE1 7WU', value: 'Asset Link Capital (No. 1) Limited' },
{ icon: '', address: '3 Earlstrees Road, Earlstrees Industrial Estate, Corby, Northamptonshire, NN17 4AZ', value: 'Avon' },
{ icon: '', address: 'Credit Recovery, 4th Floor, Bow Bells House, 1 Bread Street, London, EC4M 9BE', value: 'Bank Of Ireland GB Ltd' },
{ icon: '', address: 'Credit Recovery, 4th Floor, Bow Bells House, 1 Bread Street, London, EC4M 9BE', value: 'Bank Of Ireland GB Ltd' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Bank of Scotland' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Bank of Scotland' },
{ icon: '', address: 'Specialist Support Unit, Collections Floor 6, PO Box 5402, Northampton, NN4 1ZR', value: 'Barclaycard' },
{ icon: '', address: 'Open Sort & Distribute, Astron House, 51 Saffron Road, Leicester, LE87 2BB', value: 'Barclays Bank Plc' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Barclays Partner Finance' },
{ icon: '', address: '24 George Square, Glasgow, Lanarkshire, G2 1EG', value: 'BCW Group Plc' },
{ icon: '', address: 'A015, Town Hall, St Pauls Square, Bedford, MK40 1SJ', value: 'Bedford Borough Council' },
{ icon: '', address: 'Insolvency Team, PO Box 5206, Coventry, West Midlands, CV3 9FA', value: 'Beneficial Finance' },
{ icon: '', address: 'Barclaycard, Specialist Support Unit, PO Box 5402, Northampton, Northamptonshire, NN4 1ZR', value: 'BHS' },
{ icon: '', address: 'Rossendale Borough Council, Admail ADM 4005, Rossendale, BB4 4ZR.', value: 'Blackburn with Darwen Council' },
{ icon: '', address: 'Collections, St. William House, Tresillian Terrace, Cardiff, CF10 5BH', value: 'Blackhorse' },
{ icon: '', address: 'Revenue Section, Town Hall, Blackpool, Lancashire, FY1 1NF', value: 'Blackpool Council' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Blair Oliver & Scott Ltd' },
{ icon: '', address: 'Le Mans Crescent, Bolton, Lancashire, BL1 1SA', value: 'Bolton Borough Council' },
{ icon: '', address: 'George Jessel House, Francis Avenue, Bournemouth, Dorset, BH11 8NX', value: 'Bournemouth & West Hampshire Water Plc' },
{ icon: '', address: 'Court Team,Council Tax Dept., Britannia House, Hall Ings, Bradford, BD1 1HX', value: 'Bradford District Council' },
{ icon: '', address: 'Causeway House, Braintree, Essex, CM7 9HB', value: 'Braintree District Council' },
{ icon: '', address: 'Anglia Revenues Partnership, Breckland House, St Nicholas Street, Thetford, Norfolk, IP24 1BT', value: 'Breckland District Council' },
{ icon: '', address: 'The Council House, College Green, Avon, BS1 5TR', value: 'Bristol City Council' },
{ icon: '', address: '1 Clevedon Walk, Nailsea, Bristol, Avon, BS48 1WA', value: 'Bristol Water' },
{ icon: '', address: 'Bristow & Sutor, Bartleet Road, Washfrod, Redditch, B98 0FL', value: 'Bristow & Sutor' },
{ icon: '', address: 'EDC Bankruptcy Team (EXL), PO Box 59, Hyde, Cheshire, SK14 3QU', value: 'British Gas Trading Ltd' },
{ icon: '', address: 'DM Team, PP CPC3D, Charnwood Place, 1 South Albion Street, Leicester, Leicestershire, LE1 6JL', value: 'British Telecom plc' },
{ icon: '', address: 'Debt Relief Orders, Collections, Brunswick Point, Wade Lane, PO Box 764, Leeds, West Yorkshire, LS1 9JJ', value: 'Brunswick Collections Ltd' },
{ icon: '', address: 'De Havilland Drive, Brooklands Business Park, Weybridge, Surrey, KT13 0NT', value: 'Bryan Carter & Co Solicitors' },
{ icon: '', address: '24 George Square, Glasgow, Lanarkshire, G2 1EG', value: 'Buchanan Clark & Wells' },
{ icon: '', address: '3 Godwin Street, Bradford, West Yorkshire, BD1 2SA', value: 'C K Edrupt & Co' },
{ icon: '', address: 'Viewpoint, Basing View, Basingstoke, Hampshire, RG21 4RG', value: 'C.A.R.S' },
{ icon: '', address: '1 Kings Hill Avenue, Kings Hill, West Malling, Kent, ME19 4UA', value: 'Cabot Financial (UK) Ltd' },
{ icon: '', address: 'c/o KPMG, FAO Lynn Taylor, National Client Service Centre, One Snowhill, Snowhill, Queensway, Birmingham, B4 6GH', value: 'Cahoot' },
{ icon: '', address: 'Town Hall, Halifax, West Yorkshire, HX1 1UJ', value: 'Calderdale Borough Council' },
{ icon: '', address: '90 Fulbourn Road, Cambridge, Cambridgeshire, CB1 9NJ', value: 'Cambridge Water Plc' },
{ icon: '', address: 'Specialist Support Unit, Capital One Services, PO Box 5282, Nottingham, Nottinghamshire, NG2 3YH', value: 'Capital One Bank Europe Plc' },
{ icon: '', address: 'Specialist Support Unit, Capital One Services, PO Box 5282, Nottingham, Nottinghamshire, NG2 3YH', value: 'Capital One Bank Europe Plc' },
{ icon: '', address: '27 Rye Close, Hampshire, GU51 2QQ', value: 'CapQuest Debt Recovery Ltd' },
{ icon: '', address: 'County Hall, Atlantic Warf, Cardiff, South Glamorgan, CF10 4UW', value: 'Cardiff City Council' },
{ icon: '', address: 'Collections Department, Lambourne House, Lambourne Crescent, Cardiff Business Park, Llanishen, Cardiff, CF14 5GL', value: 'Carlyle Finance Ltd' },
{ icon: '', address: '1 Portal Way, London, W3 6RS', value: 'Carphone Warehouse' },
{ icon: '', address: 'Suite 701, Lowry House, 17 Marble Street, Manchester, M23AW', value: 'Cash Choice UK ' },
{ icon: '', address: 'Innovation House, Aston Lane South, Preston Brook, Cheshire, WA7 3BW', value: 'Cash Converters' },
{ icon: '', address: '2 Reavell Place, Ipswich, IP2 0ET', value: 'Cash Genie' },
{ icon: '', address: '797 London Road, Thornton, Croydon, Surrey, CR7 6YY', value: 'CCS Collect' },
{ icon: '', address: '2nd Floor, 12 Calthorpe Road, Edgbaston, Birmingham, West Midlands, B15 1FD', value: 'Central Debt Recovery Unit (HSBC)' },
{ icon: '', address: '2nd Floor, Burgage Square, Merchant Gate, Wakefield, WF1 2TS', value: 'Chantry Collections' },
{ icon: '', address: 'Council Tax, Southfields, Loughborough, LE11 2TU', value: 'Charnwood Borough Council' },
{ icon: '', address: 'PO Box 39, Town Hall, Macclesfield, Cheshire, SK10 1HR', value: 'Cheshire East Council' },
{ icon: '', address: 'PO Box 187, ELLESMERE PORT, CH34 9DB', value: 'Cheshire West and Chester Council' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Choice' },
{ icon: '', address: '2nd floor, The Wharf, Neville Street, Leeds, LS1 4AZ', value: 'Churchill Insurance Co Ltd' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Citibank International Plc' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Citibank International Plc' },
{ icon: '', address: 'Pelham Street, Brighton, BN1 4FA', value: 'City College Brighton & Hove' },
{ icon: '', address: 'Lawrence House, Riverside Drive, Cleckheaton, West Yorkshire, BD19 4DH', value: 'CL Finance' },
{ icon: '', address: 'PO Box 336, Lamport, Northampton, Northamptionshire, NN6 9WZ', value: 'Clarity Credit Management Solutions' },
{ icon: '', address: 'CLC Finance, Unit 4, Meadow court, Millshaw, Leeds, LS11 8LZ', value: 'CLC Finance' },
{ icon: '', address: 'Debt Relief Orders, Collections, Brunswick Point, Wqade Lane, PO Box 764, Leeds, West Yorkshire, LS1 9JJ', value: 'Clydesdale Bank Plc' },
{ icon: '', address: 'Debt Relief Orders, Collections, Brunswick Point, Wqade Lane, PO Box 764, Leeds, West Yorkshire, LS1 9JJ', value: 'Clydesdale Bank Plc' },
{ icon: '', address: 'Income Management, Rowan House, Sheepen Road, Colchester, CO3 3WG', value: 'Colchester Borough Council' },
{ icon: '', address: 'Bellway House, 7 Worcester Road, Bromsgrove, B61 7DL', value: 'Commercial Credit Services' },
{ icon: '', address: 'Compass House, Waterside, Hanbury Road, Bromsgrove, B60 4FD', value: 'Controlaccount' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Co-operative Bank Plc' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Co-operative Bank Plc' },
{ icon: '', address: 'The Copeland Centre, Catherine Street, Whitehaven, Cumbria, CA28 7SJ', value: 'Copeland Borough Council (Housing Benefit Overpayments)' },
{ icon: '', address: 'PO Box 676, Threemilestone Truro, TR4 9LD', value: 'Cornwall Council' },
{ icon: '', address: 'DCA Team, Chadwick House, Blenheim Court, Solihull, West Midlands, B91 2AA', value: 'Creation Finance Service' },
{ icon: '', address: 'PO Box 650, Weybridge, Surrey, KT13 3EN', value: 'Credit Account Management Ltd' },
{ icon: '', address: 'The Old Court House, 70-72 High Street, Aylesbury, Buckinghamshire, HP22 4JS', value: 'Credit Security Ltd' },
{ icon: '', address: 'Capella Court, 725 Brighton Road, Purley, Surrey, CR8 2PG', value: 'Credit Solutions Ltd' },
{ icon: '', address: '96 Wharf Street, Dukinfield, Cheshire, SK16 4RA', value: 'Cygnet Financial Service Ltd' },
{ icon: '', address: 'Revenues Division, Civic Centre, Marlowes, Hemel Hempstead, HP1 1HH', value: 'Dacorum Borough Council' },
{ icon: '', address: 'Early Charge Off Department, Capital House, 1 Bruntcliffe Way, Morley, West Yorkshire, LS27 0JG', value: 'Debenhams' },
{ icon: '', address: 'Department 5, PO Box 13, Acctington, Lancashire, BB5 5GR', value: 'Debt Collection & Security' },
{ icon: '', address: 'The Heriot Building, Dodds Close, Rotherham, S60 1BX', value: 'Debt Managers Ltd' },
{ icon: '', address: 'Packsaddle, Wrexham Road, Rhosyllen, Wrexham, LL14 4EH', value: 'Dee Valley Water' },
{ icon: '', address: 'Buckingham Road, Brackley, Northamptonshire, NN13 7DN', value: 'Direct Legal & Collections' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Direct Line' },
{ icon: '', address: '2nd floor, The Wharf, Neville Street, Leeds, LS1 4AZ', value: 'Direct Line Insurance Plc' },
{ icon: '', address: 'Droyds Debt & Collection Services, Bradford, West Yorkshire, BD1 1DA', value: 'Droyds Debt & Collection Services' },
{ icon: '', address: 'Revenue Services, PO Box 3, Council House, Priory Street, Dudley, West Midlands, DY1 1HG', value: 'Dudley Metropolitan Borough Council - Council Tax' },
{ icon: '', address: 'Debt Management (SF), PO Box 171, Mitcheldean, Gloucestershire, GL17 0XH', value: 'DWP (Benefit Overpayments)' },
{ icon: '', address: 'Debt Management (SF), PO Box 171, Mitcheldean, Gloucestershire, GL17 0XH', value: 'DWP (Social Fund) Excluded Debt' },
{ icon: '', address: 'Veolia Water Outsourcing Ltd, Dwr Cymru Customer Services, Linea, Fortran Road, St. Mellons, Cardiff, CF3 0LT', value: 'Dwr Cymru - Welsh Water Ltd' },
{ icon: '', address: 'Insolvency Department, Newland House, 49 Mount Street, NOTTINGHAM, NG1 6PG', value: 'E.ON UK Plc' },
{ icon: '', address: 'Anglia Revenues Partnership, Breckland House, St Nicholas Street, Thetford, Norfolk, IP24 1BT', value: 'East Cambridgeshire District Council' },
{ icon: '', address: 'Freepost RRYZ-BGYG-JCXR, EDF Energy, 334 Outland Road, Plymouth, PL3 5TU', value: 'EDF Energy Ltd' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Egg Banking Plc' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Egg Banking Plc' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Empire Stores' },
{ icon: '', address: '2 Birchwood Office Park, Crab Lane, Fearnhead, Warrington, Cheshire, WA2 0XS', value: 'EOS Solutions UK Plc' },
{ icon: '', address: '323 High Street, Epping, Essex, CM16 4BZ', value: 'Epping Forest District Council' },
{ icon: '', address: 'Equity House, Ettington Road, Wellesbourne, Warwick, Warwickshire, CV35 9GA', value: 'Equidebt' },
{ icon: '', address: 'Essex & Suffolk Water, Bankruptcy & Liquidation Team, P O Box 292, Durham, DH1 9TX', value: 'Essex & Suffolk Water Ltd' },
{ icon: '', address: 'Fairfax House, Merrion Street, Leeds, West Yorkshire, LS2 8HE', value: 'Eversheds Solicitors' },
{ icon: '', address: 'Council Tax Recovery, Room 1.7, Civic Centre, EX1 1JN', value: 'Exeter City Council' },
{ icon: '', address: 'Experto Credite Ltd, Inspired, Easthampstead Road, Bracknell, RG12 1NS', value: 'Experto Credite Ltd' },
{ icon: '', address: 'Debt Relief Orders, Collections, PO Box 764. Bruswick Point, Wade Lane, Leeds, LS11 9JJ', value: 'Fairhalsen Collections Ltd' },
{ icon: '', address: 'Griffin House, 40 Lever Street, Manchester, M60 6ES', value: 'Fashion World' },
{ icon: '', address: '5th Floor, Maitland House, Warrior Square, Southend-On-Sea, Essex, SS1 2JS', value: 'Fenton Cooper' },
{ icon: '', address: 'Repayment Services S/CRS/RST, 40 Wakefield Road, Leeds, LS98 1FD', value: 'First Direct' },
{ icon: '', address: 'Repayment Services S/CRS/RST, 40 Wakefield Road, Leeds, LS98 1FD', value: 'First Direct' },
{ icon: '', address: 'Emerald House, Meadowcroft Way, Leigh, WN7 3XZ', value: 'First Response Finance Limited' },
{ icon: '', address: 'Walton House 56-58, Richmond Hill, Bournemouth, BH2 6EX', value: 'FLM Quick' },
{ icon: '', address: 'The Cherry Garden, Cherry Garden Lane, Folkstone, Kent, CT19 4QB', value: 'Folkestone & Dover Water Services Ltd' },
{ icon: '', address: 'Anglia Revenues Partnership, Breckland House, St Nicholas Street, Thetford, Norfolk, IP24 1BT', value: 'Forest Heath District Council' },
{ icon: '', address: 'Forest of Dean District Council, Council Offices, High Street, Coleford, Glos, GL16 8HG', value: 'Forest of Dean District Council' },
{ icon: '', address: 'Persimmon House, De Havilland Drive, Brooklands Business Park, Weybridge, Surrey, KT13 0NT', value: 'Fredrickson International Ltd' },
{ icon: '', address: '1 Amberley Street, Sheffield, South Yorkshire, S9 2FS', value: 'Freemans Plc' },
{ icon: '', address: 'Revenues Dept, Town Hall, South Promenade, Lytham St Annes, FY8 1LW', value: 'Fylde Borough Council' },
{ icon: '', address: 'Auto Recoveries, Capital House, 1 Bruntcliffe Way, Leeds, LS27 0JG', value: 'GE Money Auto' },
{ icon: '', address: 'Early Charge Off Department, Capital House, 1 Bruntcliffe Way, Morley, West Yorkshire, LS27 0JG', value: 'GE Money Ltd' },
{ icon: '', address: 'Early Charge Off Department, Capital House, 1 Bruntcliffe Way, Morley, West Yorkshire, LS27 0JG', value: 'GE Money Ltd' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'General Credit Company (Shop Direct)' },
{ icon: '', address: 'Warwick House, Birmingham Road, Stratford-Upon-Avon, Warwickshire, CV37 0BP', value: 'Geoffrey Parker Bourne Solicitors' },
{ icon: '', address: '66/70 Coombe Road, New Malden, KT3 4QW', value: 'Global Debt Recovery' },
{ icon: '', address: 'Revenue Services, Herbert Warehouse, The Dock, Gloucester, GL1 2EQ', value: 'Gloucester City Council' },
{ icon: '', address: 'BCW Group (Gothia) Ltd, Groundfloor, Ridgeworth House, 5-9 Liverpool Gardens, Worthing, West Sussex, BN11 1RS', value: 'Gothia Ltd' },
{ icon: '', address: '1 Amberley Street, Sheffield, South Yorkshire, S9 2FS', value: 'Grattan Plc' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Great Universal Stores' },
{ icon: '', address: '1 Godwin Street, Bradford, BD1 2SU', value: 'Greenwood Personal Credit' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Halifax' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Halifax' },
{ icon: '', address: 'Enterprise House, 1 Apex View, Leeds, LS11 9BH', value: 'Hamptons Legal Services' },
{ icon: '', address: 'Insolvency Department, Gibson House, Huntingdon, Cambridgeshire, PE29 6WQ', value: 'Hartlepool Water' },
{ icon: '', address: 'Insolvency Team, PO Box 5206, Coventry, West Midlands, CV3 9FA', value: 'HFC Bank' },
{ icon: '', address: 'HBEU Collections, 1st Floor, 120 Edmund Street, Birmingham, B3 2QZ', value: 'HFC Bank' },
{ icon: '', address: 'c/o Turnbull Rutherford Solicitors, 165 The Broadway, London, SW19 1NE', value: 'HFO Services Ltd' },
{ icon: '', address: 'Buckingham Road, Brackley, NN13 7DN ', value: 'Hillesden Securities Limited' },
{ icon: '', address: 'Barclaycard, Specialist Support Unit, PO Box 5402, Northampton, Northamptonshire, NN4 1ZR', value: 'Hilton' },
{ icon: '', address: 'FAO John Lloyd, Debt Management & Banking, Regian House,James Street, Liverpool, Merseyside, L75 1AD', value: 'HM Revenue & Customs' },
{ icon: '', address: 'Home Retail Group (Admin Dept.), Unit 1-12 Futura Park, Aspinall Way, Horwich, Bolton, Lancashire, BL6 6PG', value: 'Homebase' },
{ icon: '', address: 'Axis Teo, Axis Park, Hurricane Way, Langley, SL3 8AG', value: 'Honda Finance Europe Plc' },
{ icon: '', address: 'Early Charge Off Department, Capital House, 1 Bruntcliffe Way, Leeds, LS27 0JG', value: 'House Of Fraser' },
{ icon: '', address: 'PO Box 110, Cleckheaton, West Yorkshire, BD19 4XT', value: 'Howard Cohen and Co' },
{ icon: '', address: 'Collections and Recoveries, 2nd Floor, 12 Calthorpe Road, Edgebaston, Birmingham, B15 1FD', value: 'HSBC' },
{ icon: '', address: 'Collections and Recoveries, 2nd Floor, 12 Calthorpe Road, Edgebaston, Birmingham, B15 1FD', value: 'HSBC' },
{ icon: '', address: 'Council Tax Section, First Floor, Treasury Building, Guildhall Road, Hull, HU1 2AB', value: 'Hull City Council' },
{ icon: '', address: 'PO Box 333, Glasgow, G2 9AG', value: 'Hutchison 3G UK Ltd' },
{ icon: '', address: 'Waterfront House, Waterfront Plaza, Station Street, Nottingham, NG2 3DQ', value: 'Ikano Financial Services Ltd' },
{ icon: '', address: 'Incommunities Income Team,  City House,  Cheapside,  Bradford  BD1 4HR', value: 'Incommunities' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Index Extra' },
{ icon: '', address: 'Credit Control, PO Box 17316, Edinburgh, EH12 1AY', value: 'Intelligent Finance' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Intelligent Finance' },
{ icon: '', address: 'PO Box 7183, Harlow, Essex, CM19 5WE', value: 'Intrum Justitia Ltd' },
{ icon: '', address: 'Legal & Trade House, 33-34 Winckley Square, Preston, PR1 3JJ', value: 'iQOR Recovery Services' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Janet Fraser' },
{ icon: '', address: 'Credit Operations, MEN Arena, 23 Hunts Bank, Manchester, M3 1AX', value: 'JD Williams & Co Ltd' },
{ icon: '', address: 'Debt Relief Orders, Collections, PO Box 764, Bruswick Point, Wade Lane, Leeds, LS11 9JJ', value: 'Jeremy Sutcliffe & Co' },
{ icon: '', address: 'HBEU Collections, 1st Floor, 120 Edmund Street, Birmingham, B3 2QZ', value: 'John Lewis Partnership Card' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'John Moores' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Kays' },
{ icon: '', address: '132 Broad Street, Parkgate, Rotherham, S62 6ES', value: 'KDS Finance' },
{ icon: '', address: 'Kettering Borough Council, Municipal Offices, Bowling Green Road, Kettering, Northants, NN15 7BR', value: 'Kettering Borough Council' },
{ icon: '', address: 'Civic Centre 1 High Street HUDDERSFIELD, HD1 2NF', value: 'Kirklees Council' },
{ icon: '', address: 'Empire Buildings, Horbury Road, Wakefieldm WF90 8AA', value: 'La Redoute' },
{ icon: '', address: 'Legal Services Town Hall, Dalton Square, Lancaster, LA1 1PJ', value: 'Lancaster City Council' },
{ icon: '', address: 'Civic Hall, Calverley Street, Leeds, LS1 1UR', value: 'Leeds City Council' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Legal Direct Recoveries (Shop Direct)' },
{ icon: '', address: 'Wellington House, 22-32 Wellington Street, LEICESTER, LE1 6HL', value: 'Leicester City Council ' },
{ icon: '', address: 'Lawrence House, Riverside Drive, Cleckheaton, West Yorkshire, BD19 4DH', value: 'Lewis Debt Recovery' },
{ icon: '', address: 'PO Box 30095, London, SE1 7WU', value: 'Link Financial' },
{ icon: '', address: 'PO Box 30095, London, SE1 7WU', value: 'Link Financial Outsourcing Limited' },
{ icon: '', address: 'Crusader House 2nd Floor, 145-157 St. John Street, London, EC1V 4PY ', value: 'Liquid Advance' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Littlewoods' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Littlewoods Debt Collection' },
{ icon: '', address: 'PO Box 834, Liverpool, L69 2UT', value: 'Liverpool Direct Ltd' },
{ icon: '', address: 'Insolvency Team, 2nd Floor, 3 City Park, The Droveway, Hove, BN3 7AU', value: 'Lloyds Bank Plc' },
{ icon: '', address: 'Insolvency Team, 2nd Floor, 3 City Park, The Droveway, Hove, BN3 7AY', value: 'Lloyds Bank Plc' },
{ icon: '', address: '49 Huntbach Street, Hanley, Stoke-On-Trent, ST1 2BS', value: 'Loans at Home 4U' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Lombard' },
{ icon: '', address: 'Collections, St Catherines Court, Herbert Road, Solihull, B91 3QE', value: 'Lombard Direct' },
{ icon: '', address: 'Churchgate House, 56 Oxford Road, Manchester M1 6EU', value: 'London Scottish Bank Ltd' },
{ icon: '', address: 'PO Box 164, Leeds, LS10 9EH', value: 'Lowell Group' },
{ icon: '', address: 'Town Hall, George Street, Luton, Bedfordshire, LU1 2BQ', value: 'Luton Borough Council' },
{ icon: '', address: 'Kings Meadow, Chester Business Park, Cheshire, CH99 9FB', value: 'M&S Money' },
{ icon: '', address: 'Kings Meadow, Chester Business Park, Cheshire, CH99 9FB', value: 'M&S Money' },
{ icon: '', address: 'Unit 1A, 58 Portland Street, Kilmarnock, Ayrshire, KA1 1JG', value: 'Mackenzie Hall Ltd' },
{ icon: '', address: 'Princes Road, Maldon, CM9 5DL', value: 'Maldon District Council' },
{ icon: '', address: 'Revenues & Benefits Unit,Manchester City Council,PO Box 147,M15 5TU', value: 'Manchester City Council' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Marbles' },
{ icon: '', address: 'First Data, Janus House, JPT/G, Endeavour Drive, Basildon, Essex, SS14 3WF', value: 'Marbles' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Marshall Ward' },
{ icon: '', address: 'Insolvency, PO Box 6302, Bournemouth, Dorset, BH1 9DY', value: 'Max Recovery Ltd' },
{ icon: '', address: 'MBNA Customer Assistance PO Box 30, Chester Business Park, Wrexham Road, Chester, Cheshire, CH4 9FD', value: 'MBNA Europe Bank Ltd' },
{ icon: '', address: 'PO Box 55, Kirkby, Liverpool, Merseyside, L32 8XX', value: 'Mercers Debt Collection' },
{ icon: '', address: 'Unit 2B, 58 Portland Street, Kilmarnock, Ayrshire, KA1 1JG', value: 'Meritforce' },
{ icon: '', address: 'Collections & Recoveries, 2nd Floor, 12 Calthorpe Road, Edgbaston, Birmingham, B15 1FD', value: 'Metropolital Collection Services Ltd (HSBC)' },
{ icon: '', address: 'Moorcroft House, 2 Spring Gardens, Stockport, Greater Manchester, SK1 4AN', value: 'Midas Legal Services' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Mint' },
{ icon: '', address: 'Birmingham Collections Centre, CVC Team, PO Box 5433, Birmingham, B1 2WZ', value: 'Mint Loans' },
{ icon: '', address: 'Fleming House, Seebeck Place, Knowlhill, Milton Keynes, MK5 8FR', value: 'MKDP LLP' },
{ icon: '', address: 'PO Box 6476, Northampton, Northamptonshire, NN4 1ZN', value: 'Monument Credit Card' },
{ icon: '', address: 'PO Box 17, 2 Spring Gardens, Stockport, Greater Manchester, SK1 4AJ', value: 'Moorcroft Debt Recovery' },
{ icon: '', address: 'Unit 2, Ball Mill Top, Main Road, Hallow, Worcester, Worcestershire, WR2 6LS', value: 'Morses Club' },
{ icon: '', address: '39 Bedford Street South, Leicester, Leicestershire, LE1 3JN', value: 'Mutual Clothing & Supply' },
{ icon: '', address: 'Lending Control (Insolvency), Kings Park Road, Moulton Park Industrial Estate, Northampton, Northamptonshire, NN3 6NW', value: 'Nationwide Building Society' },
{ icon: '', address: 'Lending Control (Insolvency), Kings Park Road, Moulton Park Industrial Estate, Northampton, Northamptonshire, NN3 6NW', value: 'Nationwide Building Society' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Nationwide Debt Recovery (Shop Direct)' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Natwest Plc' },
{ icon: '', address: 'Credit Management Services, PO Box 16337, 7 Brindley Place, Birmingham, B2 2YH', value: 'Natwest Plc' },
{ icon: '', address: '80 High Street, Sidcup, Kent, DA14 6DS', value: 'Nelson Guest' },
{ icon: '', address: 'Revenues and Benefits, Newcastle City Council, Civic Centre, Barrass Bridge, Newcastle upon Tyne, NE1 8QH', value: 'Newcastle City Council' },
{ icon: '', address: 'Revenues & Benefits, Newcastle City Council, Civic Centre, Room 201, Newcastle upon Tyne, NE1 8QH', value: 'Newcastle City Council (Housing Benefit Debt Recovery)' },
{ icon: '', address: 'Housing Department. Civic Centre, Newcastle Upon tyne, Tyne & Wear, NE1 8PR', value: 'Newcastle City Council (Housing Dept.)' },
{ icon: '', address: 'PO Box 4000, Leeds, LS2 8RZ', value: 'Next ' },
{ icon: '', address: 'Desford Road, Enderby, Leicester, LE19 4AT', value: 'Next Retail and Next Directory' },
{ icon: '', address: 'North Kesteven District Council, Revenues and Benefits Shared Service, PO Box 1257, Lincoln, LN5 5PQ', value: 'North Kesteven District Council' },
{ icon: '', address: 'Finance & Resources, Revenues & Benefits, North Somerset Council, PO Box 76, Town Hall, Weston-super-Mare, BS23 1YY', value: 'North Somerset Council' },
{ icon: '', address: 'North Tyneside Council, Recovery & Enforcement, Quadrant, PO Box 694, North Shields, NE27 9AF', value: 'North Tyneside Council (Recovery and Enforcement)' },
{ icon: '', address: 'Insolvency Department, 3 Graying Court, Doxford International Business Park, Sunderland, Tyne & Wear, SR3 3XG', value: 'Northern Rock Plc' },
{ icon: '', address: 'Selectapost 19, Rotherhan, South Yorkshire, S97 3DG', value: 'Northern Rock Plc (Personal Loans)' },
{ icon: '', address: 'Recovery Team, Revenues Section, Northumberland County Council, Wansbeck Square, Ashington, Northumberland, NE63 9XL', value: 'Northumberland County Council' },
{ icon: '', address: 'Northumbrian Water, Bankruptcy & Liquidation Team, P O Box 300, Durham, DH1 9WQ', value: 'Northumbrian Water Ltd' },
{ icon: '', address: 'Insolvency Department, PO Box 177, Cygnet Way, Houghton Le Spring, DH4 9AQ', value: 'Npower' },
{ icon: '', address: 'Insolvency Department, 3 Graying Court, Doxford International Business Park, Sunderland, Tyne & Wear, SR3 3XG', value: 'N-Ram' },
{ icon: '', address: 'SME Business Collections, Suite X-Y, Arlington Business Centre, Millshaw Park Lane, Leeds, LS11 0NE', value: 'O2 UK Ltd' },
{ icon: '', address: 'Civic Centre, PO Box 4, Debt Recovery, West Street, Oldham, OL1 1UH', value: 'Oldham Council' },
{ icon: '', address: 'Orange Insolvency Department, Senhouse Road, Darlington, DL1 4YB', value: 'Orange' },
{ icon: '', address: '3rd Floor, Westmead House, Farnborough, GU14 7LP', value: 'Osiris World Limited' },
{ icon: '', address: 'Griffin House, 40 Lever Street, Manchester, M60 6ES', value: 'Oxendales' },
{ icon: '', address: 'Oxford City Homes Rent Team, First Floor, 109-113 St Aldates, Oxford, OX1 1DS', value: 'Oxford City Council' },
{ icon: '', address: '5th Floor, Maitland House, Warrior Square, Southend-On-Sea, Essex, SS1 2JS', value: 'Pace Forward' },
{ icon: '', address: 'Pastdue Credit Solutions Ltd, Unit 1, Blair Court, Clydebank Business Park, Glasgow, G81 2LA', value: 'Pastdue Credit Solutions' },
{ icon: '', address: 'Collections and Recoveries, 2nd Floor, 12 Calthorpe Road, Edgebaston, Birmingham, B15 1FD', value: 'Payment Services Bureau (HSBC)' },
{ icon: '', address: '76 King Street, MANCHESTER, M2 4NH', value: 'Peachy Loans (Cash on the Go)' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Peter Craig' },
{ icon: '', address: 'PO Box 152, Darlington, Durham, DL3 9WT', value: 'Philips Collection Services Ltd' },
{ icon: '', address: '5th Floor, Maitland House, Warrior Square, Southend-On-Sea, Essex, SS1 2GX', value: 'Phoenix Recoveries (UK) Ltd SARL (Tessera)' },
{ icon: '', address: 'Plymouth City Council, Floor 5, Civic Centre, Armada Way, Plymouth, PL1 2AA', value: 'Plymouth City Council' },
{ icon: '', address: 'PO Box 8, West Street, Havant, Hampshire, PO9 1LG', value: 'Portsmouth Water Ltd' },
{ icon: '', address: 'PO Box 444, Bromley, BR1 1ZB', value: 'PRA Group (UK) Limited ' },
{ icon: '', address: 'Preston City Council, Legal Services, Lancaster Road, Preston, PR1 2RL', value: 'Preston City Council' },
{ icon: '', address: '1 Godwin Street, Bradford, BD1 2SU', value: 'Provident Financial Services Ltd' },
{ icon: '', address: '1 Godwin Street, Bradford, BD1 2SU', value: 'Provident Personal Credit' },
{ icon: '', address: '125 Chester Road, Sunderland, SR4 7HG', value: 'Ramsdens Financial Ltd' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'RBS Plc' },
{ icon: '', address: 'Credit Management Services, PO Box 16337, 7 Brindley Place, Birmingham, B2 2YH', value: 'RBS Plc' },
{ icon: '', address: '1 Godwin Street, Bradford, BD1 2SU', value: 'Real Personal Credit' },
{ icon: '', address: 'Enterprise House, 1 Apex View, Leeds, LS11 9BH', value: 'Red Debt Collection Services' },
{ icon: '', address: 'International House, Kingsfield Court, Chester, Cheshire, CH4 9RF', value: 'Red2Black Collections Ltd' },
{ icon: '', address: 'Customer Service Department, Manchester, Lancashire, M99 2BS', value: 'Reliable Collections Ltd' },
{ icon: '', address: 'Capital Bank Leasing 9 Ltd, 7th Floor Oakland House, Talbot Road, Manchester, M16 0PQ', value: 'RENTSMART' },
{ icon: '', address: 'Carolina Way, Quays Reach, Salford, Greater Manchester, M50 2ZY', value: 'Robinson Way & Co Ltd' },
{ icon: '', address: 'Tessera Portfolio Management, 5th Floor, Maitland House, Southend-On-Sea, SS1 2JS', value: 'Rockwell Debt Collection Agency' },
{ icon: '', address: 'Wavell House, Rossendale, Lancashire, BB4 4NB', value: 'Rossendales Collections Limited' },
{ icon: '', address: 'Roxburghe House, Lavender Park Road, West Bayfleet, Surrey, KT14 6NA', value: 'Roxburghe (UK) Ltd' },
{ icon: '', address: 'The Woolwich Centre, 35 Wellington Street, LONDON, SE18 6HQ', value: 'Royal Borough of Greenwich' },
{ icon: '', address: '49 Huntbach Street, Hanley, Stoke-On-Trent, ST1 2BS', value: 'S & U Plc' },
{ icon: '', address: 'Suite One, 2nd Floor, Bellway House, 7 Worcester Road, Bromsgrove, Worcestershire, B61 7DL', value: 'S C Gray Solicitors Ltd' },
{ icon: '', address: 'PO Box 1173, Woking, Surrey, GU22 2BS', value: 'S.R.J Debt Recoveries' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Sainsburys Bank plc' },
{ icon: '', address: 'Personal Insolvencies, Dundas House, PO Box 66, Rosyth, Fife, KY11 2YG', value: 'Sainsburys Bank plc' },
{ icon: '', address: 'Insolvency Team, Santander House, 201 Grafton Gate East, Milton Keynes, Buckinghamshire, MK9 1AN', value: 'Santander' },
{ icon: '', address: 'Recoveries Department, Capital House, 1 Bruntcliffe Way, Morley, Leeds, LS27 0JG', value: 'Santander Cards' },
{ icon: '', address: 'First Data, Janus House, JPT/G, Endeavour Drive, Basildon, Essex, SS14 3WF', value: 'SAV Credit Ltd' },
{ icon: '', address: 'Town Hall, St Nicholas Street, Scarborough, North Yorkshire, YO11 2HG', value: 'Scarborough Council' },
{ icon: '', address: 'Spectrum Building, 55 Blythswood Street, Glasgow, G2 7AT', value: 'ScotCall Debt Collecting Services' },
{ icon: '', address: 'Bankruptcy & Liquidation Department, 2nd Floor Grampian House, 200 Dunkeld Road, Perth, Perthshire, PH1 3GH', value: 'Scottish & Southern Energy' },
{ icon: '', address: 'Technical Services, Cathcart House, Spean Street, Glasgow, Lanarkshire, G44 4GE', value: 'Scottish Power Ltd' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Scottish Power Mastercard' },
{ icon: '', address: '49 Huntbach Street, Hanley, Stoke-On-Trent, ST1 2BS', value: 'SD Taylor' },
{ icon: '', address: 'Department SO, PO Box 499, 1-5 Queens Road Quadrant, Brighton, BN1 3XJ', value: 'Sechiari, Clarke & Mitchell' },
{ icon: '', address: 'St. Peters House, Balliol Road, Bootle. L20 3AB', value: 'Sefton MBC' },
{ icon: '', address: 'The Insolvency Department, Sherbourne House, St Martins Road, Coventry, CV3 6SD', value: 'Severn Trent Water Ltd' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Shop Direct Financial Services Ltd' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Shop Direct Home Shopping Ltd' },
{ icon: '', address: 'Central Collections Department, Kingston House, Centre 27 Business Park, Birstall, WF17 9TD', value: 'Shopacheck Financial Services Ltd' },
{ icon: '', address: '155 Bromford Lane, Erdington, Birmingham, B24 8DJ', value: 'Short Term Finance Ltd' },
{ icon: '', address: 'Griffin House, 40 Lever Street, Manchester, M60 6ES', value: 'Simply Be' },
{ icon: '', address: 'Barclaycard, Specialist Support Unit, PO Box 5402, Northampton, Northamptonshire, NN4 1ZR', value: 'Sky Card' },
{ icon: '', address: '7 Centaurs Business Centre, Grant Way, Isleworth, Middlesex, TW7 5QD', value: 'Sky Subscribers Services Ltd' },
{ icon: '', address: 'c/o Grant Thornton UK LLP, Hartwell House, 55-61 Victoria Street, Bristol, Avon, BS1 6FT', value: 'Smile' },
{ icon: '', address: 'South Cambridgeshire Hall, 6010 Cambourne Business Park, Cambourne, Cambridge, CB23 6EA', value: 'South Cambridgeshire District Council' },
{ icon: '', address: 'Rocfort Road, Snodland, Kent, ME6 5AH', value: 'South East Water' },
{ icon: '', address: 'Customer and Transactional Services, Council Offices, Castle Street, Thornbury, South Gloucestershire, BS35 1HF', value: 'South Gloucestershire Council' },
{ icon: '', address: 'The Council Office, St Peters Hill, Grantham, Lincs, NG31 6PZ', value: 'South Kesteven District Council' },
{ icon: '', address: 'Green Lane, Walsall, West Midlands, WS2 7PD', value: 'South Staffordshire Water plc' },
{ icon: '', address: 'Insolvency Team, PO Box 4762, Worthing, BN11 9NT', value: 'South West Water Ltd' },
{ icon: '', address: 'Tryst House, Glenbervie Business Park, Larbert, Stirling, FK5 4RB', value: 'Southern Counties Fuels' },
{ icon: '', address: 'Bankruptcy & Liquidation Department, Tom Johnson House, 3 Hunt Hill, Cumbernauld, Glasgow G68 9LF', value: 'Southern Electric' },
{ icon: '', address: 'Southern House, Yeoman Road, Worthing, West Sussex, BN13 3NX', value: 'Southern Water Services Ltd' },
{ icon: '', address: ' PO Box 728, Borehamwood, Herts, WD6 9GU', value: 'Speed-e-loans.com' },
{ icon: '', address: 'Anglia Revenues Partnership, Breckland House, St Nicholas Street, Thetford, Norfolk, IP24 1BT', value: 'St Edmundsbury Borough Council' },
{ icon: '', address: 'Civic Centre, Riverside, Stafford, ST16 3AQ', value: 'Stafford Borough Council' },
{ icon: '', address: 'PO Box 410, Billingham, Durham, TS23 2YD', value: 'Stockton on Tees Borough Council' },
{ icon: '', address: 'Council Offices, Ebley Mill, Stroud, Glos GL5 4UB', value: 'Stroud District Council' },
{ icon: '', address: '100 Bothwell Street, Glasgow, Lanarkshire, G2 7JD', value: 'Student Loans Company Ltd' },
{ icon: '', address: 'Express House, Clayton Business Park, Petre Road, Accrington, Lancashire, BB5 5JY', value: 'Studio Cards' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Style' },
{ icon: '', address: 'Melton Hill, Woodbridge, Suffolk, IP12 1AU', value: 'Suffolk Coastal District Council' },
{ icon: '', address: 'London Road, Redhill, Surrey, RH1 1LJ', value: 'Sutton & East Surrey Water Plc' },
{ icon: '', address: 'Bankruptcy & Liquidation Department, Tom Johnson House, 3 Hunt Hill, Cumbernauld, Glasgow G68 9LF ', value: 'Swalec' },
{ icon: '', address: 'Level 5 Plaza Commercial Centre,Bisazzi Street,Sliema,Malta,SLM 1640', value: 'Swift Sterling ' },
{ icon: '', address: '6-8 Great Marlborough Street, Manchester, M1 5SW', value: 'Swinton Group Ltd' },
{ icon: '', address: 'Chadwick House, Blenheim Court, Solihull, West Midlands, B91 2AA', value: 'Sygma Bank UK' },
{ icon: '', address: 'Benefits and Revenues, 88-90 Pier Avenue, CLACTON-ON-SEA, CO15 1TN', value: 'Tendring District Council' },
{ icon: '', address: 'Veolia Water East Ltd, Mill Hill, Mistley, Manningtree, Essex, CO11 2AZ', value: 'Tendring Hundred Water Services Ltd' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Tesco Personal Finance Plc' },
{ icon: '', address: 'Credit Management Services, PO Box 16337, 7 Brindley Place, Birmingham, B2 2YH', value: 'Tesco Personal Finance Plc' },
{ icon: '', address: '5th Floor, Maitland House, Warrior Square, Southend-On-Sea, Essex, SS1 2JS', value: 'Tessera Portfolio Management' },
{ icon: '', address: 'PO Box 286, Swindon, Wiltshire, SN38 2RA', value: 'Thames Water Utilities Ltd' },
{ icon: '', address: 'Ratho Park, Ratho Station, NEWBRIDGE, EH28 8QQ', value: 'The Cheque Centre' },
{ icon: '', address: 'Castlebridge Office Village, Kirtley Drive, Nottingham, NG7 1LD', value: 'The Money Shop' },
{ icon: '', address: 'PO Box 10081, Nottingham, NG2 9LX', value: 'The New Look Card' },
{ icon: '', address: 'Doxford Contact Centre, 6 Camberwell Way, Doxford Technology Park, Doxford, Sunderland, Tyne & Wear, SR3 3XN', value: 'T-Mobile (UK) Ltd' },
{ icon: '', address: 'Gibson Building, Gibson Drive, Kings Hill, West Malling, Kent, ME19 4LZ', value: 'Tonbridge & Malling Borough Council (Overpayments)' },
{ icon: '', address: 'A1 Pine Grange, Bath Road, Bournemouth, BH1 2PF', value: 'Tower Capital Limited' },
{ icon: '', address: '126-150 Washway Road, Sale, Manchester, M33 6AG', value: 'Trafford Housing Trust' },
{ icon: '', address: 'PO Box 183, Telford, Shropshire, TF2 2BU', value: 'Triton Credit Services' },
{ icon: '', address: 'The Clock Tower, Office No. 5, Chineham, Basingstoke, Hampshire, RG24 8BQ', value: 'Triumph Asset Service Ltd' },
{ icon: '', address: 'Collections Department, PO Box 2231, Gloucester, GL3 9EE', value: 'TSB Bank ' },
{ icon: '', address: 'PO Box 361, Ashford, TW15 9DZ', value: 'Txtloan' },
{ icon: '', address: 'c/o RSM Tenon, FAO Robert Beat, Salisbury House, 31 Finsbury Circus, London, EC2M 5SQ', value: 'Ulster Bank Ltd' },
{ icon: '', address: 'Ulster Bank  , Collections & Recoveries, Danesfort, Stranmillis Road, BELFAST, BT9 5UB', value: 'Ulster Bank Ltd' },
{ icon: '', address: 'Lingley Green Avenue, Lingley Mere Business Park, Great Sankey, Warrington, Lancashire, WA5 3LP', value: 'United Utilities plc' },
{ icon: '', address: 'Fifty Pembroke Court, Pembroke, Chatham Maritime, Catham, Kent, ME4 4EL', value: 'Vanquis Bank Ltd' },
{ icon: '', address: 'Mill Hill, Manningtree, Essex, CO11 2AZ', value: 'Veolia Water East Ltd' },
{ icon: '', address: 'The Cherry Garden, Cherry Garden Lane, Folkestone, Kent, CT19 4QB', value: 'Veolia Water Southeast Ltd' },
{ icon: '', address: 'Shop Direct Group, Sandringham House, Sandringham Avenue, Chelmsford, Essex, CM92 1LN', value: 'Very' },
{ icon: '', address: 'PO Box 800, Leeds, LS99 2AE', value: 'Viking Collection Services Ltd' },
{ icon: '', address: 'MBNA Customer Assistance PO Box 30, Chester Business Park, Wrexham Road, Chester, Cheshire, CH4 9FD', value: 'Virgin Credit Card' },
{ icon: '', address: 'Matrix Court, Siemens Way, Swansea Enterprise Park, Swansea, SA7 9BB', value: 'Virgin Media and Virgin Mobile' },
{ icon: '', address: 'Royal Avenue, Widnes, Cheshire, WA88 1AT', value: 'Virgin Money' },
{ icon: '', address: 'Pembroke House, Aynho Road, Adderbury, Banbury, Oxfordshire, OX17 3NS', value: 'Vodafone' },
{ icon: '', address: 'PO Box 10397, NOTTINGHAM, NG1 9JJ', value: 'Wage Day Advance' },
{ icon: '', address: 'Civic Centre, Ferrybridge Road, Castleford, WF10 4JH', value: 'Wakefield Metropolitan District Council' },
{ icon: '', address: 'PO Box 96, Lowestoft, Suffolk, NR32 1HW', value: 'Waveney District Council' },
{ icon: '', address: 'Mere Way, Ruddington Fields Business Park, Nottingham, NG11 6NZ', value: 'Welcome Finance Ltd' },
{ icon: '', address: 'PO Box 137, Hull, Yorkshire, HU2 8HF', value: 'Wescot Credit Services Ltd' },
{ icon: '', address: '1 Clevedon Walk, Nailsea, Bristol, Avon, BS48 1WA', value: 'Wessex Water Services Ltd' },
{ icon: '', address: 'Accounts Receivable and HB Overpayments Manager, Wirral Council, Municipal Building, Cleveland Street, Birkenhead, Wirral, CH41 6BU', value: 'Wirral Council (Housing Benefit Overpayment)' },
{ icon: '', address: 'Legal Services, Civic Centre, St. Peters Square, Wolverhampton, WV1 1RL', value: 'Wolverhampton City Council' },
{ icon: '', address: 'Benefits Overpayments Team, PO Box 3300, Wolverhampton, WV1 1ZT', value: 'Wolverhampton City Council- Housing Benefit' },
{ icon: '', address: 'PO Box 250, Wolverhamption, WV2 1AX', value: 'Wolverhampton City Council- Local Taxes Division' },
{ icon: '', address: 'Rents Management, Unit Hickman Avenue, wolverhampton, WV1 2BY', value: 'Wolverhampton Homes' },
{ icon: '', address: 'Wonga.com. Hardship Team, Sheffield, S95 1AR', value: 'Wonga' },
{ icon: '', address: 'Legal Notice Unit, PO Box 4313, Manchester, M61 0AR', value: 'Woolwich' },
{ icon: '', address: 'County Hall, Spetchley Road, Worcestershire, WR5 2NP', value: 'Worcestershire County Council' },
{ icon: '', address: 'Debt Relief Orders, Collections, PO Box 764. Bruswick Point, Wade Lane, Leeds, LS11 9JJ', value: 'Yorkshire Bank' },
{ icon: '', address: 'Debt Relief Orders, Collections, PO Box 764. Bruswick Point, Wade Lane, Leeds, LS11 9JJ', value: 'Yorkshire Bank' },
{ icon: '', address: 'Brook House, 4 Gladstone Road, Scarborough, YO12 7BH', value: 'Yorkshire Coast Homes' },
{ icon: '', address: 'Recovery Department, PO Box 52, Bradford, BD3 7YD', value: 'Yorkshire Water Services Ltd' },
{ icon: '', address: 'YHN House, Benton Park Road, Newcastle Upon Tyne, Tyne and Wear, NE7 7LX', value: 'Your Homes Newcastle' }
];
 
    
    // constructs the suggestion engine
var creditors = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: creditors
});
 
// kicks off the loading/processing of `local` and `prefetch`
creditors.initialize();

$("#pnl-creditor").hide();
$("#pnl-add").hide();
$("#row-total").hide();
$("#row-0").hide();

$("#row-1").hide();
$("#row-2").hide();
$("#row-3").hide();
$("#row-4").hide();
$("#row-5").hide();
$("#row-6").hide();
$("#row-7").hide();
$("#row-8").hide();
$("#row-9").hide();
 
 var creditortypeahead = $('#creditors.typeahead');
	creditortypeahead.typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'creditors',
	  displayKey: 'value',
	  // `ttAdapter` wraps the suggestion engine in an adapter that
	  // is compatible with the typeahead jQuery plugin
	  source: creditors.ttAdapter(),
	  templates: {
	        suggestion: function (stock) {
	            return '<div class="row"><div class="col-sm-5"><i class="glyphicon ' + stock.icon  + '"></i>' + stock.value + '</div>' + '<div class="col-sm-7 choose-address">' + stock.address + '</div></div>';
	        }
	    }
	});
	
var creditorSelectedHandler = function (eventObject, suggestionObject, suggestionDataset) {
    $("#pnl-name").text(suggestionObject.value);
    $("#pnl-address").text(suggestionObject.address);
    $("#pnl-creditor").show();
};

	creditortypeahead.on('typeahead:selected', creditorSelectedHandler );

$("#creditors").on("change", function(){
	if (creditortypeahead.typeahead('val') == ""){
	    $("#pnl-name").text("");
    	$("#pnl-address").text("");
    	$("#pnl-creditor").hide();
	}
});



$("#btn-clear").on("click", function(){
	creditortypeahead.typeahead('val', '');
	    $("#pnl-name").text("");
    	$("#pnl-address").text("");
    	$("#pnl-creditor").hide();

});

$("#btn-add").on("click", function(e){
	e.preventDefault();
	$("#txt-amt").val("");
	$("#txt-ref").val("")
	$("#pnl-add").show();
	
});
$("#btn-add-cancel").on("click", function(e){
	$("#pnl-add").hide();
});
var countrows = 0;
$("#btn-save").on("click", function(){
	$("#pnl-add").hide();
	$("#row-" + countrows).show();
	
	if ($("#txt-amt").val()){
	$("#row-0 td.amt").text($("#txt-amt").val());
	}
	if ($("#txt-ref").val()){
		$("#row-0 td.ref").text($("#txt-ref").val());
	}
	if($("#pnl-name").text()){
		$("#row-0 td.name").text($("#pnl-name").text());
	}	

		
	countrows+=1;
	$("#row-total").show();
	updatetotal();
});

$("#btn-unlisted-creditor").on("click", function(){
	//$("#pnl-add").show();
	
});


function updatetotal()
{
	var totalamount= 0;
	$('td.amt').each(function(){
		if ($(this).text() && $(this).is(":visible")){
			var amt = $(this).text();
			totalamount+= parseFloat(amt);
		}
	});
	$("#total-amt").text(totalamount.toFixed(2));
}

});