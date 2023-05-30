import { Button, Form } from 'antd'

function App() {
  const mahasiswa = [
    {
      id: 1,
      name: 'Mahasiswa 1',
    },
    {
      id: 2,
      name: 'Mahasiswa 2',
    },
    {
      id: 3,
      name: 'Mahasiswa 3',
    },
    {
      id: 4,
      name: 'Mahasiswa 4',
    },
    {
      id: 5,
      name: 'Mahasiswa 5',
    },
    {
      id: 6,
      name: 'Mahasiswa 5',
    },
    {
      id: 7,
      name: 'Mahasiswa 5',
    },
    {
      id: 8,
      name: 'Mahasiswa 5',
    },
    {
      id: 9,
      name: 'Mahasiswa 5',
    },
    {
      id: 10,
      name: 'Mahasiswa 5',
    },
  ]
  let hasilPenilaian = null
  const onFinish = async (values) => {
    await mahasiswa.map((mhs) => {
      const vr1 = `aspek1_${mhs.id}`
      const vr2 = `aspek2_${mhs.id}`
      const vr3 = `aspek3_${mhs.id}`
      const vr4 = `aspek4_${mhs.id}`
      const vr5 = `aspek5_${mhs.id}`
      const vr6 = `aspek6_${mhs.id}`
      const vr7 = `aspek7_${mhs.id}`
      const vr8 = `aspek8_${mhs.id}`
      const vr9 = `aspek9_${mhs.id}`
      const vr10 = `aspek10_${mhs.id}`

      if (hasilPenilaian === null) {
        hasilPenilaian = {
          aspek_penilaian_1: {
            [`mahasiswa_${mhs.id}`]:
              values[vr1] === undefined ? 1 : parseInt(values[vr1]),
          },
          aspek_penilaian_2: {
            [`mahasiswa_${mhs.id}`]:
              values[vr2] === undefined ? 1 : parseInt(values[vr2]),
          },
          aspek_penilaian_3: {
            [`mahasiswa_${mhs.id}`]:
              values[vr3] === undefined ? 1 : parseInt(values[vr3]),
          },
          aspek_penilaian_4: {
            [`mahasiswa_${mhs.id}`]:
              values[vr4] === undefined ? 1 : parseInt(values[vr4]),
          },
          aspek_penilaian_5: {
            [`mahasiswa_${mhs.id}`]:
              values[vr5] === undefined ? 1 : parseInt(values[vr5]),
          },
          aspek_penilaian_6: {
            [`mahasiswa_${mhs.id}`]:
              values[vr6] === undefined ? 1 : parseInt(values[vr6]),
          },
          aspek_penilaian_7: {
            [`mahasiswa_${mhs.id}`]:
              values[vr7] === undefined ? 1 : parseInt(values[vr7]),
          },
          aspek_penilaian_8: {
            [`mahasiswa_${mhs.id}`]:
              values[vr8] === undefined ? 1 : parseInt(values[vr8]),
          },
          aspek_penilaian_9: {
            [`mahasiswa_${mhs.id}`]:
              values[vr9] === undefined ? 1 : parseInt(values[vr9]),
          },
          aspek_penilaian_10: {
            [`mahasiswa_${mhs.id}`]:
              values[vr10] === undefined ? 1 : parseInt(values[vr10]),
          },
        }
      } else {
        hasilPenilaian.aspek_penilaian_1[`mahasiswa_${mhs.id}`] =
          values[vr1] === undefined ? 1 : parseInt(values[vr1])
        hasilPenilaian.aspek_penilaian_2[`mahasiswa_${mhs.id}`] =
          values[vr2] === undefined ? 1 : parseInt(values[vr2])
        hasilPenilaian.aspek_penilaian_3[`mahasiswa_${mhs.id}`] =
          values[vr3] === undefined ? 1 : parseInt(values[vr3])
        hasilPenilaian.aspek_penilaian_4[`mahasiswa_${mhs.id}`] =
          values[vr4] === undefined ? 1 : parseInt(values[vr4])
        hasilPenilaian.aspek_penilaian_5[`mahasiswa_${mhs.id}`] =
          values[vr5] === undefined ? 1 : parseInt(values[vr5])
        hasilPenilaian.aspek_penilaian_6[`mahasiswa_${mhs.id}`] =
          values[vr6] === undefined ? 1 : parseInt(values[vr6])
        hasilPenilaian.aspek_penilaian_7[`mahasiswa_${mhs.id}`] =
          values[vr7] === undefined ? 1 : parseInt(values[vr7])
        hasilPenilaian.aspek_penilaian_8[`mahasiswa_${mhs.id}`] =
          values[vr8] === undefined ? 1 : parseInt(values[vr8])
        hasilPenilaian.aspek_penilaian_9[`mahasiswa_${mhs.id}`] =
          values[vr9] === undefined ? 1 : parseInt(values[vr9])
        hasilPenilaian.aspek_penilaian_10[`mahasiswa_${mhs.id}`] =
          values[vr10] === undefined ? 1 : parseInt(values[vr10])
      }
      // console.log(mhs.name, `${values.aspek1_}` + `${mhs.id}`)
    })
    console.log(hasilPenilaian)
  }

  return (
    <>
      <Form onFinish={onFinish}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gridGap: '10px',
          }}
        >
          <span></span>
          <span className="font-bold">Aspek Penilaian 1</span>
          <span className="font-bold">Aspek Penilaian 2</span>
          <span className="font-bold">Aspek Penilaian 3</span>
          <span className="font-bold">Aspek Penilaian 4</span>
          <span className="font-bold">Aspek Penilaian 5</span>
          <span className="font-bold">Aspek Penilaian 6</span>
          <span className="font-bold">Aspek Penilaian 7</span>
          <span className="font-bold">Aspek Penilaian 8</span>
          <span className="font-bold">Aspek Penilaian 9</span>
          <span className="font-bold">Aspek Penilaian 10</span>
        </div>
        {mahasiswa.map((mhs) => (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
              gridGap: '10px',
            }}
          >
            <Form.Item label={mhs.name}></Form.Item>
            <Form.Item name={`aspek1_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek2_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek3_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek4_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek5_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek6_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek7_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek8_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek9_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
            <Form.Item name={`aspek10_${mhs.id}`}>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Form.Item>
          </div>
        ))}
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form>
    </>
  )
}

export default App
