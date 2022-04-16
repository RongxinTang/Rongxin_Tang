//Data sourse
const materials = [
    {
     "name": "Moss",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909253\/Materials%20in%20my%20city\/IMG_4750_ch0xn8.jpg"
    },
    {
     "name": "Mint",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909279\/Materials%20in%20my%20city\/IMG_8197_yb0zy2.jpg"
    },
    {
     "name": "Chili",
     "type": "Food",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909286\/Materials%20in%20my%20city\/IMG_8194_uyqdd4.jpg"
    },
    {
     "name": "Cracked Mud Wall",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909282\/Materials%20in%20my%20city\/IMG_8097_pw1vro.jpg"
    },
    {
     "name": "Two-color Brick Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909280\/Materials%20in%20my%20city\/IMG_8096_st8ace.jpg"
    },
    {
     "name": "Brick Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909275\/Materials%20in%20my%20city\/IMG_8091_swtgu4.jpg"
    },
    {
     "name": "Plank",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909268\/Materials%20in%20my%20city\/IMG_8095_yal9vz.jpg"
    },
    {
     "name": "Wooden Door",
     "type": "BuildingMaterials",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909266\/Materials%20in%20my%20city\/IMG_8094_quwkfq.jpg"
    },
    {
     "name": "Mud Wall",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909265\/Materials%20in%20my%20city\/IMG_8085_rekady.jpg"
    },
    {
     "name": "Red Plank",
     "type": "BuildingMaterials",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909259\/Materials%20in%20my%20city\/IMG_8105_ay3mo7.jpg"
    },
    {
     "name": "Iron Gate",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909251\/Materials%20in%20my%20city\/IMG_4792_m7ow2h.jpg"
    },
    {
     "name": "Text on Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909287\/Materials%20in%20my%20city\/IMG_8104_bbwvct.jpg"
    },
    {
     "name": "Wooden Façade",
     "type": "BuildingMaterials",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909260\/Materials%20in%20my%20city\/IMG_8186_dwtnsy.jpg"
    },
    {
     "name": "Sliced Matsutake",
     "type": "EdibleFungi",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909245\/Materials%20in%20my%20city\/IMG_8130_ztt8aa.jpg"
    },
    {
     "name": "Matsutake",
     "type": "EdibleFungi",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909244\/Materials%20in%20my%20city\/IMG_8126_qkpeyx.jpg"
    },
    {
     "name": "Concrete Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909243\/Materials%20in%20my%20city\/IMG_4790_jsvnhp.jpg"
    },
    {
     "name": "Incense",
     "type": "Other",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909242\/Materials%20in%20my%20city\/IMG_4729_kmphua.jpg"
    },
    {
     "name": "Tools",
     "type": "Other",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1649909241\/Materials%20in%20my%20city\/IMG_4733_vzimxd.jpg"
    },
    {
     "name": "Geraniums",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650061949\/Materials%20in%20my%20city\/IMG_8207_f6akof.jpg"
    },
    {
     "name": "Philodendron Selloum",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650061975\/Materials%20in%20my%20city\/IMG_8227_njvrvw.jpg"
    },
    {
     "name": "Cilantro",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650061980\/Materials%20in%20my%20city\/IMG_8225_b2uhaj.jpg"
    },
    {
     "name": "Iron Door",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650061984\/Materials%20in%20my%20city\/IMG_8240_k05dmy.jpg"
    },
    {
     "name": "Stained Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650061998\/Materials%20in%20my%20city\/IMG_8268_a6phup.jpg"
    },
    {
     "name": "Wooden Door",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062000\/Materials%20in%20my%20city\/IMG_8271_kjrt18.jpg"
    },
    {
     "name": "Window and Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062002\/Materials%20in%20my%20city\/IMG_8259_gg9vfu.jpg"
    },
    {
     "name": "Second Alley",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062007\/Materials%20in%20my%20city\/IMG_8282_kqjp83.jpg"
    },
    {
     "name": "Wooden Fence",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062010\/Materials%20in%20my%20city\/IMG_8275_ustsnm.jpg"
    },
    {
     "name": "Ivy",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062014\/Materials%20in%20my%20city\/IMG_8292_cl60qz.jpg"
    },
    {
     "name": "Stained Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062018\/Materials%20in%20my%20city\/IMG_8285_bzapcd.jpg"
    },
    {
     "name": "Iron Door",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062024\/Materials%20in%20my%20city\/IMG_8306_jnwh9z.jpg"
    },
    {
     "name": "Eave",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650141198\/Materials%20in%20my%20city\/IMG_8314_o3zsjr.jpg"
    },
    {
     "name": "Japanese holly",
     "type": "Foliage",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062037\/Materials%20in%20my%20city\/IMG_8326_oxo6of.jpg"
    },
    {
     "name": "Window Decoration",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062040\/Materials%20in%20my%20city\/IMG_8318_sckaz9.jpg"
    },
    {
     "name": "Brick Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062044\/Materials%20in%20my%20city\/IMG_8328_owjnkk.jpg"
    },
    {
     "name": "Aptenia Cordifolia",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062040\/Materials%20in%20my%20city\/IMG_8320_julchl.jpg"
    },
    {
     "name": "Door Knocker",
     "type": "BuildingMaterials",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062049\/Materials%20in%20my%20city\/IMG_8330%E5%89%AF%E6%9C%AC_l0dtfa.jpg"
    },
    {
     "name": "Wooden Door",
     "type": "BuildingMaterials",
     "color": "Red",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062053\/Materials%20in%20my%20city\/IMG_8331_oznsou.jpg"
    },
    {
     "name": "Plantain Lily",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062056\/Materials%20in%20my%20city\/IMG_8343_wvy1fo.jpg"
    },
    {
     "name": "Boletus",
     "type": "EdibleFungi",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062067\/Materials%20in%20my%20city\/IMG_8121_%E6%8B%B7%E8%B4%9D_lvluek.jpg"
    },
    {
     "name": "Russula Virescens",
     "type": "EdibleFungi",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062067\/Materials%20in%20my%20city\/IMG_8138_%E6%8B%B7%E8%B4%9D_ktls1s.jpg"
    },
    {
     "name": "Tofu",
     "type": "Food",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062068\/Materials%20in%20my%20city\/IMG_8173_%E6%8B%B7%E8%B4%9D_mso5tg.jpg"
    },
    {
     "name": "Ganba Fungus",
     "type": "EdibleFungi",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062070\/Materials%20in%20my%20city\/IMG_8124_%E6%8B%B7%E8%B4%9D_buquzi.jpg"
    },
    {
     "name": "Chinese Banana",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062071\/Materials%20in%20my%20city\/IMG_8211_%E6%8B%B7%E8%B4%9D_txq3c9.jpg"
    },
    {
     "name": "Lotus Seed Pod",
     "type": "Foliage",
     "color": "Pink",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062082\/Materials%20in%20my%20city\/IMG_8164_%E6%8B%B7%E8%B4%9D_buk4dg.jpg"
    },
    {
     "name": "Boletus",
     "type": "EdibleFungi",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062084\/Materials%20in%20my%20city\/IMG_8156_%E6%8B%B7%E8%B4%9D_ov1ud2.jpg"
    },
    {
     "name": "Boletus",
     "type": "EdibleFungi",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062083\/Materials%20in%20my%20city\/IMG_8147_%E6%8B%B7%E8%B4%9D_t9oa2a.jpg"
    },
    {
     "name": "Termite Mushroom",
     "type": "EdibleFungi",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062085\/Materials%20in%20my%20city\/IMG_8158_%E6%8B%B7%E8%B4%9D_ljb5q1.jpg"
    },
    {
     "name": "Pomegranate",
     "type": "Food",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062087\/Materials%20in%20my%20city\/IMG_8168_%E6%8B%B7%E8%B4%9D_qalzrm.jpg"
    },
    {
     "name": "Boletus",
     "type": "EdibleFungi",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062087\/Materials%20in%20my%20city\/IMG_8142_%E6%8B%B7%E8%B4%9D_nmm0bn.jpg"
    },
    {
     "name": "Noodles",
     "type": "Food",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062093\/Materials%20in%20my%20city\/IMG_8172_%E6%8B%B7%E8%B4%9D_iso0gx.jpg"
    },
    {
     "name": "Green Dates",
     "type": "Food",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062093\/Materials%20in%20my%20city\/IMG_8171_%E6%8B%B7%E8%B4%9D_qxvnnc.jpg"
    },
    {
     "name": "Giant Taro",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650141155\/Materials%20in%20my%20city\/IMG_8213_%E6%8B%B7%E8%B4%9D_yjuwva.jpg"
    },
    {
     "name": "Quail Eggs",
     "type": "Food",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062097\/Materials%20in%20my%20city\/IMG_8166_%E6%8B%B7%E8%B4%9D_kblsm1.jpg"
    },
    {
     "name": "Marigold",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062099\/Materials%20in%20my%20city\/IMG_8210_%E6%8B%B7%E8%B4%9D_tg0zi3.jpg"
    },
    {
     "name": "Rusty Door",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650141020\/Materials%20in%20my%20city\/IMG_8222_%E6%8B%B7%E8%B4%9D_yhyhnq.jpg"
    },
    {
     "name": "Cracked Mud Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062457\/Materials%20in%20my%20city\/IMG_8289_%E6%8B%B7%E8%B4%9D_ylvkal.jpg"
    },
    {
     "name": "Mud and Brick Wall",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062462\/Materials%20in%20my%20city\/IMG_8272_%E6%8B%B7%E8%B4%9D_iqlk5c.jpg"
    },
    {
     "name": "Cracked Brick Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062463\/Materials%20in%20my%20city\/IMG_8287_%E6%8B%B7%E8%B4%9D_tzstbd.jpg"
    },
    {
     "name": "Carved Door",
     "type": "BuildingMaterials",
     "color": "Khaki",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062465\/Materials%20in%20my%20city\/IMG_8256_%E6%8B%B7%E8%B4%9D_e5xjbw.jpg"
    },
    {
     "name": "Brick Wall",
     "type": "BuildingMaterials",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062466\/Materials%20in%20my%20city\/IMG_8288_%E6%8B%B7%E8%B4%9D_rr5lr7.jpg"
    },
    {
     "name": "Pavement Tiles",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650062466\/Materials%20in%20my%20city\/IMG_8269%E5%89%AF%E6%9C%AC_%E6%8B%B7%E8%B4%9D_yucf84.jpg"
    },
    {
     "name": "Hudson River",
     "type": "Sky",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064604\/Materials%20in%20my%20city\/IMG_0010_%E6%8B%B7%E8%B4%9D_laxv1x.jpg"
    },
    {
     "name": "Concrete Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064604\/Materials%20in%20my%20city\/IMG_2138_%E6%8B%B7%E8%B4%9D_ytaan2.jpg"
    },
    {
     "name": "Central Park",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064604\/Materials%20in%20my%20city\/IMG_0129_%E6%8B%B7%E8%B4%9D_u4joah.jpg"
    },
    {
     "name": "Columbus Ave",
     "type": "Sky",
     "color": "Pink",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064604\/Materials%20in%20my%20city\/IMG_2496_%E6%8B%B7%E8%B4%9D_bfnw1z.jpg"
    },
    {
     "name": "Miami",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064604\/Materials%20in%20my%20city\/IMG_1816_%E6%8B%B7%E8%B4%9D_x8vkqw.jpg"
    },
    {
     "name": "Columbus Ave",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_0102_%E6%8B%B7%E8%B4%9D_wbxhqo.jpg"
    },
    {
     "name": "Brick Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_3024_%E6%8B%B7%E8%B4%9D_pmqgym.jpg"
    },
    {
     "name": "Central Park",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_8740_%E6%8B%B7%E8%B4%9D_vki7cc.jpg"
    },
    {
     "name": "Downtown",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_8788_%E6%8B%B7%E8%B4%9D_umhatn.jpg"
    },
    {
     "name": "Central Park",
     "type": "Sky",
     "color": "Purple",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_8724_%E6%8B%B7%E8%B4%9D_tp5lnm.jpg"
    },
    {
     "name": "Little Island",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064605\/Materials%20in%20my%20city\/IMG_3211_%E6%8B%B7%E8%B4%9D_y5wm8c.jpg"
    },
    {
     "name": "Blue Wood-aster",
     "type": "Foliage",
     "color": "Purple",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_9438_%E6%8B%B7%E8%B4%9D_w7il0v.jpg"
    },
    {
     "name": "Highway",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_9102_%E6%8B%B7%E8%B4%9D_st4vdu.jpg"
    },
    {
     "name": "Broadway",
     "type": "Sky",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_9803_%E6%8B%B7%E8%B4%9D_x5mrhp.jpg"
    },
    {
     "name": "Steel Structure",
     "type": "BuildingMaterials",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_8872_%E6%8B%B7%E8%B4%9D_nftkba.jpg"
    },
    {
     "name": "Aluminum Façade",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_3016_%E6%8B%B7%E8%B4%9D_t8vgz8.jpg"
    },
    {
     "name": "Broadway",
     "type": "Sky",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064606\/Materials%20in%20my%20city\/IMG_9804_%E6%8B%B7%E8%B4%9D_tcswj1.jpg"
    },
    {
     "name": "Broadway",
     "type": "Sky",
     "color": "Pink",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064608\/Materials%20in%20my%20city\/IMG_9653_%E6%8B%B7%E8%B4%9D_ga986j.jpg"
    },
    {
     "name": "Airport",
     "type": "Sky",
     "color": "Beige",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064608\/Materials%20in%20my%20city\/IMG_9192_%E6%8B%B7%E8%B4%9D_svldo8.jpg"
    },
    {
     "name": "Brick Wall",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064608\/Materials%20in%20my%20city\/IMG_9353_%E6%8B%B7%E8%B4%9D_sqfjnb.jpg"
    },
    {
     "name": "Orlando",
     "type": "Sky",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064609\/Materials%20in%20my%20city\/IMG_3615_%E6%8B%B7%E8%B4%9D_xgskgq.jpg"
    },
    {
     "name": "Orlando",
     "type": "Sky",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064611\/Materials%20in%20my%20city\/IMG_1632_%E6%8B%B7%E8%B4%9D_d96vqw.jpg"
    },
    {
     "name": "Steel Pillar",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064611\/Materials%20in%20my%20city\/IMG_3219_%E6%8B%B7%E8%B4%9D_lbrdmp.jpg"
    },
    {
     "name": "Shrubland",
     "type": "Foliage",
     "color": "Orange",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064611\/Materials%20in%20my%20city\/IMG_9439_%E6%8B%B7%E8%B4%9D_rq5xew.jpg"
    },
    {
     "name": "Pavement",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064613\/Materials%20in%20my%20city\/IMG_0695_%E6%8B%B7%E8%B4%9D_magugx.jpg"
    },
    {
     "name": "Pool",
     "type": "Other",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064616\/Materials%20in%20my%20city\/IMG_9496_qzsn7s.jpg"
    },
    {
     "name": "Marguerite Daisy",
     "type": "Foliage",
     "color": "Pink",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064620\/Materials%20in%20my%20city\/IMG_9411_rsqsm5.jpg"
    },
    {
     "name": "Wall",
     "type": "BuildingMaterials",
     "color": "Grey",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064622\/Materials%20in%20my%20city\/IMG_9279_zihpl9.jpg"
    },
    {
     "name": "New York",
     "type": "Sky",
     "color": "Blue",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064627\/Materials%20in%20my%20city\/IMG_9220_v2ipey.jpg"
    },
    {
     "name": "Wooden Door",
     "type": "BuildingMaterials",
     "color": "Brown",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064645\/Materials%20in%20my%20city\/IMG_1726_sz3szv.jpg"
    },
    {
     "name": "Grass",
     "type": "Foliage",
     "color": "Green",
     "image": "https:\/\/res.cloudinary.com\/drvfsh5ig\/image\/upload\/v1650064663\/Materials%20in%20my%20city\/IMG_3823_p3kpls.jpg"
    }
   ];


//Add collapsable sorting menu

var collBtn = document.getElementsByClassName("collapsible");

for (var i = 0; i < collBtn.length; i++) {
  function expand(){
    this.classList.toggle("active");
    let collContent = this.nextElementSibling;
    if (collContent.style.display === "block"){
      collContent.style.display = "none";
    } else {
      collContent.style.display = "block";
    }
  }
  
  collBtn[i].addEventListener("click", expand);
  
}


//Render materials to the page
const cardContainer = document.querySelector(".cardContainer");

function renderMaterialToPage(materials) {
    for (let i = 0; i < materials.length; i++){
        let card = document.createElement("li");
        card.classList.add(materials[i].color, materials[i].type, "card");

        let description = document.createElement("div");
        description.classList.add(materials[i].color,"description");

        let title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = materials[i].name;

        let type = document.createElement("p");
        type.classList.add(materials[i].type);
        type.textContent = materials[i].type;

        let image = document.createElement("img");
        image.setAttribute("src", materials[i].image);

        cardContainer.appendChild(card);
        card.appendChild(description);
        description.appendChild(title);
        description.appendChild(type);
        card.appendChild(image);
    }
}

renderMaterialToPage(materials);


//filter by type

let typeFilter = document.querySelector(".typeFilter");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
    //console.log("clicked", event.target);
    if (event.target.classList.contains("filter-btn")){
        typeFilter.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");
        console.log(filterValue)

        for (let i = 0; i < cards.length; i++) {
            //console.log(cards[i].classList);
            if (cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove("hide");
                cards[i].classList.add("show");
            } else {
                cards[i].classList.remove("show");
                cards[i].classList.add("hide");
            }
        }
    }
}

typeFilter.addEventListener("click", filterFn);


//filter by color

let colorFilter = document.querySelector(".colorFilter");

function filterFnColor(event) {
    //console.log("clicked", event.target);
    if (event.target.classList.contains("filter-btn")){
        colorFilter.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");
        console.log(filterValue)

        for (let i = 0; i < cards.length; i++) {
            //console.log(cards[i].classList);
            if (cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove("hide");
                cards[i].classList.add("show");
            } else {
                cards[i].classList.remove("show");
                cards[i].classList.add("hide");
            }
        }
    }
}

colorFilter.addEventListener("click", filterFnColor);



//search bar
const searchBar = document.querySelector("input");

function searchName(e) {
  const searchString = e.target.value.toLowerCase();
    console.log("line 78: ", searchString);
 
  
  const searchedName = materials.filter(function (material){
    if (searchString) {
      return material.name.toLowerCase().includes(searchString);
    }
  });
  displaySearched(searchedName);
  if (searchString === ""){
    renderMaterialToPage(materials);
  };
}

function displaySearched(newCards){
  //console.log("line 90: ", newCards);
  clearList();
  for (let i = 0; i < newCards.length; i++){
        let card = document.createElement("li");
        card.classList.add(newCards[i].color, newCards[i].type, "card");

        let description = document.createElement("div");
        description.classList.add(newCards[i].color,"description");

        let title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = newCards[i].name;

        let type = document.createElement("p");
        type.classList.add(newCards[i].type);
        type.textContent = newCards[i].type;

        let image = document.createElement("img");
        image.setAttribute("src", newCards[i].image);

        cardContainer.appendChild(card);
        card.appendChild(description);
        description.appendChild(title);
        description.appendChild(type);
        card.appendChild(image);
    }
}

function clearList(){
  cardContainer.innerHTML = "";
}


searchBar.addEventListener("keyup", searchName);

