import styles from './Horarios.module.css'
function Horarios() {
    return (
        <div className={styles.horarios}>
            <h1 className={styles.aga1}>HORARIOS DE AULA</h1>
            <div className={styles.tabela}>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Turma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <h2>Segunda e quarta - gi</h2>
                        <tr>
                            <td>18:30</td>
                            <td> - </td>
                            <td>Kids</td>
                        </tr>
                        <tr>
                            <td>19:30</td>
                            <td> - </td>
                            <td>Adolescentes</td>
                        </tr>
                        <h2>Terça e quinta - gi</h2>
                        <tr>
                            <td>18:30</td>
                            <td> - </td>
                            <td>Adulto iniciantes</td>
                        </tr>
                        <tr>
                            <td>19:30</td>
                            <td> - </td>
                            <td>Adulto Graduados</td>
                        </tr>
                        <h2>Domingo - nogi</h2>
                        <tr>
                            <td>16:00</td>
                            <td> - </td>
                            <td>Livre</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}
export default Horarios