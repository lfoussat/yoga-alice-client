import React from 'react'
import { Input } from 'semantic-ui-react'
import { api } from '../api.js'

const Bloc = ({ bloc, headerTitle }) =>
  <React.Fragment>
    <h2>{headerTitle}</h2>
    <label>Titre :<br />
      <Input
        type="text"
        id="inspiration_title"
        name="title"
        maxLength='64'
        wrap='hard'
        placeholder="Tapez votre titre ici"
        value={`${bloc.draftTitle}` || ''}
        onChange={event => this.handleChange(event, 'draftTitle')} />
      {bloc.draftTitle === '' ? <span style={{ color: 'red' }}>* Il faut renseigner un titre !</span> : ''}
    </label><br />
    <label>Description :<br />
      <textarea
        type="text"
        id="inspiration_description"
        name="description"
        placeholder="Tapez votre contenu ici"
        value={`${bloc.draftContent}`}
        onChange={event => this.handleChange(event, 'draftDescription')} />
      {bloc.draftContent === '' ? <span style={{ color: 'red' }}>* Il faut renseigner un contenu !</span> : ''}
    </label><br />
    <label>Image :<br />
      <img
        className="thumbnailPic"
        style={{ width: '200px', height: '200px', marginTop: '10px' }}
        src={`${api}/images/${bloc.draftImageUrl}`}
        alt={bloc.draftTitle} /><br />
      <Input
        id="edit_inspiration_image"
        type="file"
        accept='image/*'
        name='draftImageUrl'
        onChange={event => this.handleChange(event, 'draftImageUrl')} />
    </label><br />
  </React.Fragment>

export default Bloc
