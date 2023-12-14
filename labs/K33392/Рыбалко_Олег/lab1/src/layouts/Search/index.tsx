import { Form, InputGroup, Button, Container } from 'react-bootstrap'
import { ChangeEvent, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  SearchState,
  searchByTitle,
  searchByUsername,
} from '@/store/slices/search'
import { RootState } from '@/store'
import { UserSearchResult } from '@/components/UserSearchResult'
import { FeedPost } from '@/components/FeedPost'

enum Filter {
  username,
  title,
}

export function SearchLayout() {
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.username)
  const { t } = useTranslation('search')
  const [query, setQuery] = useState<string>('')
  const dispatch = useDispatch()
  const searchStore = useSelector<RootState>(
    (state) => state.search
  ) as SearchState

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value)
    setCurrentFilter(val)
  }

  const getPlaceholderByFilter = useCallback(
    (f: Filter) => {
      switch (f) {
        case Filter.username:
          return t('usernameFilterPlaceholder')
        case Filter.title:
          return t('titleFilterPlaceholder')
        default:
          return
      }
    },
    [t]
  )

  const search = useCallback(() => {
    switch (currentFilter) {
      case Filter.title:
        dispatch(searchByTitle(query))
        break
      case Filter.username:
        dispatch(searchByUsername(query))
    }
  }, [currentFilter, query, dispatch])

  return (
    <Container className={styles.container}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder={getPlaceholderByFilter(currentFilter)}
          aria-describedby="basic-addon2"
          size="lg"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Button variant="outline-primary" onClick={search}>
          {t('searchButton')}
        </Button>
      </InputGroup>
      <Form>
        <Form.Check
          inline
          onChange={handleChange}
          checked={currentFilter === Filter.username}
          type={'radio'}
          label={t('usernameRadioLabel')}
          name="group1"
          value={Filter.username}
        />
        <Form.Check
          inline
          onChange={handleChange}
          checked={currentFilter === Filter.title}
          type={'radio'}
          label={t('titleRadioLabel')}
          name="group1"
          value={Filter.title}
        />
      </Form>

      <div className="mt-4">
        {currentFilter === Filter.username
          ? searchStore.byUsername.map((el) => (
              <UserSearchResult username={el.username} />
            ))
          : searchStore.byTitle
              .map((el) => {
                return {
                  authorUsername: el.expand!.author.username,
                  body: el.body,
                  title: el.title,
                  id: el.id,
                  likesCount: 0,
                }
              })
              .map((post) => <FeedPost post={post} />)}
      </div>
    </Container>
  )
}

