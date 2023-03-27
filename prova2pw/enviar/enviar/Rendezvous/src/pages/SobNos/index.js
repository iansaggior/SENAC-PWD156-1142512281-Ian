import { ApiSobNos } from "../../api/api";
import '../SobNos/styles.css'

export const SobNos = () => {

    ApiSobNos();

    return (
        <div id="global">
            <div id="content">
                <h1 id="posts">Quem nós somos ?</h1>
            </div>
        </div>
    );
}